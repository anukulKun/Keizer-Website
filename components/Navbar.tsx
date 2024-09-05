"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import logo from "@/public/Logo/meaw3.svg";
import Link from 'next/link';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our work', href: '/work' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact us', href: '/contact' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <div
      className={`fixed backdrop-blur-lg z-[999] px-20 py-6 w-full font-font1 flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
        <Image className='' width={100} height={100} alt='logo' src={logo}/>
    
      <div className="links flex gap-8">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className={`text-md capitalize font-light ${index === 4 && 'ml-48'}`}>{link.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
