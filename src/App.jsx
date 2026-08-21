import "./App.css";
import r from "./assets/r.webp";
import y from "./assets/y.jpg";
import f from "./assets/f.jpg";
import { FaWhatsapp } from 'react-icons/fa';
function App() {
  return (
    <div className="app">

      <nav>
        <h2>Grace Community Church</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
  <img src={r} alt="Church banner" className="hero-bg-image" />
  
  <div className="hero-content">
    
    

    
    

    <div className="buttons">
      <a href="#services" className="btn primary">
        Join Us Sunday
      </a>

      <a href="#contact" className="btn secondary">
        Find Us
      </a>
    </div>
  </div>
  
</section>


      <section id="about" className="section about">
        <p className="eyebrow">WHO WE ARE</p>

        <h2>MORE THAN A CHURCH</h2>

        <p>
          Grace Community Church is a welcoming community
          where people can discover faith, build meaningful
          relationships and serve others.
        </p>
      </section>
      <section className="section a">
<img src={y} alt="Church banner" className="a" />
<img src={y} alt="Church banner" className="a" />
      </section>

      <section id="services" className="section first">
        <p className="eyebrow">JOIN US</p>

        <h2>OUR SERVICES</h2>

        <div className="cards">
          <div className="card">
            <h3>Sunday Worship</h3>
            <p>Every Sunday</p>
            <strong>09:00 AM-03:00 PM</strong>
          </div>

          <div className="card">
            <h3>Bible Study</h3>
            <p>Wednesday</p>
            <strong>06:00 PM-08:00 PM</strong>
          </div>

          <div className="card">
            <h3>Prayer Meeting</h3>
            <p>Friday</p>
            <strong>06:00 PM-08:00PM</strong>
          </div>
        </div>
      </section>

      <section id="events" className="section events">
        <p className="eyebrow">WHAT'S HAPPENING</p>

        <h2>UPCOMING EVENTS</h2>

        <div className="cards">
          <div className="card">
            <span>28 AUG</span>
            <h3>Youth Night</h3>
            <p>Music, worship and fellowship.</p>
          </div>

          <div className="card">
            <span>05 SEP</span>
            <h3>Community Day</h3>
            <p>Serving and connecting with our community.</p>
          </div>
          <div className="card">
            <span>12 SEP</span>
            <h3>Men's Fellowship</h3>
            <p>An evening of fellowship, prayer and meaningful conversation.</p>
          </div>
          
      
        </div>
        
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">COME VISIT US</p>

        <h2>WE'd LOVE TO MEET YOU.</h2>

        <p>
          12 Main Street, Bloemfontein
        </p>

        <p>071 234 5678</p>

        <a href="https://wa.me/27712345678" className="btn primary">
          WhatsApp Us
        </a>
      </section>

      <footer>
        <p>© 2026 Grace Community Church</p>
      </footer>

    </div>
  );
}

export default App;