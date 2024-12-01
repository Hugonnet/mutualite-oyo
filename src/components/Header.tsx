import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const session = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const links = [
    { name: 'S.S.I.A.D', href: '/ssiad' },
    { name: 'E.S.A.D', href: '/esad' },
    { name: 'TÉLÉALARME', href: '/telealarme' },
    { name: 'S.A.P', href: '/sap' },
    { name: 'C.S.I', href: '/csi' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  const NavLinks = () => (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-[#4A7B63] hover:text-[#E3001B] transition-all duration-300 hover:scale-110"
        >
          {link.name}
        </a>
      ))}
      {session ? (
        <Button 
          onClick={handleLogout}
          variant="outline"
          className="text-[#4A7B63] hover:text-[#E3001B]"
        >
          Déconnexion
        </Button>
      ) : (
        <Button 
          onClick={() => navigate("/login")}
          variant="outline"
          className="text-[#4A7B63] hover:text-[#E3001B]"
        >
          Connexion
        </Button>
      )}
    </>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-[#F9F9F9] shadow-md py-2" : "bg-[#F9F9F9] py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="h-12">
          <img 
            src="/lovable-uploads/0d941907-9c8b-4f3e-90b1-6e3f09bf4ef6.png" 
            alt="Mutuelle Oyonnaxienne" 
            className="h-full w-auto"
          />
        </a>
        
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6 text-[#8CA892]" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <nav className="flex flex-col items-center space-y-6 py-8">
                <NavLinks />
              </nav>
            </DrawerContent>
          </Drawer>
        ) : (
          <nav className="flex items-center space-x-6">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;