import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="h-12">
          <img 
            src="/lovable-uploads/0d941907-9c8b-4f3e-90b1-6e3f09bf4ef6.png" 
            alt="Mutuelle Oyonnaxienne" 
            className="h-full w-auto"
          />
        </a>
        
        <nav className="flex items-center space-x-6">
          {[
            { name: 'S.S.I.A.D', href: '/ssiad' },
            { name: 'E.S.A.D', href: '/esad' },
            { name: 'TÉLÉALARME', href: '/telealarme' },
            { name: 'S.A.P', href: '/sap' },
            { name: 'C.S.I', href: '/csi' },
            { name: 'CONTACT', href: '/contact' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-[#E3001B] transition-all duration-300 hover:scale-110"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;