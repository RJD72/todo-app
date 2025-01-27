import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const sw = new URL("service-worker.js", import.meta.url);
if ("serviceWorker" in navigator) {
  const s = navigator.serviceWorker;
  s.register(sw.href, {
    scope: "/todo-app/",
  })
    .then((_) =>
      console.log(
        "Service Worker Registered for scope:",
        sw.href,
        "with",
        import.meta.url
      )
    )
    .catch((err) => console.error("Service Worker Error:", err));
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3n0yJDEGULLwPmO5PlY906sVxjVTYLnw",
  authDomain: "my-first-pwa-1af14.firebaseapp.com",
  projectId: "my-first-pwa-1af14",
  storageBucket: "my-first-pwa-1af14.firebasestorage.app",
  messagingSenderId: "764859055293",
  appId: "1:764859055293:web:e912e7c3e2bd74098b4bd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addEventListener("load", () => {
  renderTasks();
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    renderTasks();
  }
});

taskList.addEventListener("keypress", async (e) => {
  if (e.target.tagName === "LI" && e.key === "Enter") {
    await updateDoc(doc(db, "todos", e.target.id), {
      completed: true,
    });
  }
  renderTasks();
});

// Add Task
addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (task) {
    await addTaskToFirestore(task);
    taskInput.value = "";
    renderTasks();
  } else {
    alert("Please enter a task!");
  }
});

// Remove Task
taskList.addEventListener("click", async (e) => {
  if (e.target.tagName === "LI") {
    await updateDoc(doc(db, "todos", e.target.id), {
      completed: true,
    });
  }
  renderTasks();
});

async function renderTasks() {
  var tasks = await getTasksFromFirestore();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (!task.data().completed) {
      const taskItem = document.createElement("li");
      taskItem.id = task.id;
      taskItem.textContent = task.data().text;
      taskItem.tabIndex = 0;
      taskList.appendChild(taskItem);
    }
  });
}

async function addTaskToFirestore(taskText) {
  await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
  });
}

async function getTasksFromFirestore() {
  return await getDocs(collection(db, "todos"));
}

//Allow task addition on enter key while in task input
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

//Allow tasks to be completed on enter
taskList.addEventListener("keypress", async function (e) {
  if (e.target.tagName === "LI" && e.key === "Enter") {
    await updateDoc(doc(db, "todos", e.target.id), {
      completed: true,
    });
  }
  renderTasks();
});

window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});
