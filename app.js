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

// Initialize Firebase with the provided configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3n0yJDEGULLwPmO5PlY906sVxjVTYLnw",
  authDomain: "my-first-pwa-1af14.firebaseapp.com",
  projectId: "my-first-pwa-1af14",
  storageBucket: "my-first-pwa-1af14.appspot.com",
  messagingSenderId: "764859055293",
  appId: "1:764859055293:web:e912e7c3e2bd74098b4bd4",
};

// Initialize the Firebase app and get a Firestore instance
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Variables to store the API key, Google Generative AI instance, and model
let apiKey, genAI, model;

// Function to fetch the API key from Firestore and initialize the Google Generative AI model
async function getApiKey() {
  // Fetch the API key document from Firestore
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key; // Extract the API key from the document
  genAI = new GoogleGenerativeAI(apiKey); // Initialize the Google Generative AI instance
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Get the generative model
}

// DOM Elements
const taskInput = document.getElementById("taskInput"); // Input field for adding tasks
const addTaskBtn = document.getElementById("addTaskBtn"); // Button to add tasks
const taskList = document.getElementById("taskList"); // List to display tasks
const aiButton = document.getElementById("send-btn"); // Button to send chatbot prompts
const aiInput = document.getElementById("chat-input"); // Input field for chatbot prompts
const chatHistory = document.getElementById("chat-history"); // Container to display chatbot messages

// Render Tasks on Page Load
window.addEventListener("load", () => {
  getApiKey(); // Fetch the API key and initialize the AI model
  renderTasks(); // Render tasks from Firestore
});

// Add Task
addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim(); // Get the task text and trim whitespace
  if (task) {
    let taskId = await addTaskToFirestore(task); // Add the task to Firestore and get the task ID
    taskInput.value = ""; // Clear the input field
    createLiTask(taskId, task); // Create a new list item for the task
  } else {
    alert("Please enter a task!"); // Alert if the task input is empty
  }
});

// Remove Task
taskList.addEventListener("click", async (e) => {
  if (e.target.tagName === "LI") {
    // Check if the clicked element is a list item (task)
    await updateDoc(doc(db, "todos", e.target.id), { completed: true }); // Mark the task as completed in Firestore
    e.target.remove(); // Remove the task from the UI
  }
});

// Render Tasks from Firestore
async function renderTasks() {
  let tasks = await getTasksFromFirestore(); // Fetch tasks from Firestore
  taskList.innerHTML = ""; // Clear the task list in the UI

  // Map tasks to include additional properties and sort them by creation time
  let taskArr = tasks.map((task) => ({
    id: task.id,
    text: task.text,
    completed: task.completed,
    timeCreated: task.timeCreated || new Date().toISOString(),
  }));

  // Sort tasks by creation time (newest first)
  taskArr.sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated));

  // Render only incomplete tasks
  taskArr.forEach((task) => {
    if (!task.completed) createLiTask(task.id, task.text);
  });
}

// Firestore Helper Functions
async function addTaskToFirestore(taskText) {
  // Add a new task to Firestore with the provided text and default properties
  let task = await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
    timeCreated: new Date().toISOString(),
  });
  return task.id; // Return the ID of the newly created task
}

async function getTasksFromFirestore() {
  // Fetch all tasks from the "todos" collection in Firestore
  let querySnapshot = await getDocs(collection(db, "todos"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // Include all document data
  }));
}

// Create Task in UI
function createLiTask(id, text) {
  let taskItem = document.createElement("li"); // Create a new list item element
  taskItem.id = id; // Set the ID of the list item to the task ID
  taskItem.textContent = text; // Set the text content of the list item
  taskItem.tabIndex = 0; // Make the list item focusable
  taskList.appendChild(taskItem); // Append the list item to the task list
}

// Allow task addition on "Enter" key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click(); // Simulate a click on the add task button when Enter is pressed
  }
});

// Allow tasks to be completed on "Enter"
taskList.addEventListener("keypress", async function (e) {
  if (e.target.tagName === "LI" && e.key === "Enter") {
    // Check if the pressed key is Enter and the target is a list item
    await updateDoc(doc(db, "todos", e.target.id), { completed: true }); // Mark the task as completed
    renderTasks(); // Refresh the task list
  }
});

// Chatbot button event listener
aiButton.addEventListener("click", async () => {
  let prompt = aiInput.value.trim().toLowerCase(); // Get the chatbot prompt and trim whitespace
  if (prompt) {
    if (!(await ruleChatBot(prompt))) {
      // Check if the prompt matches any predefined rules
      await askChatBot(prompt); // If not, send the prompt to the chatbot
    }
  } else {
    appendMessage("Please enter a prompt"); // Alert if the prompt is empty
  }
});

// Process simple chatbot commands
async function ruleChatBot(request) {
  if (request.startsWith("add task")) {
    // Check if the request is to add a task
    let task = request.replace("add task", "").trim(); // Extract the task text
    if (task) {
      await addTaskToFirestore(task); // Add the task to Firestore
      appendMessage("Task '" + task + "' added!"); // Notify the user
    } else {
      appendMessage("Please enter a task"); // Alert if the task text is empty
    }
    return true; // Indicate that the request was handled
  } else if (request.startsWith("complete")) {
    // Check if the request is to complete a task
    let taskName = request.replace("complete", "").trim(); // Extract the task name
    if (taskName) {
      let success = await removeFromTaskName(taskName); // Mark the task as completed
      appendMessage(
        success ? `Task '${taskName}' marked as completed!` : "Task not found"
      ); // Notify the user
    } else {
      appendMessage("Please enter a task name"); // Alert if the task name is empty
    }
    return true; // Indicate that the request was handled
  }
  return false; // Indicate that the request was not handled
}

// Chatbot API request
async function askChatBot(request) {
  let response = await model.generateContent(request); // Send the request to the chatbot
  let textResponse =
    response.candidates[0]?.content?.parts[0]?.text || "No response"; // Extract the response text
  appendMessage(textResponse); // Display the response
}

// Display chatbot messages
function appendMessage(message) {
  let history = document.createElement("div"); // Create a new div for the message
  history.textContent = message; // Set the message text
  history.className = "history"; // Add a class for styling
  chatHistory.appendChild(history); // Append the message to the chat history
}

// Complete a task from chatbot input
async function removeFromTaskName(taskText) {
  let tasks = await getTasksFromFirestore(); // Fetch all tasks
  let matchedTask = tasks.find(
    (t) => t.text.toLowerCase() === taskText.toLowerCase()
  ); // Find the matching task

  if (!matchedTask) return false; // Return false if no matching task is found

  await updateDoc(doc(db, "todos", matchedTask.id), { completed: true }); // Mark the task as completed
  renderTasks(); // Refresh the task list
  return true; // Return true to indicate success
}

// Service Worker Registration
if ("serviceWorker" in navigator) {
  const sw = new URL("service-worker.js", import.meta.url);
  navigator.serviceWorker
    .register(sw.href)
    .then(() => console.log("Service Worker Registered")) // Log success
    .catch((err) => console.error("Service Worker Error:", err)); // Log errors
}

// Global error handler
window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message); // Log any global errors
});
