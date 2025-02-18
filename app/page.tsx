'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Code, Cpu, Globe, Twitter, Github, ChevronRight, Menu, X } from 'lucide-react'
import Link from "next/link"
import dynamic from 'next/dynamic'

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white/10 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-black/90 backdrop-blur-md border-l border-white/5 z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <nav className="mt-16 space-y-6">
              <Link
                href="/explore"
                className="block text-lg text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200"
                onClick={onClose}
              >
                Explore
              </Link>
              <a
                href="https://calendly.com/_dreamlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200"
                onClick={onClose}
              >
                Schedule a Call
              </a>
              <Link
                href="/app"
                className="flex items-center space-x-2 text-lg text-white hover:translate-x-2 transition-all duration-200"
                onClick={onClose}
              >
                <span>Launch App</span>
                <ChevronRight size={20} />
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-white/80">_</span>dreamLabs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
              Explore
            </Link>
            <Link href="/app" className="text-gray-300 hover:text-white transition-colors">
              Launch App
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen && (
            <div className="px-6 py-4 bg-black/30 backdrop-blur-sm mt-2 rounded-xl border border-white/5">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/explore" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Explore
                </Link>
                <Link 
                  href="/app" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Launch App
                </Link>
                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <Link href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="https://github.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </nav>
    </header>
  )
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="w-3 h-3 bg-white/10 rounded-full animate-ping" />
          <div className="absolute top-0 w-3 h-3 bg-white/10 rounded-full" />
        </div>
        <p className="text-sm text-gray-400">Loading experience...</p>
      </div>
    </div>
  )
}

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  const words = ["Forge", "the", "Future", "in", "Blockchain"]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0">
        {/* Removed all overlays to show pure background */}
      </div>
      <motion.div 
        className="text-center"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center gap-x-4 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2 + (i * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className={`relative ${word === "the" || word === "in" ? "text-white/40" : "text-white"}`}
            >
              {word}
              {word !== "the" && word !== "in" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                />
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ 
            duration: 0.5,
            delay: 0.8,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          className="relative"
        >
          <motion.p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-white/80"
            >
              _
            </motion.span>
            dreamLabs: Where visionary code meets blockchain reality
          </motion.p>
          <div className="flex justify-center">
            <Link
              href="/explore"
              className="group relative px-8 py-3 bg-black/30 backdrop-blur-sm text-white font-bold border border-white/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-white"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">Explore Vision</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServicesSection({ isLoaded }: { isLoaded: boolean }) {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Smart Contract Development",
      description: "Secure, audited, and efficient smart contracts for your blockchain needs.",
      highlight: "50+ Contracts Deployed",
      features: ["Automated Auditing", "Gas Optimization", "Cross-chain Support"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web3 Integration",
      description: "Seamless integration of blockchain technology into web applications.",
      highlight: "100K+ Active Users",
      features: ["Wallet Integration", "NFT Support", "Token Gating"]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Blockchain Infrastructure",
      description: "Robust infrastructure solutions for decentralized applications.",
      highlight: "30+ Enterprise Projects",
      features: ["Layer 2 Solutions", "Custom Networks", "Node Infrastructure"]
    }
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-bold mb-6 tracking-tight">
              <span className="opacity-50">Our</span> Services
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building the future of Web3 with cutting-edge blockchain solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Hover Effects - More subtle and matching site theme */}
                <div className="absolute -inset-0.5 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Main Content */}
                <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-8 flex flex-col transition-all duration-300 group-hover:border-white/10">
                  {/* Service Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black/50 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white/30">{i + 1}</span>
                  </div>

                  {/* Top Section */}
                  <div className="relative">
                    {/* Icon with Glow */}
                    <div className="relative mb-8 inline-block">
                      <div className="absolute inset-0 bg-white/10 blur-2xl transition-all duration-500 group-hover:blur-3xl" />
                      <motion.div 
                        className="relative bg-black/50 p-4 rounded-xl border border-white/10"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="text-white/80 transform transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                          {service.icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3 
                      className="text-2xl font-bold mb-3 text-white/90 transition-colors duration-300 group-hover:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 group/feature"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="relative w-1.5 h-1.5"
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute inset-0 bg-white/50 rounded-full blur-sm opacity-75" />
                          <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
                        </motion.div>
                        <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="relative transform transition-all duration-300 group-hover:scale-105">
                    <div className="absolute inset-0 bg-white/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                    <div className="relative px-4 py-2.5 bg-black/50 rounded-xl border border-white/10 text-center backdrop-blur-sm group-hover:bg-black/60">
                      <motion.span 
                        className="text-white/90 font-semibold"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.highlight}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to <span className="relative inline-block">
            Transform
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-px bg-white/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </span> Your Vision?
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us in building the future of decentralized applications
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/explore"
            className="group relative px-8 py-4 bg-black/30 backdrop-blur-sm text-white font-bold rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/5 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Explore Vision</span>
          </Link>
          <Link
            href="/launch"
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Launch App</span>
          </Link>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-4 z-50">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://twitter.com/_dreamlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all duration-300 hover:scale-110"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://github.com/_dreamlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<LoadingState />}>
          <Spline scene="https://prod.spline.design/RwUJ5jWNVwbWpBjn/scene.splinecode" />
        </Suspense>
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection isLoaded={isLoaded} />
        <ServicesSection isLoaded={isLoaded} />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
