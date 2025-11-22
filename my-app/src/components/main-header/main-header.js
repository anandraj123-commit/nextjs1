import Link from 'next/link';
import logo from '../../assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
export default function Mainheader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/my-app">
                    <Image src={logo} alt="a Plate with food on it" priority></Image>
                    Next Level Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}