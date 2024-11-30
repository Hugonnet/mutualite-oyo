import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Shield, Heart, Phone } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent to-background -z-10" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Votre santé, notre priorité
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Mutuelle Santé
              <br />
              <span className="text-primary">Personnalisée</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Des solutions adaptées à vos besoins avec une protection optimale pour vous et votre famille.
            </p>
            <Button size="lg" className="rounded-full">
              Découvrir nos offres
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 glass-card hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protection Complète</h3>
              <p className="text-muted-foreground">Une couverture santé adaptée à vos besoins spécifiques.</p>
            </Card>
            <Card className="p-6 glass-card hover:scale-105 transition-transform duration-300">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bien-être Total</h3>
              <p className="text-muted-foreground">Accès à des services de prévention et de bien-être.</p>
            </Card>
            <Card className="p-6 glass-card hover:scale-105 transition-transform duration-300">
              <Phone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
              <p className="text-muted-foreground">Une équipe dédiée à votre écoute à tout moment.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à nous rejoindre ?</h2>
          <Button size="lg" variant="default" className="rounded-full">
            Obtenir un devis gratuit
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;