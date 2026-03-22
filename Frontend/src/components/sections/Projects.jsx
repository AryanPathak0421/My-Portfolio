import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useAnimation'
import { siteData } from '../../data/content'
import { fadeInVariants, slideUpVariants, staggerContainer, scaleVariants } from '../../utils/animations'

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', ...new Set(siteData.projects.map(project => project.category))]
  
  const filteredProjects = selectedCategory === 'All' 
    ? siteData.projects 
    : siteData.projects.filter(project => project.category === selectedCategory)

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={fadeInVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore my latest work in AI, machine learning, and full-stack development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="category-filter"
            variants={slideUpVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                variants={scaleVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: selectedCategory === category 
                    ? 'var(--accentColor)' 
                    : 'var(--cardBackground)',
                  border: selectedCategory === category 
                    ? 'none' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  color: selectedCategory === category 
                    ? 'var(--backgroundColor)' 
                    : 'var(--textColor)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="project-grid"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={scaleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  whileHover={{ 
                    scale: 1.03,
                    y: -10,
                    boxShadow: '0 20px 40px rgba(168, 124, 255, 0.2)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openProjectModal(project)}
                  style={{
                    background: 'var(--cardBackground)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {/* Project Image */}
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, var(--accentColor), var(--accentColorBright))',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '3rem',
                        color: 'white',
                        opacity: 0.8
                      }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚀
                    </motion.div>
                    
                    {/* Overlay gradient */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background: 'linear-gradient(to top, rgba(11, 8, 12, 0.8), transparent)'
                    }} />
                  </div>

                  {/* Project Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--textColor)',
                      marginBottom: '0.75rem'
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{
                      color: 'var(--textColorSecondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                      fontSize: '0.9rem'
                    }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(168, 124, 255, 0.1)',
                            border: '1px solid var(--accentColor)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.75rem',
                            color: 'var(--accentColor)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          color: 'var(--textColorSecondary)'
                        }}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center'
                    }}>
                      <motion.button
                        className="btn btn-ghost"
                        style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.links.demo, '_blank')
                        }}
                      >
                        View Demo
                      </motion.button>
                      
                      <motion.button
                        className="btn btn-ghost"
                        style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.links.github, '_blank')
                        }}
                      >
                        GitHub
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--backgroundColor)',
                border: '1px solid var(--accentColor)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                padding: '2rem'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{ color: 'var(--textColor)' }}>{selectedProject.title}</h2>
                <motion.button
                  onClick={closeProjectModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--textColor)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  ✕
                </motion.button>
              </div>

              <p style={{
                color: 'var(--textColorSecondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--accentColor)', marginBottom: '1rem' }}>Features</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} style={{
                      color: 'var(--textColor)',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accentColor)'
                      }}>
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--accentColor)', marginBottom: '1rem' }}>Technologies</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(168, 124, 255, 0.1)',
                        border: '1px solid var(--accentColor)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        color: 'var(--accentColor)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(selectedProject.links.demo, '_blank')}
                >
                  View Live Demo
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(selectedProject.links.github, '_blank')}
                >
                  View on GitHub
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
