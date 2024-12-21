import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description Column */}
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/0d941907-9c8b-4f3e-90b1-6e3f09bf4ef6.png" 
                alt="Mutuelle Oyonnaxienne Logo" 
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400">
              Votre mutuelle de proximité depuis plus de 50 ans
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ssiad" className="text-gray-400 hover:text-primary">S.S.I.A.D</Link></li>
              <li><Link to="/esad" className="text-gray-400 hover:text-primary">E.S.A.D</Link></li>
              <li><Link to="/telealarme" className="text-gray-400 hover:text-primary">TÉLÉALARME</Link></li>
              <li><Link to="/sap" className="text-gray-400 hover:text-primary">S.A.P</Link></li>
              <li><Link to="/csi" className="text-gray-400 hover:text-primary">C.S.I</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: '#ea384c' }} />
                1 rue du Marché
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: '#ea384c' }} />
                01100 Oyonnax
              </li>
              <li>
                <a 
                  href="mailto:contact@mutuelleoyonnaxienne.com" 
                  className="text-gray-400 hover:text-primary flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" style={{ color: '#ea384c' }} />
                  contact@mutuelleoyonnaxienne.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:0474778419" 
                  className="text-gray-400 hover:text-primary flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" style={{ color: '#ea384c' }} />
                  04 74 77 84 19
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="text-gray-400 hover:text-primary">Mentions légales</Link></li>
              <li><Link to="/politique-cookies" className="text-gray-400 hover:text-primary">Politique des cookies</Link></li>
              <li><Link to="/plan-site" className="text-gray-400 hover:text-primary">Plan de site</Link></li>
              <li><Link to="/cgu" className="text-gray-400 hover:text-primary">CGU</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          © 2024 Mutuelle Oyonnaxienne. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;