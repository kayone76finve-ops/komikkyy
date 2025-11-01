document.addEventListener("DOMContentLoaded", function () {
  console.log("KEIIKEZ69 Komik Anime Store loaded!");

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    card.addEventListener("click", function () {
      const productName = this.querySelector("h3").textContent;
      console.log(`Clicked on product: ${productName}`);

      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-10px) scale(1.02)";
      }, 150);
    });
  });

  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    if (hero && heroContent) {
      const rate = scrolled * -0.5;
      heroContent.style.transform = `translateY(${rate}px)`;
    }

    const header = document.querySelector(".header");
    if (header) {
      const opacity = Math.min(scrolled / 100, 0.95);
      header.style.background = `rgba(10, 10, 10, ${opacity})`;
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  productCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  function createFloatingElements() {
    const body = document.body;
    const colors = ["#ff0040", "#00ffff", "#ff6600", "#ff4080"];

    for (let i = 0; i < 5; i++) {
      const element = document.createElement("div");
      element.style.position = "fixed";
      element.style.width = Math.random() * 4 + 2 + "px";
      element.style.height = element.style.width;
      element.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      element.style.borderRadius = "50%";
      element.style.opacity = "0.1";
      element.style.pointerEvents = "none";
      element.style.zIndex = "-1";
      element.style.left = Math.random() * 100 + "%";
      element.style.top = Math.random() * 100 + "%";
      element.style.animation = `float ${
        Math.random() * 10 + 10
      }s linear infinite`;

      body.appendChild(element);

      // Remove element after animation
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 20000);
    }
  }

  const style = document.createElement("style");
  style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.1;
            }
            90% {
                opacity: 0.1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  createFloatingElements();
  setInterval(createFloatingElements, 5000);

  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    setInterval(() => {
      heroTitle.style.textShadow = `
                0 0 ${Math.random() * 10 + 20}px rgba(255, 0, 64, ${
        Math.random() * 0.4 + 0.6
      }),
                0 0 ${Math.random() * 20 + 40}px rgba(255, 0, 64, ${
        Math.random() * 0.3 + 0.4
      }),
                0 0 ${Math.random() * 30 + 60}px rgba(255, 0, 64, ${
        Math.random() * 0.2 + 0.2
      })
            `;
    }, 2000);
  }

  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  const prices = document.querySelectorAll(".price");
  prices.forEach((price) => {
    price.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.textShadow = "0 0 15px rgba(255, 0, 64, 0.8)";
    });

    price.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.textShadow = "0 0 10px rgba(255, 0, 64, 0.3)";
    });
  });

  console.log("All animations and interactions initialized!");
});

window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});
