'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Arron Kian Parejas</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Aspiring AI & Machine Learning Engineer passionate about building intelligent systems that make a positive impact on the world.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/arronkianparejas" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/arronkianparejas" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:arronkianparejas@email.com">
                  Email
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="link" className="p-0 h-auto" onClick={() => scrollToSection('about')}>
                About
              </Button>
              <br />
              <Button variant="link" className="p-0 h-auto" onClick={() => scrollToSection('skills')}>
                Skills
              </Button>
              <br />
              <Button variant="link" className="p-0 h-auto" onClick={() => scrollToSection('projects')}>
                Projects
              </Button>
              <br />
              <Button variant="link" className="p-0 h-auto" onClick={() => scrollToSection('contact')}>
                Contact
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TensorFlow</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PyTorch</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Next.js</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8 text-center text-muted-foreground"
        >
          <p>&copy; {currentYear} Arron Kian Parejas. All rights reserved. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
