import React from 'react'
import '../styles/NavBar.css'
import '../img/logoGenerico.webp'

const NavBar = () => {
  return (
    <div className='navBarP'>
    <div >
        <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/012/986/619/small/abstract-gradation-logo-icon-free-png.png" alt="logo" />
    </div>

    <nav className='navLinksP'>
        <ul className='nav-links'>

            <li className='liP'><a href="#">Link</a></li>
            <li className='liP'><a href="#">Link</a></li>
            <li className='liP' ><a href="#">Link</a></li>
          
        </ul>
    </nav>

  <a href="" className="brt"><button> Contacto</button></a>
    </div>
  )
}

export default NavBar
