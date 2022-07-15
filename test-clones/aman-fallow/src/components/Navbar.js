import './Navbar.css';

function Navbar() {
  return (    
      <nav className="app-navbar">
          <h1 className = "app-navbar__brand-name">Aman Fallow</h1>   

          <div className ="app-navbar__menu-list">
            <li><a href="#about">About</a></li>       
            <li><a href="#blog">Blog</a></li>       
            <li><a href="#books">Books</a></li> 
          </div>
                
      </nav>
  );
}

export default Navbar;
