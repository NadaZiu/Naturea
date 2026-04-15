import { motion } from "framer-motion";
import aboutImg from "./assets/about.png";
import olivia from "./assets/olivia.png";
import ethan from "./assets/xix.png";
import adam from "./assets/adam.png";

const features = [
  { title: "Pure Ingredients", desc: "Crafted with 100% natural extracts." },
  { title: "Eco Packaging", desc: "Sustainable & recyclable materials." },
  { title: "Certified Quality", desc: "Rigorous quality checks & certifications." },
];

const team = [
  { name: "Herb Green", role: "Founder", img: olivia },
  { name: "Ethan Woods", role: "Production Head", img: ethan },
  { name: "Adam Bloom", role: "Brand Specialist", img: adam },
];

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#1f3b2d] via-[#2f5a3f] to-[#d8c3a5] font-sans">
      <img src={aboutImg} alt="Body Oil" className="absolute top-0 left-0 w-full h-full object-cover brightness-50 saturate-90 z-0" />
      <div className="relative z-15 flex flex-col items-center text-center px-6 py-20 text-[#f5f1e8]">
        <motion.div className="mb-16" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#f4e8d0] drop-shadow-lg">Nature Meets Purity</h1>
          <p className="text-lg md:text-xl text-[#dfe8d8] max-w-xl mx-auto">Organic products that honor your body & the earth.</p>
        </motion.div>

        <motion.div className="bg-[#2c4934]/50 backdrop-blur-lg border border-[#dfe8d8]/20 rounded-2xl p-8 max-w-3xl mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#e6d3b3]">Our Story</h2>
          <p className="text-[#f5f1e8] text-base md:text-lg leading-relaxed">
            Born from a love for nature, we combine tradition with innovation to bring you products that sustain your health and the environment.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-8 mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.5 }}>
          {features.map((f, i) => (
            <div key={i} className="w-72 p-6 rounded-2xl bg-[#58785b]/35 backdrop-blur-xl border border-[#ece0c9]/20 shadow-lg text-center transition-transform transform hover:scale-105 hover:-translate-y-2 hover:bg-[#6a916e]/45">
              <h3 className="text-xl font-semibold mb-2 text-[#f0dfc2]">{f.title}</h3>
              <p className="text-[#f5f1e8] text-sm">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e6d3b3] mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((mem, idx) => (
              <div key={idx} className="w-60 p-6 rounded-2xl bg-[#3c5c41]/40 backdrop-blur-xl border border-[#ece0c9]/20 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#527858]/50">
                <img src={mem.img} alt={mem.name} className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-[#d9c7a2]" />
                <h3 className="text-[#f4e8d0] text-xl font-semibold mb-1">{mem.name}</h3>
                <p className="text-[#dce7d7] text-sm">{mem.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}