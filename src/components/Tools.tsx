'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const toolCategories = [
  {
    category: 'Development Environments',
    tools: [
      { name: 'Jupyter Notebook', description: 'Interactive computing and data science' },
      { name: 'VS Code', description: 'Code editor with AI/ML extensions' },
      { name: 'PyCharm', description: 'Python IDE with ML support' },
      { name: 'Google Colab', description: 'Cloud-based Jupyter environment' }
    ]
  },
  {
    category: 'Version Control & Collaboration',
    tools: [
      { name: 'Git', description: 'Distributed version control system' },
      { name: 'GitHub', description: 'Code hosting and collaboration platform' },
      { name: 'GitLab', description: 'DevOps platform with CI/CD' },
      { name: 'DVC', description: 'Data version control for ML projects' }
    ]
  },
  {
    category: 'Data Processing & Analysis',
    tools: [
      { name: 'Pandas', description: 'Data manipulation and analysis' },
      { name: 'NumPy', description: 'Scientific computing with arrays' },
      { name: 'Scikit-learn', description: 'Machine learning algorithms' },
      { name: 'Apache Spark', description: 'Big data processing framework' }
    ]
  },
  {
    category: 'Visualization & Monitoring',
    tools: [
      { name: 'Matplotlib', description: 'Plotting and visualization library' },
      { name: 'Seaborn', description: 'Statistical data visualization' },
      { name: 'TensorBoard', description: 'ML experiment tracking and visualization' },
      { name: 'MLflow', description: 'ML lifecycle management' }
    ]
  },
  {
    category: 'Deployment & Production',
    tools: [
      { name: 'Docker', description: 'Containerization platform' },
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'FastAPI', description: 'Modern Python web framework' },
      { name: 'Streamlit', description: 'Web app framework for ML' }
    ]
  },
  {
    category: 'Cloud Platforms',
    tools: [
      { name: 'AWS', description: 'Cloud computing and ML services' },
      { name: 'Google Cloud AI', description: 'AI/ML platform and services' },
      { name: 'Azure Machine Learning', description: 'Cloud-based ML platform' },
      { name: 'Hugging Face', description: 'Open-source ML community' }
    ]
  }
]

const Tools = () => {
  return (
    <Section id="tools" className="bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The comprehensive toolkit I use to bring AI/ML ideas to life, from development to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="border-l-2 border-primary/20 pl-3"
                      >
                        <h4 className="font-medium text-sm">{tool.name}</h4>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </motion.div>
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

export default Tools
