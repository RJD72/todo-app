// Import necessary Firebase modules for app initialization and Firestore operations
import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdown = document.getElementById("dropdown");
const notification = document.getElementById("notification");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3n0yJDEGULLwPmO5PlY906sVxjVTYLnw",
  authDomain: "my-first-pwa-1af14.firebaseapp.com",
  projectId: "my-first-pwa-1af14",
  storageBucket: "my-first-pwa-1af14.appspot.com",
  messagingSenderId: "764859055293",
  appId: "1:764859055293:web:e912e7c3e2bd74098b4bd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Service Worker Registration
if ("serviceWorker" in navigator) {
  const sw = new URL("service-worker.js", import.meta.url);
  navigator.serviceWorker
    .register(sw.href, { scope: "/todo-app/" })
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.error("Service Worker Error:", err));
}

// Event Listeners
window.addEventListener("load", renderTasks);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskCompletion);
taskList.addEventListener("keypress", handleTaskCompletion);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
dropdownBtn.addEventListener("click", toggleDropdown);

// Functions
async function renderTasks() {
  try {
    const tasks = await getTasksFromFirestore();
    taskList.innerHTML = ""; // Clear the task list
    tasks.forEach((task) => {
      if (!task.data().completed) {
        const taskItem = document.createElement("li");
        taskItem.id = task.id;
        taskItem.textContent = task.data().text;
        taskItem.tabIndex = 0;
        taskList.appendChild(taskItem);
      }
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

async function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    await addTaskToFirestore(task);
    taskInput.value = "";
    renderTasks();
    showNotification("Task added successfully!");
  } else {
    alert("Please enter a task!");
  }
}

async function handleTaskCompletion(e) {
  if ((e.type === "click" || e.key === "Enter") && e.target.tagName === "LI") {
    const taskItem = e.target;
    await updateDoc(doc(db, "todos", taskItem.id), { completed: true });
    taskItem.classList.add("completed"); // Add visual feedback
    setTimeout(renderTasks, 500); // Wait to refresh
  }
}

// async function handleTaskCompletion(e) {
//   if ((e.type === "click" || e.key === "Enter") && e.target.tagName === "LI") {
//     await updateDoc(doc(db, "todos", e.target.id), { completed: true });
//     renderTasks();
//   }
// }

async function addTaskToFirestore(taskText) {
  try {
    await addDoc(collection(db, "todos"), {
      text: taskText,
      completed: false,
    });
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

// async function addTaskToFirestore(taskText) {
//   await addDoc(collection(db, "todos"), {
//     text: taskText,
//     completed: false,
//   });
// }

async function getTasksFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  return querySnapshot.docs;
}

function openModal() {
  modal.hidden = false; // Use hidden attribute
  closeModalBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  openModalBtn.focus();
}

// function openModal() {
//   modal.setAttribute("aria-hidden", "false");
//   modal.style.display = "block";
//   closeModalBtn.focus();
// }

// function closeModal() {
//   modal.setAttribute("aria-hidden", "true");
//   modal.style.display = "none";
//   openModalBtn.focus();
// }

function toggleDropdown() {
  const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
  dropdownBtn.setAttribute("aria-expanded", !expanded);
  dropdown.classList.toggle("dropdown-open", !expanded); // Add/remove class
}

// function toggleDropdown() {
//   const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
//   dropdownBtn.setAttribute("aria-expanded", !expanded);
//   dropdown.style.display = expanded ? "none" : "block";
// }

function showNotification(message) {
  notification.textContent = message; // Avoid hiding the element
  setTimeout(() => {
    notification.textContent = ""; // Clear content after 3 seconds
  }, 3000);
}

// function showNotification(message) {
//   notification.textContent = message;
//   notification.style.visibility = "visible";
//   setTimeout(() => {
//     notification.style.visibility = "hidden";
//     notification.textContent = "";
//   }, 3000);
// }
