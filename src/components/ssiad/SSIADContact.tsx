import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export const SSIADContact = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Nous contacter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-muted-foreground">04 74 81 10 00</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:contact@mutuelleoyonnaxienne.fr" className="text-muted-foreground hover:text-primary transition-colors">
                contact@mutuelleoyonnaxienne.fr
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-muted-foreground">1 rue du Marché<br />01100 Oyonnax</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};