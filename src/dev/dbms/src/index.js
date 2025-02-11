document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle")
    const body = document.body
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
    const scrollToTopBtn = document.getElementById("scrollToTop")
    const carousel = document.querySelector(".carousel")
    const carouselItems = document.querySelectorAll(".carousel-item")
    const prevBtn = document.querySelector(".carousel-prev")
    const nextBtn = document.querySelector(".carousel-next")
  
    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
      darkModeToggle.innerHTML = body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>'
    })
  
    // Mobile menu toggle
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  
    // Scroll to top button
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        scrollToTopBtn.classList.add("visible")
      } else {
        scrollToTopBtn.classList.remove("visible")
      }
    })
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  
    // Carousel functionality
    let currentIndex = 0
  
    function showSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`
    }
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length
      showSlide(currentIndex)
    })
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carouselItems.length
      showSlide(currentIndex)
    })
  
    // Auto-rotate carousel
    setInterval(() => {
      currentIndex = (currentIndex + 1) % carouselItems.length
      showSlide(currentIndex)
    }, 5000)
  
    // Floating cart functionality
    const floatingCart = document.getElementById("floating-cart")
    const cartCount = document.querySelector(".cart-count")
    let count = 0
  
    floatingCart.addEventListener("click", () => {
      alert("Cart functionality to be implemented")
    })
  
    document.querySelectorAll(".product-card button").forEach((button) => {
      button.addEventListener("click", () => {
        count++
        cartCount.textContent = count
        button.classList.add("fade-in")
        setTimeout(() => button.classList.remove("fade-in"), 500)
      })
    })
  })
  
  