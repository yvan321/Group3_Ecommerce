'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import ModeToggle from '@/components/shared/header/mode-toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from '@/assets/styles/header.module.css';

function Header() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const logoSrc =
    theme === 'dark' ? '/images/logodark.png' : '/images/logolight.png';

  return (
    <header className={styles.headerContainer}>
  <div className={styles.wrapper}>
    {/* Left: Logo */}
    <Link href='/' className={styles.logo}>
      <Image src={logoSrc} width={48} height={48} alt='Logo' />
    </Link>

    {/* Mobile: Hamburger icon */}
    <div
      className={styles.mobileMenuIcon}
      onClick={() => setNavOpen((prev) => !prev)}
    >
      <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
    </div>

    {/* Center: Navigation */}
    <nav
      className={`${styles.navLinks} ${navOpen ? styles.navOpen : ''}`}
    >
      <Link href='/new' className={styles.navLink}>New & Featured</Link>
      <Link href='/men' className={styles.navLink}>Men</Link>
      <Link href='/women' className={styles.navLink}>Women</Link>
      <Link href='/kids' className={styles.navLink}>Kids</Link>
      <Link href='/sale' className={styles.navLink}>Sale</Link>
      <Link href='/limited' className={styles.navLink}>Limited</Link>
    </nav>
  </div>


      {/* Right: Auth */}
      <div className={styles.authLinks}>
        <Link href='/login' className={styles.navLink}>Log In</Link>
        <div className={styles.separator}></div>
        <Link href='/sign-up' className={styles.navLink}>Sign Up</Link>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
