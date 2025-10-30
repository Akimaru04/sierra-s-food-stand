function navigateTo(section) {
  const content = document.getElementById('content');
  
  // fade out current content
  content.classList.remove('show');
  
  setTimeout(() => {
    // change content
    switch (section) {
      case 'home':
        content.innerHTML = `
          <section class="home">
            <h1>Welcome to Sierra's Fruit Shake Stand 🍹</h1>
            <p>Freshly blended fruit shakes made with love and tropical goodness!</p>
          </section>
        `;
        break;
      case 'about':
    content.innerHTML = `
        <section class="about-hero">
            <div class="about-container">
                <img src="dp.jpg" alt="dp" class="about-hero-photo">
                <div class="about-text">
                    <h1>Arjay Sierra</h1>
                    <h2>Fresh • Local • Made with Love</h2>
                    <p>
                        At Sierra's Food Stand, we believe that every sip should be refreshing, 
                        natural, and full of flavor. What started as a small roadside stall 
                        has grown into a local favorite for fruit shake lovers who crave 
                        the perfect mix of sweetness and freshness.
                    </p>
                    <p>
                        We use only fresh fruits sourced from local markets — 
                        no artificial flavors, no shortcuts, just pure goodness in every cup. 
                        Whether you’re cooling off on a sunny day or just craving something sweet, 
                        our shakes are made to make you smile.
                    </p>
                    <div class="highlights-cards">
                        <div class="highlight-card">
                            <h3>Our Mission</h3>
                            <p>To serve delicious, affordable, and refreshing shakes that celebrate local flavors.</p>
                        </div>
                        <div class="highlight-card">
                            <h3>Our Values</h3>
                            <p>Freshness • Quality • Community • Care</p>
                        </div>
                        <div class="highlight-card">
                            <h3>Visit Us</h3>
                            <p>Find Sierra’s Food Stand near your local market or events — we’d love to serve you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    break;
      case 'menu':
        content.innerHTML = `
          <section class="menu">
            <h1>Our Best-Selling Fruit Shakes 🥭</h1>
            <div class="menu-grid">
              <div class="menu-item">
                <img src="mango.jpg" alt="mango">
                <h2>Mango Shake</h2>
                <p>Rich, creamy, and made with the sweetest mangoes!</p>
                <span class="price">₱65</span>
              </div>
              <div class="menu-item">
                <img src="strawberry.jpg" alt="strawberry">
                <h2>Strawberry Shake</h2>
                <p>Sweet and tangy blend of fresh strawberries.</p>
                <span class="price">₱70</span>
              </div>
              <div class="menu-item">
                <img src="avocado.jpg" alt="avocado">
                <h2>Avocado Shake</h2>
                <p>Rich and buttery, topped with a hint of milk.</p>
                <span class="price">₱75</span>
              </div>
              <div class="menu-item">
                <img src="banana.jpg" alt="banana">
                <h2>Banana Shake</h2>
                <p>Classic creamy shake with ripe local bananas.</p>
                <span class="price">₱60</span>
              </div>
               <div class="menu-item">
                <img src="melon.jpg" alt="Melon Shake">
                <h2>Melon Shake</h2>
                <p>Refreshing and mildly sweet, made from ripe melon and milk.</p>
                <span class="price">₱70</span>
                </div>
                <div class="menu-item">
                <img src="buko.jpg" alt="Buko Shake">
                <h2>Buko Shake</h2>
                <p>Cool and creamy coconut blend — a Filipino classic.</p>
                <span class="price">₱75</span>
                </div>
            </div>
          </section>
        `;
        break;
      case 'contact':
        content.innerHTML = `
          <section class="contact">
            <h1>Contact Us 📞</h1>
            <p>We’d love to hear from you!</p>
            <p><strong>Location:</strong> Near ICCT Main Campus in Cainta</p>
            <p><strong>Phone:</strong> 0912-345-6789</p>
            <p><strong>Facebook:</strong> Sierra’s Food Stand</p>
          </section>
        `;
        break;
    }

    // fade in new content
    content.classList.add('show');
  }, 200);
}

// Initialize with fade class
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  content.classList.add('fade', 'show');
});