import React from "react"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default function App() {
  /* === Firebase Setup === */
  /* IMPORTANT: Replace this with your own firebaseConfig when doing challenges */
  const firebaseConfig = {
    // apiKey: "AIzaSyAHJbZ3ikXgxNndXzZaBYXzFxAOftjYxt0",
    // authDomain: "moody-14aac.firebaseapp.com",
    // projectId: "moody-14aac",
    // storageBucket: "moody-14aac.appspot.com",
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  /* === UI === */

  /* == UI - Elements == */

  const viewLoggedOut = document.getElementById("logged-out-view")
  const viewLoggedIn = document.getElementById("logged-in-view")

  const signInWithGoogleButtonEl = document.getElementById(
    "sign-in-with-google-btn"
  )

  const emailInputEl = document.getElementById("email-input")
  const passwordInputEl = document.getElementById("password-input")

  const signInButtonEl = document.getElementById("sign-in-btn")
  const createAccountButtonEl = document.getElementById("create-account-btn")

  /* == UI - Event Listeners == */

  signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

  signInButtonEl.addEventListener("click", authSignInWithEmail)
  createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

  /* === Main Code === */

  showLoggedOutView()

  /* === Functions === */

  /* = Functions - Firebase - Authentication = */

  function authSignInWithGoogle() {
    console.log("Sign in with Google")
  }

  function authSignInWithEmail() {
    /*  Challenge:
		Import the signInWithEmailAndPassword function from 'firebase/auth'

        Use the code from the documentaion to make this function work.
        
        Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
       
        If the login is successful then you should show the logged in view using showLoggedInView()
        If something went wrong, then you should log the error message using console.error.
    */
  }

  function authCreateAccountWithEmail() {
    const email = emailInputEl.value
    const password = passwordInputEl.value

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        showLoggedInView()
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  /* == Functions - UI Functions == */

  function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
  }

  function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
  }

  function showElement(element) {
    element.style.display = "flex"
  }

  function hideElement(element) {
    element.style.display = "none"
  }
  return (
    <div>
      <section id="logged-out-view">
        <div class="container">
          <h1 class="app-title">Moody</h1>

          <div class="provider-buttons">
            <button id="sign-in-with-google-btn" class="provider-btn">
              <img src="assets/providers/google.png" class="google-btn-logo" />
              Sign in with Google
            </button>
          </div>

          <div class="auth-fields-and-buttons">
            <input id="email-input" type="email" placeholder="Email" />
            <input id="password-input" type="password" placeholder="Password" />

            <button id="sign-in-btn" class="primary-btn">
              Sign in
            </button>
            <button id="create-account-btn" class="secondary-btn">
              Create Account
            </button>
          </div>
        </div>
      </section>

      <section id="logged-in-view">
        <div class="container">
          <img src="assets/gifs/jerryandthebird.gif" />
        </div>
      </section>
    </div>
  )
}
