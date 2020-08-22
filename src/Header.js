import React, { Components } from 'react';

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper purple darken-1">
        <a href="/" class="brand-logo">Learning React</a>
        <ul class="right">
          <li><a href="/">Autores</a></li>
          <li><a href="/">Títulos</a></li>
          <li><a href="/">Sobre</a></li>
        </ul>
      </div>
    </nav >
  )
};
export default Header;