import './Hero.css';

function Hero() {
  return (    
      <div className = "app-hero">

          <div className = "app-hero__container">
            <h2 className = "app-hero__heading">Aman Fallow</h2>
            <p className = "app-hero__tagline">A man behind a mask</p>          
            <a href = "#about" className = "app-hero__cta">His story</a>
          </div>
          

      </div>
  );
}

export default Hero;
