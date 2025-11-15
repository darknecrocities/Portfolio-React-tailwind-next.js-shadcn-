'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Arron Kian Parejas
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Aspiring AI & Machine Learning Engineer
          </motion.p>
          <motion.p
            className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Turning data into insights, one algorithm at a time. Passionate about building intelligent systems that make a difference in the world.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button size="lg" onClick={() => scrollToSection('projects')} className="text-lg px-8 py-3">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-3">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Hero
