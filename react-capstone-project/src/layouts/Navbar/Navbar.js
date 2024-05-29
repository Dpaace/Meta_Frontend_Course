import { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.svg';
import MenuIcon from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const onClickImage = () => {
        navigate('/')
    }

    const menuItems = [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "About", },
        { id: 3, label: "Menu", },
        { id: 4, label: "Reservations", link: "/reservations" },
        { id: 5, label: "Order Online", },
        { id: 6, label: "Login", }
    ];

    return (
        <header className='navbar'>
            <div className='nav-container'>
                <div className='logo'>
                    <img src={Logo} alt='logo' height={50} onClick={onClickImage} />
                </div>
                <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                    <ul className={`menu-list ${isMenuOpen} ? "open" : ""`}>
                        {
                            menuItems.map(item => (
                                <li key={item.id}>
                                    <a href={item.link} className='link'>
                                        {item.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='menu-toggle' onClick={toggleMenu}>
                    <img src={MenuIcon} alt='Menu-Icon' />
                </div>
            </div>
        </header>
    )
}

export default Navbar;
