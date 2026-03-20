import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { MdLocationOn, MdAccessTime } from "react-icons/md"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div className="bg-[#F3F3EA]">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-[320px] flex items-center justify-center text-center bg-gradient-to-b from-[#202808] to-[#F3F3EA]"
      >
        <div className="text-white px-4">
          <h1 className="text-4xl font-semibold mb-3 tracking-wide text-[#2A1B10]">Contact Us</h1>
          <p className="text-m max-w-lg mx-auto opacity-90 text-[#5A4632]">
            We’re here to help! Reach out with any questions about our natural products.
          </p>
        </div>
      </motion.section>

      {/* Contact Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-6xl mx-auto px-6 pt-4 pb-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >
        {[{
          icon: <FaEnvelope />,
          title: "Email Address",
          lines: ["hello@yourstore.com", "support@yourstore.com"]
        },{
          icon: <FaPhoneAlt />,
          title: "Phone Number",
          lines: ["+212 700 000 000", "+212 600 000 000"]
        },{
          icon: <MdLocationOn />,
          title: "Office Location",
          lines: ["Agadir, Morocco", "Natural Store Office"]
        },{
          icon: <MdAccessTime />,
          title: "Work Day",
          lines: ["Mon - Fri: 09:00 - 17:00", "Sat - Sun: 10:00 - 15:00"]
        }].map((item, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 rounded-full bg-[#202808]/10 flex items-center justify-center text-[#202808] text-xl">
              {item.icon}
            </div>
            <h3 className="font-semibold text-[#2A1B10]">{item.title}</h3>
            {item.lines.map((line, i) => <p key={i} className="text-sm text-[#5A4632]">{line}</p>)}
          </motion.div>
        ))}
      </motion.section>

      {/* Form & Map */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10"
      >

        {/* Map & Working Time */}
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-[#2A1B10]">Our Working Time</h2>
          <div className="space-y-2 text-sm text-[#5A4632]">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow">
            <iframe
              src="https://maps.google.com/maps?q=agadir&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2A1B10] mb-6">Get In Touch</h2>
          <form className="space-y-5">
            <input type="text" placeholder="Name" className="w-full border border-[#8A9A5B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202808]/30"/>
            <input type="email" placeholder="Email" className="w-full border border-[#8A9A5B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202808]/30"/>
            <input type="text" placeholder="Subject" className="w-full border border-[#8A9A5B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202808]/30"/>
            <textarea rows="5" placeholder="Message" className="w-full border border-[#8A9A5B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202808]/30"></textarea>
            <button className="bg-[#202808] text-white px-8 py-3 rounded-md hover:bg-[#3D4C33] transition w-full font-medium tracking-wide">Send Message</button>
          </form>
        </div>

      </motion.section>

    </div>
  )
}