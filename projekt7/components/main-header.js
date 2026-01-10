import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logoImg from "../assets/logo.png"; 
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <MainHeaderBackground>
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image
          src={logoImg}
          alt="Foodies logo"
          priority
        />
        
        <span>Foodies</span>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li><Link href="/meals">Meals</Link></li>
          <li><Link href="/meals/share">Share meal</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
    </MainHeaderBackground>
  );
}