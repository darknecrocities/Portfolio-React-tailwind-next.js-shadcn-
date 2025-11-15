'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const About = () => {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the algorithms and the passion driving my journey in AI and ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  As an aspiring AI and Machine Learning Engineer, I'm fascinated by the power of data and algorithms to solve complex problems. My journey began with a curiosity about how machines can learn and make decisions, leading me to dive deep into the world of artificial intelligence.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Currently pursuing my passion through hands-on projects and continuous learning, I believe in the transformative potential of AI to create positive change in various industries, from healthcare to environmental sustainability.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">What Drives Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I'm driven by the challenge of turning abstract concepts into practical solutions. Whether it's optimizing neural networks for better performance or developing models that can predict real-world outcomes, I thrive on the intersection of theory and application.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Beyond the technical aspects, I'm passionate about making AI accessible and ethical. I believe in building intelligent systems that augment human capabilities rather than replace them, always keeping the human element at the center of technological advancement.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default About
