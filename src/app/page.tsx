import Hero from '@/components/Hero'
import About from '@/components/About'
import Objective from '@/components/Objective'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Tools from '@/components/Tools'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Objective />
      <Skills />
      <Projects />
      <Certifications />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
