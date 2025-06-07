document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const hamburger = document.querySelector(".hamburger")
  const navList = document.querySelector(".nav-list")

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active")
    navList.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-list a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navList.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Property card hover effect
  const propertyCards = document.querySelectorAll(".property-card")
  propertyCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".property-image img").style.transform = "scale(1.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.querySelector(".property-image img").style.transform = "scale(1)"
    })
  })

  // Form submission handling
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      if (this.classList.contains("newsletter-form")) {
        const email = this.querySelector('input[type="email"]').value
        alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`)
        this.reset()
      } else if (this.querySelector(".search-btn")) {
        alert("Searching for properties... This would normally submit the search form.")
      }
    })
  })

  // View Details button functionality
  const viewDetailsButtons = document.querySelectorAll(".view-details")
  viewDetailsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const propertyTitle = this.closest(".property-details").querySelector("h3").textContent
      alert(`Showing details for ${propertyTitle}. This would normally open a property details page.`)
    })
  })

  // CTA button functionality
  const ctaButtons = document.querySelectorAll(".cta-primary, .cta-secondary, .view-all-btn")
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("cta-primary") || this.classList.contains("view-all-btn")) {
        window.location.href = "#properties"
      } else if (this.classList.contains("cta-secondary")) {
        window.location.href = "#contact"
      }
    })
  })

  // Sticky header on scroll
  const header = document.querySelector(".header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)"
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".value-box, .service-card, .property-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  const animatedElements = document.querySelectorAll(".value-box, .service-card, .property-card")
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on page load
})
