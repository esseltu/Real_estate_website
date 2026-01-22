document.addEventListener("DOMContentLoaded", () => {
  // Property Data
  const propertiesData = {
    "Luxury Villa, East Legon": {
      type: "house",
      price: "GH₵850,000",
      location: "Accra, Ghana",
      image: "legon.jpg",
      specs: [
        { icon: "fa-bed", text: "5 beds" },
        { icon: "fa-bath", text: "4 baths" },
        { icon: "fa-expand-arrows-alt", text: "4,500 sq ft" }
      ],
      description: "Experience the pinnacle of luxury living in this stunning villa located in the prestigious East Legon neighborhood. This architectural masterpiece offers spacious interiors, high-end finishes, and a serene environment perfect for families. The property features a large swimming pool, manicured gardens, and state-of-the-art security systems.",
      features: ["Swimming Pool", "Landscaped Garden", "24/7 Security", "Backup Generator", "Modern Kitchen", "En-suite Bedrooms", "Double Garage", "Smart Home System"]
    },
    "Modern Apartment, Ahodwo": {
      type: "apartment",
      price: "GH₵420,000",
      location: "Kumasi, Ghana",
      image: "Modern Apartment, Ahodwo.jpg",
      specs: [
        { icon: "fa-bed", text: "3 beds" },
        { icon: "fa-bath", text: "2 baths" },
        { icon: "fa-expand-arrows-alt", text: "1,800 sq ft" }
      ],
      description: "A contemporary apartment situated in the heart of Ahodwo, Kumasi. This unit offers modern living with easy access to the city center, shopping malls, and top schools. Perfect for young professionals or small families looking for comfort and convenience.",
      features: ["Open Plan Living", "Balcony", "Fitted Wardrobes", "Air Conditioning", "Water Reservoir", "Gated Compound", "Parking Space"]
    },
    "Beachfront Villa, Sakumono": {
      type: "house",
      price: "GH₵1,200,000",
      location: "Tema, Ghana",
      image: "Beachfront Villa, Sakumono.jpg",
      specs: [
        { icon: "fa-bed", text: "6 beds" },
        { icon: "fa-bath", text: "5 baths" },
        { icon: "fa-expand-arrows-alt", text: "6,000 sq ft" }
      ],
      description: "Wake up to the sound of waves in this breathtaking beachfront villa in Sakumono. This property offers direct beach access, panoramic ocean views, and expansive living areas. It's the ultimate retreat for those seeking a tranquil and luxurious coastal lifestyle.",
      features: ["Direct Beach Access", "Ocean Views", "Infinity Pool", "Outdoor Lounge", "Home Theater", "Guest Wing", "Solar Power", "Electric Fencing"]
    },
    "Commercial Complex, Osu": {
      type: "commercial",
      price: "GH₵2,500,000",
      location: "Accra, Ghana",
      image: "Commercial Complex, Osu.jpg",
      specs: [
        { icon: "fa-building", text: "8 floors" },
        { icon: "fa-expand-arrows-alt", text: "25,000 sq ft" },
        { icon: "fa-car", text: "20 spaces" }
      ],
      description: "A prime commercial complex located in the bustling business district of Osu. This 8-storey building is ideal for corporate headquarters, retail outlets, or mixed-use development. High visibility and excellent connectivity make it a top investment opportunity.",
      features: ["High Speed Elevators", "Underground Parking", "Backup Power Plant", "Fiber Optic Internet", "CCTV Surveillance", "Reception Area", "Conference Rooms"]
    },
    "Prime Land, Airport Hills": {
      type: "land",
      price: "GH₵350,000",
      location: "Accra, Ghana",
      image: "Prime Land, Airport Hills.jpg",
      specs: [
        { icon: "fa-expand-arrows-alt", text: "1 acre" },
        { icon: "fa-road", text: "Paved road" },
        { icon: "fa-tint", text: "Water available" }
      ],
      description: "One acre of prime land available in the exclusive Airport Hills area. This plot is fully serviced with paved roads, water, and electricity. It offers a secure and prestigious setting for building your dream mansion or a boutique development.",
      features: ["Titled Land", "Walled and Gated", "Level Topography", "Utility Connections", "Premium Location", "Close to Airport", "High Appreciation Value"]
    },
    "Modern Townhouse, Cantonments": {
      type: "house",
      price: "GH₵680,000",
      location: "Accra, Ghana",
      image: "Modern Townhouse.jpg",
      specs: [
        { icon: "fa-bed", text: "4 beds" },
        { icon: "fa-bath", text: "3.5 baths" },
        { icon: "fa-expand-arrows-alt", text: "3,200 sq ft" }
      ],
      description: "Stylish and sophisticated townhouse in the diplomatic enclave of Cantonments. This property blends modern design with functional living spaces. Enjoy privacy and security in a small, exclusive gated community close to embassies and international schools.",
      features: ["Rooftop Terrace", "Private Garden", "Communal Pool", "Gym", "24hr Security", "Backup Utilities", "Modern Fittings"]
    }
  }

  // Mobile Navigation
  const hamburger = document.querySelector(".hamburger")
  const navList = document.querySelector(".nav-list")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active")
      navList.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-list a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger) hamburger.classList.remove("active")
      if (navList) navList.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId === "#" || !targetId.startsWith("#")) return

      e.preventDefault()
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

  // Property card hover effect - Handled by CSS
  // JS removed for performance and separation of concerns


  // Form submission handling
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    // Skip filter form as it has custom handler
    if (form.classList.contains("filters-form")) return

    form.addEventListener("submit", function (e) {
      if (this.getAttribute("action") && this.getAttribute("action").includes("formsubmit.co")) {
        // Let normal form submission happen for FormSubmit
        return
      }

      e.preventDefault()

      if (this.classList.contains("newsletter-form")) {
        const email = this.querySelector('input[type="email"]').value
        alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`)
        this.reset()
      } else if (this.classList.contains("property-form")) {
        alert("Thank you for your property submission! Our team will review the details and contact you shortly.")
        this.reset()
      } else if (this.classList.contains("contact-form")) {
        alert("Thank you for your message! We will get back to you shortly.")
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
      window.location.href = `property-details.html?property=${encodeURIComponent(propertyTitle)}`
    })
  })

  // CTA button functionality
  const ctaButtons = document.querySelectorAll(".cta-primary, .cta-secondary, .view-all-btn")
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("cta-primary") || this.classList.contains("view-all-btn")) {
        window.location.href = "listings.html"
      } else if (this.classList.contains("cta-secondary")) {
        window.location.href = "contact.html"
      }
    })
  })

  // Sticky header on scroll
  const header = document.querySelector(".header")
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)"
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    })
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const elementsToAnimate = document.querySelectorAll(
    ".property-card, .service-card, .value-card, .achievement-card, .section-header, .hero-content > *, .team-member, .office-card, .cta-content > *"
  )

  // Add staggered delays to hero content
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    const children = heroContent.children
    Array.from(children).forEach((child, index) => {
      const delay = Math.min((index + 1) * 100, 500)
      child.classList.add(`delay-${delay}`)
    })
  }

  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0" // Hide initially
    el.style.animationFillMode = "forwards"
    observer.observe(el)
  })

  // Filter form functionality
  const filterForm = document.querySelector(".filters-form")
  if (filterForm) {
    filterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      
      const formData = new FormData(this)
      const location = formData.get("location").toLowerCase()
      const type = formData.get("type").toLowerCase()
      const priceRange = formData.get("price")
      const bedrooms = formData.get("bedrooms")
      
      const filteredProperties = Object.entries(propertiesData).filter(([title, property]) => {
        // Location filter
        if (location && !property.location.toLowerCase().includes(location)) return false
        
        // Type filter
        if (type && property.type !== type) return false
        
        // Price filter
        const priceValue = parseInt(property.price.replace(/[^0-9]/g, ''))
        if (priceRange) {
           if (priceRange === "100000" && priceValue >= 100000) return false
           if (priceRange === "250000" && (priceValue < 100000 || priceValue >= 250000)) return false
           if (priceRange === "500000" && (priceValue < 250000 || priceValue >= 500000)) return false
           if (priceRange === "1000000" && (priceValue < 500000 || priceValue >= 1000000)) return false
           if (priceRange === "1000000+" && priceValue < 1000000) return false
        }
        
        // Bedrooms filter
        if (bedrooms) {
             const bedSpec = property.specs.find(s => s.icon === "fa-bed")
             if (bedSpec) {
                 const numBeds = parseInt(bedSpec.text)
                 if (numBeds < parseInt(bedrooms)) return false
             } else if (parseInt(bedrooms) > 0) {
                 return false
             }
        }
        
        return true
      })
      
      renderProperties(filteredProperties)
      
      // Update results count
      const resultsHeader = document.querySelector(".results-header p")
      if (resultsHeader) {
          resultsHeader.textContent = `Showing ${filteredProperties.length} of ${Object.keys(propertiesData).length} properties`
      }
    })
  }

  function renderProperties(properties) {
      const propertiesGrid = document.querySelector(".properties-grid")
      if (!propertiesGrid) return
      
      propertiesGrid.innerHTML = ""
      
      if (properties.length === 0) {
          propertiesGrid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 2rem;"><h3>No properties found matching your criteria.</h3><p>Try adjusting your filters.</p></div>'
          return
      }
      
      properties.forEach(([title, property]) => {
          const card = document.createElement("div")
          card.className = "property-card"
          card.style.opacity = "0" // For animation
          
          // Generate specs HTML
          let specsHtml = ''
          property.specs.forEach(spec => {
              specsHtml += `<span><i class="fas ${spec.icon}"></i> ${spec.text}</span>`
          })
          
          card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${title}">
                <div class="price-tag">${property.price}</div>
            </div>
            <div class="property-details">
                <h3>${title}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <div class="features">
                    ${specsHtml}
                </div>
                <button class="btn btn-outline view-details">View Details</button>
            </div>
          `
          propertiesGrid.appendChild(card)
          observer.observe(card) // Animate new card
      })
      
      // Re-attach listeners to new buttons
      const newViewButtons = propertiesGrid.querySelectorAll(".view-details")
      newViewButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const propertyTitle = this.closest(".property-details").querySelector("h3").textContent
          window.location.href = `property-details.html?property=${encodeURIComponent(propertyTitle)}`
        })
      })
  }


  // Logic for Property Details Page
  if (window.location.pathname.includes("property-details.html")) {
    const urlParams = new URLSearchParams(window.location.search)
    const propertyTitle = urlParams.get("property")
    const container = document.getElementById("property-content")

    if (propertyTitle && propertiesData[propertyTitle]) {
      const property = propertiesData[propertyTitle]
      
      // Build specs HTML
      let specsHtml = ''
      property.specs.forEach(spec => {
        specsHtml += `
          <div class="feature-item">
              <i class="fas ${spec.icon}"></i> ${spec.text}
          </div>
        `
      })

      // Build features list HTML
      let featuresListHtml = ''
      property.features.forEach(feature => {
        featuresListHtml += `
          <div class="feature-item">
              <i class="fas fa-check-circle"></i> ${feature}
          </div>
        `
      })

      container.innerHTML = `
        <div class="property-details-container">
            <div class="container">
                <div class="property-header">
                    <h1 class="property-title">${propertyTitle}</h1>
                    <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                    <div class="property-price-lg">${property.price}</div>
                </div>

                <div class="property-gallery">
                    <img src="${property.image}" alt="${propertyTitle}" class="property-main-image">
                </div>

                <div class="property-info-grid">
                    <div class="property-main-content">
                        <div class="property-description">
                            <h3>Description</h3>
                            <p>${property.description}</p>
                        </div>

                        <div class="property-description">
                            <h3>Key Features</h3>
                            <div class="property-features-list">
                                ${specsHtml}
                            </div>
                        </div>
                        
                        <div class="property-description" style="margin-top: 2rem;">
                            <h3>Amenities</h3>
                            <div class="property-features-list">
                                ${featuresListHtml}
                            </div>
                        </div>
                    </div>

                    <div class="property-sidebar">
                        <div class="sidebar-widget">
                            <h3>Interested in this property?</h3>
                            <div class="agent-card">
                                <div class="agent-avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="agent-info">
                                    <h4>Kwesi Essel Turkson</h4>
                                    <p>Senior Agent</p>
                                </div>
                            </div>
                            <form class="inquiry-form contact-form" action="https://formsubmit.co/pixelforge926@gmail.com" method="POST">
                                <input type="hidden" name="_subject" value="New Inquiry for ${propertyTitle}">
                                <input type="hidden" name="_next" value="${window.location.href}">
                                <input type="hidden" name="_captcha" value="false">
                                <div class="form-group">
                                    <input type="text" name="name" id="inquiry-name" placeholder="Your Name" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" id="inquiry-email" placeholder="Your Email" required>
                                </div>
                                <div class="form-group">
                                    <input type="tel" name="phone" id="inquiry-phone" placeholder="Your Phone">
                                </div>
                                <div class="form-group">
                                    <textarea name="message" id="inquiry-message" rows="4" placeholder="I am interested in ${propertyTitle}..." required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `
    } else {
      container.innerHTML = `
        <div class="container" style="padding: 100px 0; text-align: center;">
            <h2>Property not found</h2>
            <p>We couldn't find the details for this property. <a href="listings.html">Back to Listings</a></p>
        </div>
      `
    }
  }
})
