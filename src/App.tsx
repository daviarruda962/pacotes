import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Check, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "5511936200509";

const PricingCard = ({ title, price, features, delay, recommended = false, monthlyPrice }: { 
  title: string; 
  price: string; 
  features: string[]; 
  delay: number;
  recommended?: boolean;
  monthlyPrice: string;
}) => {
  const message = `Olá Davi! Tenho interesse no plano ${title} (${price} por trimestre).`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      whileInView={{ 
        boxShadow: "0 0 40px rgba(255, 204, 0, 0.2)",
        borderColor: "rgba(255, 204, 0, 0.6)"
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col p-8 rounded-2xl border ${
        recommended 
          ? "border-neon-yellow bg-neon-yellow/5 shadow-[0_0_30px_rgba(255,204,0,0.1)]" 
          : "border-white/10 bg-white/5"
      } backdrop-blur-sm transition-all hover:border-neon-yellow hover:shadow-[0_0_50px_rgba(255,204,0,0.3)] group`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-yellow text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Mais Popular
        </div>
      )}
      <div className="mb-8">
        <motion.h3 
          whileInView={{ color: "#ffcc00" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl font-bold mb-2 uppercase tracking-tighter transition-colors"
        >
          {title}
        </motion.h3>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-white text-sm">/trimestre</span>
          </div>
          <span className="text-white text-xs mt-1">Equivalente a <span className="font-semibold">{monthlyPrice}/mês</span></span>
          <span className="text-neon-yellow/90 text-[10px] font-bold mt-1 uppercase tracking-wider">Parcelamento em até 12x no crédito</span>
        </div>
      </div>
      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white">
            <Check className="w-4 h-4 text-neon-yellow shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
          recommended 
            ? "bg-neon-yellow text-black hover:bg-white" 
            : "bg-white/10 text-white hover:bg-neon-yellow hover:text-black"
        }`}
      >
        Selecionar Plano
      </a>
    </motion.div>
  );
};

export default function App() {
  const { scrollY } = useScroll();
  const [headerVisible, setHeaderVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 450) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  });

  const headerMessage = "Olá Davi! Gostaria de saber mais sobre seus pacotes para Redes Sociais.";
  const headerWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(headerMessage)}`;

  return (
    <div className="min-h-screen font-sans selection:bg-neon-yellow selection:text-black bg-black">
      <div className="noise-overlay" />
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main Glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-neon-yellow/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-neon-yellow/10 blur-[160px] rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Accent Glows */}
        <div className="absolute top-1/4 right-1/4 w-[20%] h-[20%] bg-neon-yellow/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[20%] h-[20%] bg-neon-yellow/5 blur-[80px] rounded-full" />
        
        {/* Neon Beams */}
        <div className="neon-beam" style={{ animationDelay: '0s' }} />
        <div className="neon-beam" style={{ animationDelay: '4s' }} />
        
        {/* Floating Particles */}
        <div className="floating-particle" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
        <div className="floating-particle" style={{ top: '60%', left: '85%', animationDelay: '2s' }} />
        <div className="floating-particle" style={{ top: '80%', left: '30%', animationDelay: '4s' }} />
        <div className="floating-particle" style={{ top: '10%', left: '70%', animationDelay: '6s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-neon-yellow) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-yellow) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black" />
      </div>

      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: headerVisible ? 0 : -150 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex justify-between items-center shadow-2xl relative overflow-hidden">
          {/* Neon Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-yellow to-transparent opacity-50" />
          
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/kV5HyZyK/icon-y-w.png" 
              alt="Icon" 
              className="h-10 w-auto object-contain glow-text"
              referrerPolicy="no-referrer"
            />
          </div>
          <a 
            href={headerWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-neon-yellow transition-all group"
          >
            Quero agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32">
        <div className="text-center mb-24">
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-none">
              Pacotes para <br />
              <span className="animate-shine font-black glow-text">Redes Sociais</span>
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg md:text-xl font-light">
              Design estratégico e tecnológico para marcas que <span className="font-bold">buscam autoridade visual e crescimento orgânico.</span>
            </p>
          </div>
        </div>

        <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="R$ 1.200"
            monthlyPrice="R$ 400"
            features={[
              "10 Artes Personalizadas Mensais",
              "Alterações ilimitadas",
              "Inclui Vídeos",
              "Legendas para conversão",
              "Suporte via WhatsApp",
              "Planejamento inicial",
              "Plano Trimestral"
            ]}
            delay={0.1}
          />
          <PricingCard
            title="Pro"
            price="R$ 1.650"
            monthlyPrice="R$ 550"
            features={[
              "15 Artes Personalizadas Mensais",
              "Alterações ilimitadas",
              "Inclui Vídeos",
              "Legendas para conversão",
              "Suporte via WhatsApp",
              "Planejamento inicial",
              "Plano Trimestral"
            ]}
            delay={0.2}
          />
          <PricingCard
            title="Elite"
            price="R$ 1.800"
            monthlyPrice="R$ 600"
            features={[
              "20 Artes Personalizadas Mensais",
              "Alterações ilimitadas",
              "Inclui Vídeos",
              "Legendas para conversão",
              "Suporte via WhatsApp",
              "Planejamento inicial",
              "Plano Trimestral"
            ]}
            delay={0.3}
            recommended={true}
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
            <Clock className="w-5 h-5 text-neon-yellow" />
            <p className="text-sm text-white">
              Entregas no decorrer do mês, com prazo de até <span className="text-white font-bold">48h máximas</span> após solicitação.
            </p>
          </div>
          <p className="text-white text-xs italic">
            * Planos com fidelidade mínima de 3 meses. Parcelamento em até 12x no crédito disponível.
          </p>
        </div>

        <footer className="mt-32 text-center border-t border-white/5 pt-12 relative">
          {/* Footer Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-yellow/30 to-transparent" />
          
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://i.ibb.co/kV5HyZyK/icon-y-w.png" 
              alt="Icon" 
              className="h-8 w-auto opacity-50 glow-text"
              referrerPolicy="no-referrer"
            />
            <p className="text-white text-xs tracking-widest uppercase">
              © Davi Arruda - Soluções Digitais • Todos os direitos reservados
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
