import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Heart, Phone, Stethoscope, Users, Bell, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/732cbcf9-0ce9-444a-87d0-72a9e0cb829b.png')",
          }} 
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary">
              Votre mutuelle de confiance à Oyonnax
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Une protection santé
              <br />
              adaptée à vos besoins
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Depuis plus de 50 ans, nous accompagnons nos adhérents avec des solutions personnalisées et un service de proximité.
            </p>
            <Button 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90"
            >
              Découvrir nos offres
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">S.S.I.A.D</h3>
                <p className="text-muted-foreground">Service de Soins Infirmiers À Domicile</p>
              </div>
            </motion.div>

            {/* E.S.A.D */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">E.S.A.D</h3>
                <p className="text-muted-foreground">Équipe Spécialisée Alzheimer à Domicile</p>
              </div>
            </motion.div>

            {/* TÉLÉALARME */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Bell className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">TÉLÉALARME</h3>
                <p className="text-muted-foreground">Service d'assistance et de sécurité à distance</p>
              </div>
            </motion.div>

            {/* S.A.P */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">S.A.P</h3>
                <p className="text-muted-foreground">Service d'Aide à la Personne</p>
              </div>
            </motion.div>

            {/* C.S.I */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">C.S.I</h3>
                <p className="text-muted-foreground">Centre de Soins Infirmiers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Contactez-nous</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à vos questions.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
