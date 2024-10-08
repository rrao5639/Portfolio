// import React from "react";
// import "./Menu.css";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
// import { Link } from "react-scroll";
// import {
//   FcAbout,
//   FcBiotech,
//   FcBusinessContact,
//   FcHome,
//   FcReadingEbook,
//   FcVideoProjector,
// } from "react-icons/fc";
// const Menu = () => {
//   return (
//     <>
//       <nav className="navbar">
//       <div className="navbar-container">
        
//         <div className="menu-icon">
//           <i className="fas fa-bars"></i>
//         </div>
//         <ul className="nav-menu">
//           <li className="nav-item">
//             <Link to="home" className="nav-links">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="About" className="nav-links">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="Education" className="nav-links">
//               Education
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="Tech Stack" className="nav-links">
//               Technologies
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="projects" className="nav-links">
//               Projects
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="contact" className="nav-links">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
          
    
        
//         </>
  
//   );
// };

// export default Menu;
import React,{useState} from "react";
import "./Menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
// import {
//   FcAbout,
//   FcBiotech,
//   FcBusinessContact,
//   FcHome,
//   FcPortraitMode,
//   FcReadingEbook,
//   FcVideoProjector,
// } from "react-icons/fc";
function Menus() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = (event, path) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    if (path) {
      window.history.pushState({}, '', path);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={(e) => handleLinkClick(e, '/')}>
          PORTFOLIO
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="home" className="nav-links" onClick={(e) => handleLinkClick(e, 'home')}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="About" className="nav-links" onClick={(e) => handleLinkClick(e, 'About')}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Education" className="nav-links"onClick={(e) => handleLinkClick(e, 'Education')}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Tech Stack" className="nav-links" onClick={(e) => handleLinkClick(e, 'Tech Stack')}>
              technologies
            </Link></li>
          <li className="nav-item">
            <Link to="projects" className="nav-links" onClick={(e) => handleLinkClick(e, 'projects')}>
              Projects
            </Link></li>
          <li className="nav-item">
            <Link to="contact" className="nav-links" onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}
export default Menus;