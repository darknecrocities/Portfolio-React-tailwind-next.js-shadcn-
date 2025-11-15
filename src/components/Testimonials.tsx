'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead at TechCorp',
    content: 'Arron demonstrated exceptional understanding of machine learning concepts and delivered innovative solutions that exceeded our expectations. His passion for AI is truly inspiring.',
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Senior ML Engineer at DataFlow',
    content: 'Working with Arron was a pleasure. His ability to break down complex problems and implement elegant solutions is remarkable. A promising talent in the AI field.',
    avatar: 'MR'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Professor of Computer Science',
    content: 'Arron\'s dedication to learning and his innovative approach to problem-solving make him stand out. He has a bright future in AI research and development.',
    avatar: 'EW'
  },
  {
    name: 'James Park',
    role: 'CTO at InnovateAI',
    content: 'Arron brings fresh perspectives and strong technical skills to every project. His work on our computer vision pipeline was instrumental in improving our model accuracy.',
    avatar: 'JP'
  },
  {
    name: 'Lisa Thompson',
    role: 'Data Science Manager at AnalyticsPro',
    content: 'Arron\'s enthusiasm for machine learning is contagious. He quickly adapted to our workflow and contributed valuable insights that enhanced our predictive models.',
    avatar: 'LT'
  },
  {
    name: 'Dr. Robert Kim',
    role: 'AI Ethics Researcher',
    content: 'Beyond technical skills, Arron shows genuine concern for ethical AI development. His thoughtful approach to responsible machine learning is commendable.',
    avatar: 'RK'
  }
]

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues, mentors, and peers say about my work and contributions in the AI/ML field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
