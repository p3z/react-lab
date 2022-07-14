import './Header.css';

function Header() {
  return (    
      <header className="app-header">
          <h1 className = "app-header__brand-name">Aman Fallow</h1>   

          <div className ="app-header__menu-list">
            <li><a href="#about">About</a></li>       
            <li><a href="#blog">Blog</a></li>       
            <li><a href="#books">Books</a></li> 
          </div>
                
      </header>
  );
}

export default Header;
