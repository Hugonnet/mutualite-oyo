import { motion } from "framer-motion";
import { Heart, Bell, UserCheck, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#E9EFEC" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos solutions de soins et d'accompagnement à domicile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* S.S.I.A.D */}
          <Link to="/ssiad" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">S.S.I.A.D</h3>
                <p className="text-muted-foreground">Service de Soins Infirmiers À Domicile</p>
              </div>
            </div>
          </Link>

          {/* E.S.A.D */}
          <Link to="/esad" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">E.S.A.D</h3>
                <p className="text-muted-foreground">Équipe Spécialisée Alzheimer à Domicile</p>
              </div>
            </div>
          </Link>

          {/* TÉLÉALARME */}
          <Link to="/telealarme" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Bell className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">TÉLÉALARME</h3>
                <p className="text-muted-foreground">Service d'assistance et de sécurité à distance</p>
              </div>
            </div>
          </Link>

          {/* S.A.P */}
          <Link to="/sap" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">S.A.P</h3>
                <p className="text-muted-foreground">Service d'Aide à la Personne</p>
              </div>
            </div>
          </Link>

          {/* C.S.I */}
          <Link to="/csi" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">C.S.I</h3>
                <p className="text-muted-foreground">Centre de Soins Infirmiers</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;