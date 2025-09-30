import { account } from "./appwriteClient.js";

// ✅ تحقق إذا المستخدم مسجل دخول بالفعل
async function checkLogin() {
  try {
    const user = await account.get();
    if (user) {
      // لو مسجل دخول يروح على الصفحة الرئيسية
      window.location.href = "nqp.html";
    }
  } catch (error) {
    console.log("المستخدم غير مسجل دخول");
  }
}

// ✅ تسجيل الدخول بجوجل
document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    account.createOAuth2Session(
      "google",               // مزود تسجيل الدخول
      "https://nqp.appwrite.network/nqb.html", // رابط النجاح
      "https:/nqp.appwrite.network/login"      // رابط الفشل
    );
  } catch (error) {
    console.error("خطأ أثناء تسجيل الدخول:", error.message);
  }
});

// تشغيل التحقق
checkLogin();
