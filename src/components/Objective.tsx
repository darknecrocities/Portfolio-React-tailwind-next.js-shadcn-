'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const Objective = () => {
  return (
    <Section id="objective" className="bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Objective</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My goals and aspirations in the field of AI and Machine Learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Building the Future of Intelligent Systems</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To leverage my passion for AI and Machine Learning to develop innovative solutions that address real-world challenges. I aim to contribute to cutting-edge projects that push the boundaries of what's possible with artificial intelligence, while maintaining a commitment to ethical AI practices and responsible development.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-primary mb-2">Short-term Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure a position as a Junior AI/ML Engineer and gain hands-on experience with production-level AI systems.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-primary mb-2">Medium-term Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    Lead AI initiatives in innovative companies, contributing to projects that make a meaningful impact on society.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-primary mb-2">Long-term Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Become a thought leader in ethical AI development, mentoring the next generation of AI engineers.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default Objective
