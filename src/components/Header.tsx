import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <img 
              src="/lovable-uploads/0d941907-9c8b-4f3e-90b1-6e3f09bf4ef6.png" 
              alt="Mutuelle Oyonnaxienne Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-montserrat">
            <Link to="/" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              ACCUEIL
            </Link>
            <Link to="/ssiad" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              S.S.I.A.D
            </Link>
            <Link to="/esad" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              E.S.A.D
            </Link>
            <Link to="/sap" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              S.A.P
            </Link>
            <Link to="/adj" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              A.D.J
            </Link>
            <Link to="/telealarme" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              TÉLÉALARME
            </Link>
            <Link to="/mediation-animale" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
              MÉD. ANIMALE
            </Link>
            {isHomePage ? (
              <a
                href="#contact"
                onClick={handleContactClick}
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
              >
                CONTACT
              </a>
            ) : (
              <Link to="/#contact" className="hover:text-primary hover:opacity-80 hover:underline transition-all">
                CONTACT
              </Link>
            )}
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute top-20 left-0 right-0 bg-white border-b`}
          >
            <div className="flex flex-col space-y-4 p-4 font-montserrat">
              <Link
                to="/"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                ACCUEIL
              </Link>
              <Link
                to="/ssiad"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                S.S.I.A.D
              </Link>
              <Link
                to="/esad"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                E.S.A.D
              </Link>
              <Link
                to="/sap"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                S.A.P
              </Link>
              <Link
                to="/adj"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                A.D.J
              </Link>
              <Link
                to="/telealarme"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                TÉLÉALARME
              </Link>
              <Link
                to="/mediation-animale"
                className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                onClick={() => setIsOpen(false)}
              >
                MÉD. ANIMALE
              </Link>
              {isHomePage ? (
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleContactClick(e);
                    setIsOpen(false);
                  }}
                  className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                >
                  CONTACT
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="hover:text-primary hover:opacity-80 hover:underline transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;