/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Droplets, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight,
  Star,
  Send,
  User,
  Mail,
  MessageSquare,
  Building2,
  Home,
  Quote
} from "lucide-react";
import { useState, FormEvent } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Kent Grand Plus",
    category: "Residential",
    description: "India's most trusted RO water purifier with Zero Water Wastage technology.",
    features: ["9L Storage", "RO + UV + UF + TDS Control", "In-tank UV Disinfection", "Save Water Technology"],
    image: "https://picsum.photos/seed/kent-ro-purifier/600/400",
    tech: "Kent Branded"
  },
  {
    id: 2,
    name: "Captain Pure Copper RO",
    category: "Residential",
    description: "Premium purification with the goodness of copper for enhanced health benefits.",
    features: ["12L Storage", "RO + UV + Copper + Alkaline", "Smart LED Display", "High Flow Rate"],
    image: "https://picsum.photos/seed/copper-ro-system/600/400",
    tech: "Captain Pure"
  },
  {
    id: 3,
    name: "Amidhara Prime RO",
    category: "Residential",
    description: "Advanced 7-stage purification with mineral booster technology.",
    features: ["10L Storage", "RO + UV + UF + MTDS", "Filter Life Indicator", "Food Grade Plastic"],
    image: "https://picsum.photos/seed/modern-water-purifier/600/400",
    tech: "RO+UV+MTDS"
  },
  {
    id: 4,
    name: "Amidhara Eco Pure",
    category: "Residential",
    description: "Compact and efficient water purifier for small families.",
    features: ["8L Storage", "RO + UV Purification", "Wall Mountable", "Low Maintenance"],
    image: "https://picsum.photos/seed/compact-ro-filter/600/400",
    tech: "RO+UV"
  },
  {
    id: 5,
    name: "Commercial RO 25 LPH",
    category: "Commercial",
    description: "High-capacity purification system for small offices and clinics.",
    features: ["25 Liters Per Hour", "Stainless Steel Skid", "Auto Flush Timer", "Heavy Duty Pumps"],
    image: "https://picsum.photos/seed/commercial-ro-plant/600/400",
    tech: "Industrial RO"
  },
  {
    id: 6,
    name: "Commercial RO 50 LPH",
    category: "Commercial",
    description: "Robust purification solution for large offices, schools, and factories.",
    features: ["50 Liters Per Hour", "Multi-stage Filtration", "TDS Controller", "Low Power Consumption"],
    image: "https://picsum.photos/seed/industrial-water-system/600/400",
    tech: "Industrial RO"
  }
];

const SERVICES = [
  {
    title: "RO Sales",
    description: "We are authorized sellers of branded products like Kent and Captain Pure, along with our premium Amidhara range. Our experts help you choose the right system based on your water quality.",
    details: "Includes free installation and first-year maintenance guidance.",
    icon: Droplets,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Installation",
    description: "Professional installation by certified technicians. We ensure correct plumbing, pressure check, and initial water testing for optimal performance.",
    details: "Same-day installation available for most models.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Repair & Service",
    description: "Expert repair services for all major brands. We fix leaks, pump issues, filter clogs, and electrical faults using genuine spare parts.",
    details: "Quick response time and transparent pricing.",
    icon: Wrench,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Annual Maintenance (AMC)",
    description: "Our AMC plans provide year-round peace of mind. Regular check-ups, filter replacements, and priority service calls are all included.",
    details: "Flexible plans starting from basic to comprehensive coverage.",
    icon: Clock,
    color: "bg-purple-50 text-purple-600"
  }
];

const FEATURES = [
  "24/7 Customer Support",
  "Expert Technicians",
  "Genuine Spare Parts",
  "Affordable Pricing",
  "Quick Response Time",
  "All Brands Serviced"
];

const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    location: "Harni, Vadodara",
    review: "Excellent service! The technician was very professional and fixed my RO system within an hour. Highly recommended for anyone in Vadodara.",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Sneha Shah",
    location: "Sama, Vadodara",
    review: "I bought a Kent RO from Amidhara. The installation was smooth, and the water taste is great. Very happy with the purchase.",
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Amit Desai",
    location: "Gotri, Vadodara",
    review: "Best AMC service in the city. They always call for periodic maintenance on time. No more worrying about filter changes.",
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Residential");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Droplets size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Amidhara <span className="text-blue-600">RO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#products" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Products</a>
            <a href="#services" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Contact</a>
            <a 
              href="tel:8799078244" 
              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
            >
              <Phone size={16} />
              87990 78244
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="rounded-lg p-2 text-slate-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full w-full border-b border-slate-200 bg-white p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Products</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Contact</a>
              <a 
                href="tel:8799078244" 
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-bold text-white"
              >
                <Phone size={20} />
                Call 87990 78244
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
                <Star size={16} fill="currentColor" />
                <span>Trusted by 500+ Customers in Vadodara</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                Pure Water for a <span className="text-blue-600">Healthier Life</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Amidhara RO Sales and Service provides top-quality water purification solutions. 
                From new installations to expert repairs, we ensure your family drinks only the purest water.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a 
                  href="tel:8799078244" 
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
                >
                  Book a Service
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="#services" 
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-2 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/water-purifier/800/600" 
                  alt="Water Purifier Service" 
                  className="h-full w-full rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl sm:block hidden">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Service Quality</p>
                    <p className="text-xl font-bold text-slate-900">100% Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Authorized Seller of</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 grayscale transition-all hover:grayscale-0">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">K</div>
                <span className="text-2xl font-black tracking-tighter text-slate-800">KENT</span>
              </div>
              <div className="flex items-center gap-3 grayscale transition-all hover:grayscale-0">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">C</div>
                <span className="text-2xl font-black tracking-tighter text-slate-800">CAPTAIN PURE</span>
              </div>
              <div className="flex items-center gap-3 grayscale transition-all hover:grayscale-0">
                <div className="h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xl">A</div>
                <span className="text-2xl font-black tracking-tighter text-slate-800">AMIDHARA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Products</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Explore our range of high-performance water purifiers designed for every need.
            </p>
          </div>

          <div className="mb-12 flex justify-center gap-4">
            {["Residential", "Commercial"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat === "Residential" ? <Home size={16} /> : <Building2 size={16} />}
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  <div className="h-64 w-full md:h-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {product.tech}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-slate-900">{product.name}</h3>
                    <p className="mb-6 text-slate-600">{product.description}</p>
                    <div className="space-y-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={14} className="text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className="mt-8 w-full rounded-xl border border-blue-600 py-3 font-bold text-blue-600 transition-all hover:bg-blue-600 hover:text-white">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Dedicated Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Expert care for your water purifier. We provide end-to-end support to ensure you always have pure water.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl md:flex-row"
              >
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${service.color} shadow-sm`}>
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-4 leading-relaxed text-slate-600">{service.description}</p>
                  <div className="flex items-center gap-2 rounded-lg bg-white/50 p-3 text-sm font-medium text-slate-700">
                    <Star size={16} className="text-yellow-500" fill="currentColor" />
                    {service.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AMC Highlight */}
          <div className="mt-16 rounded-3xl bg-blue-600 p-8 text-white shadow-2xl shadow-blue-200 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-bold">Annual Maintenance Contract (AMC)</h3>
                <p className="mb-6 text-lg text-blue-100">
                  Don't wait for a breakdown. Our AMC plans cover regular maintenance, filter changes, and priority support to keep your RO system in top condition.
                </p>
                <ul className="space-y-3">
                  {["3-4 Periodic Services", "Priority Breakdown Calls", "Genuine Filter Replacements", "Free Spare Parts (Comprehensive Plan)"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-50">
                      <CheckCircle2 size={20} className="text-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <a href="tel:8799078244" className="inline-block rounded-xl bg-white px-12 py-5 text-xl font-bold text-blue-600 shadow-xl transition-all hover:bg-blue-50 hover:scale-105">
                  Get AMC Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose Amidhara RO?</h2>
              <p className="mb-8 text-lg text-slate-600">
                With years of experience in Vadodara, we have built a reputation for excellence 
                in RO sales and service. Our commitment to quality and customer satisfaction 
                sets us apart.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/seed/service1/400/500" 
                  alt="RO Service" 
                  className="rounded-2xl object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col gap-4 pt-8">
                  <img 
                    src="https://picsum.photos/seed/service2/400/300" 
                    alt="RO Installation" 
                    className="rounded-2xl object-cover shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-1 items-center justify-center rounded-2xl bg-blue-600 p-6 text-center text-white">
                    <div>
                      <p className="text-4xl font-bold">5+</p>
                      <p className="text-sm font-medium opacity-80">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Real feedback from our satisfied customers in Vadodara.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="absolute -top-4 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <Quote size={20} fill="currentColor" />
                </div>
                
                <div className="mb-6 flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>
                
                <p className="italic leading-relaxed text-slate-600">
                  "{testimonial.review}"
                </p>
                
                <div className="mt-6 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
              <p className="mb-12 text-lg text-slate-400">
                Have questions or need a service? Contact us today and our team 
                will be happy to assist you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Call Us</p>
                    <a href="tel:8799078244" className="text-2xl font-bold transition-colors hover:text-blue-500">
                      +91 87990 78244
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Visit Us</p>
                    <p className="text-xl font-semibold leading-relaxed">
                      A 20 Sarva Square,<br />
                      Harni Sama Link Road,<br />
                      Vadodara
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-8 text-2xl font-bold">Send us a Message</h3>
              
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="mb-2 text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-slate-400">We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-sm font-bold text-blue-500 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <User size={14} /> Full Name
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Mail size={14} /> Email Address
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:bg-white/10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                      <Phone size={14} /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 87990 78244"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:bg-white/10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                      <MessageSquare size={14} /> Your Message
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:bg-white/10"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-bold transition-all hover:bg-blue-700 disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
              
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-4 text-sm font-medium text-slate-400 uppercase tracking-wider">Quick Support</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a 
                    href="https://wa.me/918799078244" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-bold transition-all hover:bg-green-700"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="tel:8799078244" 
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-sm font-bold transition-all hover:bg-white/10"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Droplets size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Amidhara <span className="text-blue-600">RO</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Amidhara RO Sales and Service. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 transition-colors hover:text-blue-600">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-blue-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
