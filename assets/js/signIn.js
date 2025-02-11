import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const signInBtn = document.getElementById("signIn");

// Service Worker Registration
if ("serviceWorker" in navigator) {
  const sw = new URL("service-worker.js", import.meta.url);
  navigator.serviceWorker
    .register(sw.href)
    .then(() => console.log("Service Worker Registered")) // Log success
    .catch((err) => console.error("Service Worker Error:", err)); // Log errors
}

signInBtn.addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem("email", JSON.stringify(user.email));
      window.location = "tasks.html";
    })
    .catch((error) => {
      console.error("Sign-in error:", error);
    });
});
