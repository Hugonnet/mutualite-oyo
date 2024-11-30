import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description Column */}
          <div>
            <img 
              src="/lovable-uploads/0d941907-9c8b-4f3e-90b1-6e3f09bf4ef6.png" 
              alt="Mutuelle Oyonnaxienne Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground">
              Votre mutuelle de proximité depuis plus de 50 ans
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">S.S.I.A.D</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">E.S.A.D</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">TÉLÉALARME</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">S.A.P</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">C.S.I</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">1 rue du Marché</li>
              <li className="text-muted-foreground">01100 Oyonnax</li>
              <li>
                <a 
                  href="mailto:contact@mutuelleoyonnaxienne.com" 
                  className="text-muted-foreground hover:text-primary"
                >
                  contact@mutuelleoyonnaxienne.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Mentions légales</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Politique des cookies</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Plan de site</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">CGU</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-muted-foreground text-sm">
          © 2024 Mutuelle Oyonnaxienne. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;