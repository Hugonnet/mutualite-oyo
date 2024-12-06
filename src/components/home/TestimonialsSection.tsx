import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#E9EFEC" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Témoignages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos bénéficiaires disent de nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              "Un service exceptionnel et un personnel attentionné. Je me sens en sécurité et bien accompagnée."
            </p>
            <div className="font-semibold">Marie D.</div>
            <div className="text-sm text-muted-foreground">Bénéficiaire depuis 2020</div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              "La téléalarme m'apporte une tranquillité d'esprit au quotidien. Le personnel est très réactif."
            </p>
            <div className="font-semibold">Pierre L.</div>
            <div className="text-sm text-muted-foreground">Bénéficiaire depuis 2019</div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              "Une équipe professionnelle et bienveillante qui prend soin de ma mère. Je recommande vivement."
            </p>
            <div className="font-semibold">Sophie M.</div>
            <div className="text-sm text-muted-foreground">Famille de bénéficiaire</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;