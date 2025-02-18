'use client';

import { motion } from "framer-motion"
import { Code, Cpu, Globe, ChevronRight, Sparkles, BookOpen, Users, Blocks } from "lucide-react"
import Link from "next/link"
import SplineBackground from "@/components/SplineBackground"

function ExploreHeader() {
  return (
    <>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              <span className="text-cyan-400">_</span>dreamLabs
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-6">
              <Link href="/app" className="text-gray-300 hover:text-white transition-colors">
                Launch App
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 min-h-screen flex items-start justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Our Vision
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're building the future of decentralized innovation, one block at a time.
          </motion.p>
        </div>
      </section>
    </>
  )
}

function VisionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 mb-8">
              We envision a world where blockchain technology empowers individuals and organizations to create, collaborate, and innovate without boundaries.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Code size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Open Source</h3>
                  <p className="text-gray-400">Building transparent and collaborative solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Globe size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Decentralized</h3>
                  <p className="text-gray-400">Empowering global communities through blockchain</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Cpu size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Innovative</h3>
                  <p className="text-gray-400">Pushing the boundaries of what's possible</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Add illustration or image here */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our innovative blockchain solutions and research initiatives.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg w-fit mb-4">
              <Sparkles size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation Lab</h3>
            <p className="text-gray-400 mb-4">
              Experimental blockchain projects and proof-of-concepts.
            </p>
          </motion.div>
          <motion.div 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg w-fit mb-4">
              <BookOpen size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Research Hub</h3>
            <p className="text-gray-400 mb-4">
              Academic papers and technical research findings.
            </p>
          </motion.div>
          <motion.div 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg w-fit mb-4">
              <Users size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-400 mb-4">
              Open-source contributions and collaborative projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Research & Development</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pushing the boundaries of blockchain technology through research and innovation.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Current Research</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Blocks className="text-cyan-400" />
                <span>Zero-Knowledge Proofs</span>
              </li>
              <li className="flex items-center space-x-3">
                <Blocks className="text-cyan-400" />
                <span>Layer 2 Scaling Solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <Blocks className="text-cyan-400" />
                <span>Cross-Chain Interoperability</span>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Future Initiatives</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Blocks className="text-cyan-400" />
                <span>Quantum-Resistant Cryptography</span>
              </li>
              <li className="flex items-center space-x-3">
                <Blocks className="text-cyan-400" />
                <span>Sustainable Consensus Mechanisms</span>
              </li>
              <li className="flex items-center space-x-3">
                <Blocks className="text-cyan-400" />
                <span>Privacy-Preserving Smart Contracts</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Join Us?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's turn your blockchain vision into reality.
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://calendly.com/_dreamlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black/30 backdrop-blur-sm text-white font-bold border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-all duration-200"
          >
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default function ExplorePage() {
  return (
    <main className="relative min-h-screen bg-black/10 backdrop-blur-[2px] text-white">
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-cyan-950/5" />
        
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        
        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-blue-500/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Extra glow spots */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10">
        <ExploreHeader />
        <VisionSection />
        <ProjectsSection />
        <ResearchSection />
        <CTASection />
      </div>
    </main>
  )
}
