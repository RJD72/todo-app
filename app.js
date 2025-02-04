// Import necessary Firebase modules for app initialization and Firestore operations
import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3n0yJDEGULLwPmO5PlY906sVxjVTYLnw",
  authDomain: "my-first-pwa-1af14.firebaseapp.com",
  projectId: "my-first-pwa-1af14",
  storageBucket: "my-first-pwa-1af14.appspot.com",
  messagingSenderId: "764859055293",
  appId: "1:764859055293:web:e912e7c3e2bd74098b4bd4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let apiKey, genAI, model;

// Get API key from Firestore
async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

// Render Tasks on Page Load
window.addEventListener("load", () => {
  getApiKey();
  renderTasks();
});

// Add Task
addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (task) {
    let taskId = await addTaskToFirestore(task);
    taskInput.value = "";
    createLiTask(taskId, task);
  } else {
    alert("Please enter a task!");
  }
});

// Remove Task
taskList.addEventListener("click", async (e) => {
  if (e.target.tagName === "LI") {
    await updateDoc(doc(db, "todos", e.target.id), { completed: true });
    e.target.remove();
  }
});

// Render Tasks from Firestore
async function renderTasks() {
  let tasks = await getTasksFromFirestore();
  taskList.innerHTML = "";

  let taskArr = tasks.map((task) => ({
    id: task.id,
    text: task.text,
    completed: task.completed,
    timeCreated: task.timeCreated || new Date().toISOString(),
  }));

  taskArr.sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated));

  taskArr.forEach((task) => {
    if (!task.completed) createLiTask(task.id, task.text);
  });
}

// Firestore Helper Functions
async function addTaskToFirestore(taskText) {
  let task = await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
    timeCreated: new Date().toISOString(),
  });
  return task.id;
}

async function getTasksFromFirestore() {
  let querySnapshot = await getDocs(collection(db, "todos"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// Create Task in UI
function createLiTask(id, text) {
  let taskItem = document.createElement("li");
  taskItem.id = id;
  taskItem.textContent = text;
  taskItem.tabIndex = 0;
  taskList.appendChild(taskItem);
}

// Allow task addition on "Enter" key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

// Allow tasks to be completed on "Enter"
taskList.addEventListener("keypress", async function (e) {
  if (e.target.tagName === "LI" && e.key === "Enter") {
    await updateDoc(doc(db, "todos", e.target.id), { completed: true });
    renderTasks();
  }
});

// Chatbot button event listener
aiButton.addEventListener("click", async () => {
  let prompt = aiInput.value.trim().toLowerCase();
  if (prompt) {
    if (!(await ruleChatBot(prompt))) {
      await askChatBot(prompt);
    }
  } else {
    appendMessage("Please enter a prompt");
  }
});

// Process simple chatbot commands
async function ruleChatBot(request) {
  if (request.startsWith("add task")) {
    let task = request.replace("add task", "").trim();
    if (task) {
      await addTaskToFirestore(task);
      appendMessage("Task '" + task + "' added!");
    } else {
      appendMessage("Please enter a task");
    }
    return true;
  } else if (request.startsWith("complete")) {
    let taskName = request.replace("complete", "").trim();
    if (taskName) {
      let success = await removeFromTaskName(taskName);
      appendMessage(
        success ? `Task '${taskName}' marked as completed!` : "Task not found"
      );
    } else {
      appendMessage("Please enter a task name");
    }
    return true;
  }
  return false;
}

// Chatbot API request
async function askChatBot(request) {
  let response = await model.generateContent(request);
  let textResponse =
    response.candidates[0]?.content?.parts[0]?.text || "No response";
  appendMessage(textResponse);
}

// Display chatbot messages
function appendMessage(message) {
  let history = document.createElement("div");
  history.textContent = message;
  history.className = "history";
  chatHistory.appendChild(history);
}

// Complete a task from chatbot input
async function removeFromTaskName(taskText) {
  let tasks = await getTasksFromFirestore();
  let matchedTask = tasks.find(
    (t) => t.text.toLowerCase() === taskText.toLowerCase()
  );

  if (!matchedTask) return false;

  await updateDoc(doc(db, "todos", matchedTask.id), { completed: true });
  renderTasks(); // Refresh UI
  return true;
}

// Service Worker Registration
if ("serviceWorker" in navigator) {
  const sw = new URL("service-worker.js", import.meta.url);
  navigator.serviceWorker
    .register(sw.href)
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.error("Service Worker Error:", err));
}

// Global error handler
window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});
