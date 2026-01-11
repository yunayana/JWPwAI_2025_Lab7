import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logoImg from "../assets/logo.png"; 
import MainHeaderBackground from "./main-header-background";
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <MainHeaderBackground>
    <header className={classes.header}>
       <div className={classes.logo}>
          <Link href="/" className={classes.logoLink}>
            <Image
              src={logoImg}
              alt="Foodies logo"
              priority
            />
            <span>AYH</span>
          </Link>
        </div>


      <nav className={classes.nav}>
        <ul>
          <li><NavLink href="/meals">Browse Meals</NavLink></li>
          <li><NavLink href="/community">Foodies Community</NavLink></li>
        </ul>
      </nav>
    </header>
    </MainHeaderBackground>
  );
}