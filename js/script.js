
document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle")
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    const mobileMenu = document.getElementById("mobile-menu")
    const contactForm = document.getElementById("contact-form")
    const currentYearSpan = document.getElementById("current-year")
    const mobileMenuLinks = document.querySelectorAll("#mobile-menu a")
  

    currentYearSpan.textContent = new Date().getFullYear()
  

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme")
    }
  

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme")

      if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    })
  

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block"
    })
  

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.style.display = "none"
      })
    })
  
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        mobileMenu.style.display = "none"
      }
    })
  

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
  
        console.log("Formulario enviado:", { name, email, message })
  
        alert("¡Gracias por tu mensaje! Te responderé pronto.")
  
        contactForm.reset()
      })
    }

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
  
          setTimeout(() => {
            const yOffset = -100
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
          }, 10)
        }
      })
    })
  })
  
  
})
  