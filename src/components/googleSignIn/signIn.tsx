import { useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup, UserCredential } from "firebase/auth";

function SignIn() {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data: UserCredential) => {
        if (data.user) {
          localStorage.setItem("email", data.user.email || "");
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail !== null) {
      console.log("Stored email:", storedEmail);
    }
  }, []);

  return (
    <a
      onClick={handleClick}
      className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      Sign in with Google
    </a>
  );
}

export default SignIn;
