import { Link } from "react-router-dom";
import Logo from '../../assets/shared/logo.svg'
import './Nav.scss'
import { useState } from "react";

export default function Nav () {

    const [navToggle, setNavToggle] = useState(false);

    const handleToggle = () => {
        setNavToggle(!navToggle)
    }

    return (
        <nav className="nav flex text-color-tertiary gap-3 items-center justify-between">
            <div className="nav__logo">
                <img src={Logo} alt="logo" />
            </div>
            <button onClick={handleToggle} aria-controls="nav__links" aria-expanded={navToggle} className="mobile-nav-toggle "><span className="sr-only">Menu</span></button>
            <ul id="nav__links" data-visible={navToggle} className="nav__links flex">
                <li className="nav__link active">
                    <Link className="nav__link active" to='/home'>
                        <span aria-hidden='true'>00</span>HOME
                    </Link>
                </li>
                <li>
                    <Link className="nav__link" to='/destination'>
                        <span aria-hidden='true'>01</span>DESTINATION
                    </Link>
                </li>
                <li>
                    <Link className="nav__link" to='/crew'>
                        <span aria-hidden='true'>02</span>CREW
                    </Link>
                </li>
                <li>
                    <Link className="nav__link" to='/technology'>
                        <span aria-hidden='true'>03</span>TECHNOLOGY
                    </Link>
                </li>
                
            </ul>
        </nav>
    )

}