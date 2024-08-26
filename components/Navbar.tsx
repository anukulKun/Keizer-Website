import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from "@/public/Logo/meaw3.svg"

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed backdrop-blur-lg z-[999] px-20 py-6 w-full font-font1 flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      
        <Image className='' width={100} height={100} alt='logo' src={logo}/>
        

      <div className="links flex gap-8">
        {['Services', 'Our work', 'About Us', 'Insights', 'Contact'].map((item, index) => (
          <a key={index} className={`text-md capitalize font-light ${index === 4 && 'ml-36'}`}>{item}</a>
        ))}
      </div>
    </div>
  );
}


export default Navbar