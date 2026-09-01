"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Waves, Sparkles, ArrowDown, Star } from "lucide-react";

const mainStops = [
  {
    step: "01",
    from: "Katra",
    to: "Nau Devi Temple",
    icon: <Star size={20} />,
    description:
      "Begin your morning with a serene visit to the ancient Nau Devi Temple, a cluster of nine goddess shrines nestled in the hills just outside Katra.",
    type: "Spiritual",
    color: "from-amber-500/20 to-gold/10",
    borderColor: "border-gold/40",
    iconBg: "bg-gold/10 text-gold",
  },
  {
    step: "02",
    from: "Nau Devi",
    to: "Dhanasar Baba",
    icon: <MapPin size={20} />,
    description:
      "Head to the peaceful Dhanasar Baba shrine, surrounded by lush greenery and a tranquil reservoir — a perfect spiritual and nature retreat.",
    type: "Spiritual · Nature",
    color: "from-emerald-500/10 to-teal-500/5",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    step: "03",
    from: "Dhanasar Baba",
    to: "Rafting Point",
    icon: <Waves size={20} />,
    description:
      "Experience the thrill of river rafting on the Tawi River — a fun and refreshing break after morning spirituality. All safety equipment included.",
    type: "Adventure",
    color: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    step: "04",
    from: "Rafting Point",
    to: "Siyad Baba",
    icon: <Star size={20} />,
    description:
      "Conclude the main journey with a visit to Siyad Baba, a revered spiritual site offering panoramic views and a calm, meditative atmosphere.",
    type: "Spiritual",
    color: "from-purple-500/10 to-violet-500/5",
    borderColor: "border-purple-500/30",
    iconBg: "bg-purple-500/10 text-purple-400",
  },
];

const optionalStops = [
  {
    name: "Shiv Khori",
    icon: <Sparkles size={18} />,
    description:
      "A breathtaking natural cave shrine dedicated to Lord Shiva. Takes approx. 2–3 hours. Ideal if you have time in the afternoon.",
  },
  {
    name: "Devi Pindi",
    icon: <MapPin size={18} />,
    description:
      "A hidden gem near Katra — a sacred goddess temple that most visitors miss. A short detour well worth the experience.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function LocalTour() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background glow — matches existing site style */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-background to-background pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">
            Day After Darshan
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white">
            Post-Vaishno Devi Local Tour
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Your Vaishno Devi Darshan is complete — now explore the hidden spiritual
            and natural gems around Katra. Spend your next day on a curated,
            full-day local journey with us.
          </p>
          <div className="mt-6 w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Vertical connector line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent z-0" />

          <div className="flex flex-col gap-8">
            {mainStops.map((stop, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex flex-col lg:flex-row items-center gap-6"
                >
                  {/* Left Card (even) */}
                  {isLeft && (
                    <div className={`w-full lg:w-5/12 lg:pr-8 lg:text-right`}>
                      <div
                        className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${stop.color} border ${stop.borderColor} hover:scale-[1.02] transition-transform duration-300`}
                      >
                        <div className="flex lg:flex-row-reverse items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${stop.iconBg}`}>
                            {stop.icon}
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-widest text-gray-500 block">
                              {stop.type}
                            </span>
                            <h3 className="text-lg font-serif text-white leading-tight">
                              {stop.to}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {stop.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Center Step Bubble */}
                  <div className="hidden lg:flex flex-col items-center z-10 w-2/12">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      <span className="text-gold font-serif font-bold text-sm">
                        {stop.step}
                      </span>
                    </div>
                    <span className="mt-1 text-[10px] text-gray-500 uppercase tracking-widest">Stop</span>
                  </div>

                  {/* Mobile Step Badge */}
                  <div className="lg:hidden flex items-center gap-3 self-start">
                    <div className="w-10 h-10 rounded-full bg-background border-2 border-gold flex items-center justify-center shrink-0">
                      <span className="text-gold font-serif font-bold text-xs">{stop.step}</span>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Stop {stop.step}</span>
                  </div>

                  {/* Right Card (odd) */}
                  {!isLeft && (
                    <div className={`w-full lg:w-5/12 lg:pl-8`}>
                      <div
                        className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${stop.color} border ${stop.borderColor} hover:scale-[1.02] transition-transform duration-300`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${stop.iconBg}`}>
                            {stop.icon}
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-widest text-gray-500 block">
                              {stop.type}
                            </span>
                            <h3 className="text-lg font-serif text-white leading-tight">
                              {stop.to}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {stop.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Empty spacer for alternating layout */}
                  {isLeft && <div className="hidden lg:block w-5/12" />}
                  {!isLeft && <div className="hidden lg:block w-5/12 order-first" />}
                </motion.div>
              );
            })}

            {/* Arrow Down to Optional */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-2 py-4"
            >
              <ArrowDown className="text-gold animate-bounce" size={28} />
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Want more? Add on
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Optional Stops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-dashed border-gold/50 text-gold text-xs uppercase tracking-widest font-semibold">
              Optional Add-Ons
            </span>
            <p className="mt-3 text-gray-500 text-sm">
              Time permitting, extend your journey with these spiritual detours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {optionalStops.map((stop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 border border-dashed border-gold/30 hover:border-gold/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {stop.icon}
                  </div>
                  <h3 className="text-lg font-serif text-white">{stop.name}</h3>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-gold/30 text-gold uppercase tracking-wider">
                    Optional
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-base">
            Our local experts will arrange your transport, guide, and schedule — so you can simply enjoy every moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918082802818"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-background px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Book This Tour
            </a>
            <a
              href="https://wa.me/918082802818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-green-500/60 text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
