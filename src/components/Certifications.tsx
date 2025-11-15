'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const certifications = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    description: 'Comprehensive course covering neural networks, CNNs, RNNs, and practical applications in deep learning.',
    date: '2023',
    skills: ['Neural Networks', 'CNN', 'RNN', 'TensorFlow']
  },
  {
    title: 'Machine Learning by Andrew Ng',
    issuer: 'Coursera',
    description: 'Foundational course in machine learning covering supervised and unsupervised learning algorithms.',
    date: '2023',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification']
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    description: 'Professional certification demonstrating proficiency in TensorFlow for building and deploying ML models.',
    date: '2023',
    skills: ['TensorFlow', 'Keras', 'Model Deployment', 'ML Ops']
  },
  {
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    description: 'Advanced certification for designing, implementing, and maintaining ML solutions on AWS.',
    date: '2024',
    skills: ['AWS SageMaker', 'Cloud ML', 'MLOps', 'Scalable ML']
  },
  {
    title: 'Natural Language Processing with Deep Learning',
    issuer: 'Stanford University',
    description: 'Advanced course on NLP techniques including transformers, BERT, and modern language models.',
    date: '2024',
    skills: ['NLP', 'Transformers', 'BERT', 'Language Models']
  },
  {
    title: 'Computer Vision Specialization',
    issuer: 'Coursera',
    description: 'Series of courses covering image processing, object detection, and advanced computer vision techniques.',
    date: '2024',
    skills: ['Computer Vision', 'Image Processing', 'Object Detection', 'OpenCV']
  }
]

const Certifications = () => {
  return (
    <Section id="certifications" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning in AI/ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <span className="text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
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

export default Certifications
