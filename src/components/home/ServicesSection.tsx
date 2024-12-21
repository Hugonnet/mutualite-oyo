import { motion } from "framer-motion";
import { Heart, Bell, UserCheck, Users, Stethoscope, Sun, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez nos solutions de soins et d'accompagnement à domicile
          </p>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Depuis 1943, la Mutualité Oyonnaxienne s'engage auprès des habitants d'Oyonnax et de sa région pour offrir des services de santé et d'accompagnement de qualité. Notre mission est de permettre à chacun de vivre chez soi en toute sérénité, entouré de professionnels qualifiés et bienveillants.
          </p>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
            Forte de son expérience et de son ancrage local, notre équipe pluridisciplinaire propose des solutions adaptées à chaque situation : soins infirmiers, accompagnement Alzheimer, aide à domicile, téléassistance et centre de soins. Nous plaçons l'humain au cœur de nos préoccupations, avec une approche personnalisée et un suivi régulier de nos bénéficiaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* S.S.I.A.D */}
          <Link to="/ssiad" className="group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: "#f596c7" }} />
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <Stethoscope className="w-8 h-8 text-[#f596c7]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">S.S.I.A.D</h3>
                  <p className="text-muted-foreground">Service de Soins Infirmiers À Domicile</p>
                </div>
              </div>
            </div>
          </Link>

          {/* E.S.A.D */}
          <Link to="/esad" className="group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: "#fe9849" }} />
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-[#fe9849]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">E.S.A.D</h3>
                  <p className="text-muted-foreground">Équipe Spécialisée Alzheimer à Domicile</p>
                </div>
              </div>
            </div>
          </Link>

          {/* S.A.P */}
          <Link to="/sap" className="group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: "#FEC438" }} />
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-[#FEC438]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">S.A.P</h3>
                  <p className="text-muted-foreground">Service d'Aide à la Personne</p>
                </div>
              </div>
            </div>
          </Link>

          {/* A.D.J */}
          <Link to="/adj" className="group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: "#5696d0" }} />
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <Sun className="w-8 h-8 text-[#5696d0]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">A.D.J</h3>
                  <p className="text-muted-foreground">Accueil de Jour</p>
                </div>
              </div>
            </div>
          </Link>

          {/* TÉLÉALARME */}
          <Link to="/telealarme" className="group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: "#e82b19" }} />
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <Bell className="w-8 h-8 text-[#e82b19]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">TÉLÉALARME</h3>
                  <p className="text-muted-foreground">Service d'assistance et de sécurité à distance</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Médiation animale */}
          <Link to="/mediation-animale" className="group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: "#697833" }} />
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <PawPrint className="w-8 h-8 text-[#697833]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Médiation animale</h3>
                  <p className="text-muted-foreground">Thérapie assistée par l'animal</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;