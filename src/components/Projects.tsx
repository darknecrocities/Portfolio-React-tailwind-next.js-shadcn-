'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

const projects = [
  {
    title: 'Neural Network Image Classifier',
    description: 'A deep learning model for image classification using convolutional neural networks. Achieved 95% accuracy on CIFAR-10 dataset with custom data augmentation techniques.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    github: 'https://github.com/arronkianparejas/neural-network-classifier',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'An interactive dashboard for time series forecasting using LSTM networks. Features real-time data visualization and model performance metrics.',
    technologies: ['Python', 'PyTorch', 'Streamlit', 'Pandas'],
    github: 'https://github.com/arronkianparejas/predictive-dashboard',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Natural Language Processing Chatbot',
    description: 'An intelligent chatbot using transformer architecture for natural language understanding. Implements attention mechanisms and fine-tuning on custom datasets.',
    technologies: ['Python', 'Hugging Face', 'BERT', 'Flask'],
    github: 'https://github.com/arronkianparejas/nlp-chatbot',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Computer Vision Object Detection',
    description: 'Real-time object detection system using YOLOv5 architecture. Optimized for edge devices with model quantization and pruning techniques.',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'YOLOv5'],
    github: 'https://github.com/arronkianparejas/object-detection',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Reinforcement Learning Agent',
    description: 'An AI agent trained using reinforcement learning to play complex strategy games. Implements Q-learning and policy gradient methods.',
    technologies: ['Python', 'Gym', 'Stable Baselines', 'NumPy'],
    github: 'https://github.com/arronkianparejas/rl-agent',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Automated Machine Learning Pipeline',
    description: 'End-to-end ML pipeline with automated feature engineering, model selection, and hyperparameter tuning. Reduces model development time by 70%.',
    technologies: ['Python', 'Scikit-learn', 'AutoML', 'Docker'],
    github: 'https://github.com/arronkianparejas/auto-ml-pipeline',
    demo: 'https://demo-link.com'
  }
]

const Projects = () => {
  return (
    <Section id="projects" className="bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI/ML Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my hands-on experience with cutting-edge AI and Machine Learning technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
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

export default Projects
