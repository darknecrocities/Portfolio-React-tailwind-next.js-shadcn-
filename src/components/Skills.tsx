'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const skills = [
  { name: 'Python', level: 90, category: 'Programming Languages' },
  { name: 'TensorFlow', level: 85, category: 'ML Frameworks' },
  { name: 'PyTorch', level: 80, category: 'ML Frameworks' },
  { name: 'Machine Learning', level: 85, category: 'Core Skills' },
  { name: 'Deep Learning', level: 80, category: 'Core Skills' },
  { name: 'Data Analysis', level: 85, category: 'Core Skills' },
  { name: 'SQL', level: 75, category: 'Databases' },
  { name: 'JavaScript', level: 70, category: 'Programming Languages' },
  { name: 'React', level: 65, category: 'Web Development' },
  { name: 'Git', level: 80, category: 'Tools' },
  { name: 'Docker', level: 60, category: 'DevOps' },
  { name: 'AWS', level: 55, category: 'Cloud' },
]

const categories = ['Programming Languages', 'ML Frameworks', 'Core Skills', 'Databases', 'Web Development', 'Tools', 'DevOps', 'Cloud']

const Skills = () => {
  return (
    <Section id="skills" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in AI/ML and related technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <motion.div
                            className="w-full bg-muted rounded-full h-2"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="bg-primary h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.2 }}
                              viewport={{ once: true }}
                            />
                          </motion.div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Skills
