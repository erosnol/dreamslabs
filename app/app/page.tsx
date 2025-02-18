'use client';

import { motion } from "framer-motion"
import { Code, Cpu, Globe, ChevronRight, Sparkles, BookOpen, Users, Blocks } from "lucide-react"
import Link from "next/link"
import SplineBackground from "@/components/SplineBackground"

function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-cyan-400">_</span>dreamLabs
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
              Explore
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

function AppContent() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h1
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to Dream Labs
            </motion.h1>
            <motion.p
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Access your dashboard, manage projects, participate in governance, and explore our latest research.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/app/dashboard"
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-2 bg-cyan-400/10 rounded-lg w-fit mb-2">
                  <Cpu size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-medium mb-1">Dashboard</h3>
                <p className="text-sm text-gray-400">View your activity</p>
              </Link>
              <Link
                href="/app/projects"
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-2 bg-cyan-400/10 rounded-lg w-fit mb-2">
                  <Code size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-medium mb-1">Projects</h3>
                <p className="text-sm text-gray-400">Manage your work</p>
              </Link>
              <Link
                href="/app/governance"
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-2 bg-cyan-400/10 rounded-lg w-fit mb-2">
                  <Users size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-medium mb-1">Governance</h3>
                <p className="text-sm text-gray-400">Vote on proposals</p>
              </Link>
              <Link
                href="/app/research"
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-2 bg-cyan-400/10 rounded-lg w-fit mb-2">
                  <BookOpen size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-medium mb-1">Research</h3>
                <p className="text-sm text-gray-400">Latest findings</p>
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                  <div className="p-2 bg-cyan-400/10 rounded-lg">
                    <Sparkles size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">New Project Added</h3>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                  <div className="p-2 bg-cyan-400/10 rounded-lg">
                    <Globe size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Governance Proposal</h3>
                    <p className="text-sm text-gray-400">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                  <div className="p-2 bg-cyan-400/10 rounded-lg">
                    <Blocks size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Research Update</h3>
                    <p className="text-sm text-gray-400">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function AppPage() {
  return (
    <main className="relative min-h-screen bg-black/10 backdrop-blur-[2px] text-white">
      <div className="absolute inset-0 z-0">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-cyan-950/5" />
        
        {/* Glowing orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.4, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Additional glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
      </div>
      <div className="relative z-10">
        <AppHeader />
        <AppContent />
      </div>
    </main>
  )
}
