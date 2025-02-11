document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const signupForm = document.getElementById("signupForm")
    const toggleFormLink = document.getElementById("toggleForm")
  
    toggleFormLink.addEventListener("click", (e) => {
      e.preventDefault()
      loginForm.classList.toggle("hidden")
      signupForm.classList.toggle("hidden")
  
      if (loginForm.classList.contains("hidden")) {
        toggleFormLink.textContent = "Already have an account? Log in"
        signupForm.classList.add("animate-fadeIn")
      } else {
        toggleFormLink.textContent = "Don't have an account? Sign up"
        loginForm.classList.add("animate-fadeIn")
      }
    })
  })
  
  