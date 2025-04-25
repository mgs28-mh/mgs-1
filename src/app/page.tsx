'use client';
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>SolarTech - Solusi Energi Terbarukan</title>
        <meta name="description" content="Penyedia solusi Pembangkit Listrik Tenaga Surya terkemuka di Indonesia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                variants={slideInFromLeft}
              >
                Solusi Energi <span className="text-green-600">Terbarukan</span> untuk Masa Depan
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={slideInFromLeft}
              >
                SolarTech menyediakan sistem PLTS berkualitas tinggi dengan teknologi terkini untuk kebutuhan rumah dan bisnis Anda.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={slideInFromLeft}
              >
                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                  Konsultasi Gratis
                </a>
                <a href="#about" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition duration-300 text-center">
                  Pelajari Lebih Lanjut
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={slideInFromRight}
            >
              <img 
                src="/solar-panel-hero.jpg" 
                alt="Solar Panel Installation" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang <span className="text-green-600">SolarTech</span></h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={slideInFromLeft}>
              <img 
                src="/solar-about.jpg" 
                alt="About SolarTech" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div variants={slideInFromRight}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pemimpin dalam Solusi Energi Surya</h3>
              <p className="text-gray-600 mb-6">
                SolarTech didirikan pada tahun 2010 dengan misi untuk menyediakan solusi energi terbarukan yang terjangkau dan berkualitas tinggi bagi masyarakat Indonesia.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan tim ahli yang berpengalaman lebih dari 10 tahun di industri PLTS, kami telah menyelesaikan lebih dari 500 proyek instalasi di seluruh Indonesia.
              </p>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-green-50 p-4 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-green-600 mb-2">10+ Tahun</h4>
                  <p className="text-gray-600 text-sm">Pengalaman</p>
                </motion.div>
                <motion.div 
                  className="bg-blue-50 p-4 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-blue-600 mb-2">500+</h4>
                  <p className="text-gray-600 text-sm">Proyek Selesai</p>
                </motion.div>
                <motion.div 
                  className="bg-orange-50 p-4 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-orange-600 mb-2">24/7</h4>
                  <p className="text-gray-600 text-sm">Dukungan Pelanggan</p>
                </motion.div>
                <motion.div 
                  className="bg-green-50 p-4 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-green-600 mb-2">10 Tahun</h4>
                  <p className="text-gray-600 text-sm">Garansi Produk</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai <span className="text-blue-600">Kami</span></h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Inovasi</h3>
              <p className="text-gray-600 text-center">
                Kami terus mengembangkan teknologi terbaru untuk memberikan solusi PLTS yang lebih efisien dan hemat biaya.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Keandalan</h3>
              <p className="text-gray-600 text-center">
                Sistem PLTS kami dirancang untuk bertahan dalam berbagai kondisi dan memberikan performa optimal jangka panjang.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Komitmen</h3>
              <p className="text-gray-600 text-center">
                Kami berkomitmen untuk memberikan layanan terbaik dan mendukung transisi energi bersih di Indonesia.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi <span className="text-orange-600">Kami</span></h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={slideInFromLeft}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kami siap membantu Anda</h3>
              <p className="text-gray-600 mb-8">
                Isi formulir di samping atau hubungi kami langsung melalui informasi kontak di bawah ini.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@solartech.co.id</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Kantor</h4>
                    <p className="text-gray-600">Jl. Solar Raya No. 123, Jakarta Selatan, Indonesia</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={slideInFromRight}>
              <motion.form 
                onSubmit={handleSubmit} 
                className="bg-gray-50 p-8 rounded-xl shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {isSubmitted && (
                  <motion.div 
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                  </motion.div>
                )}
                
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Kirim Pesan
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600"
        initial="hidden"
        animate="visible"
        variants={scaleUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Siap Beralih ke Energi Surya?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Mulai perjalanan energi terbarukan Anda hari ini dan dapatkan konsultasi gratis dari ahli PLTS kami.
            </p>
            <motion.a 
              href="#contact" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jadwalkan Konsultasi
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
}