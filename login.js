import { auth } from "./firebaseConfig.js";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

// ✅ تحقق إذا المستخدم مسجل دخول بالفعل
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});

// ✅ تسجيل الدخول بجوجل
document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "nqb.html";
  } catch (error) {
    console.error("خطأ أثناء تسجيل الدخول:", error.message);
  }
});

