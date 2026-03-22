import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useAnimation'
import { siteData } from '../../data/content'
import { fadeInVariants, slideUpVariants, staggerContainer } from '../../utils/animations'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(''), 3000)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="section-container" style={{ padding: '0 1rem' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={fadeInVariants}>
            <h2 className="section-title">{siteData.contact.title}</h2>
            <p className="section-subtitle">{siteData.contact.description}</p>
          </motion.div>

          <motion.div 
            className="contact-content"
            variants={slideUpVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              marginTop: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Contact Form */}
            <motion.div 
              className="contact-form"
              variants={fadeInVariants}
              style={{
                background: 'var(--cardBackground)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                backdropFilter: 'blur(10px)',
                width: '100%'
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label 
                    htmlFor="name" 
                    className="form-label"
                    style={{
                      display: 'block',
                      marginBottom: '0.4rem',
                      color: 'var(--textColor)',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}
                  >
                    {siteData.contact.form.name}
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.01 }}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--textColor)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label 
                    htmlFor="email" 
                    className="form-label"
                    style={{
                      display: 'block',
                      marginBottom: '0.4rem',
                      color: 'var(--textColor)',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}
                  >
                    {siteData.contact.form.email}
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.01 }}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--textColor)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label 
                    htmlFor="subject" 
                    className="form-label"
                    style={{
                      display: 'block',
                      marginBottom: '0.4rem',
                      color: 'var(--textColor)',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}
                  >
                    {siteData.contact.form.subject}
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.01 }}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--textColor)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                  <label 
                    htmlFor="message" 
                    className="form-label"
                    style={{
                      display: 'block',
                      marginBottom: '0.4rem',
                      color: 'var(--textColor)',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}
                  >
                    {siteData.contact.form.message}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-textarea"
                    whileFocus={{ scale: 1.01 }}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--textColor)',
                      fontSize: '1rem',
                      fontFamily: 'var(--fontFamily)',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      minHeight: '120px'
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        style={{
                          width: '18px',
                          height: '18px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTop: '2px solid white',
                          borderRadius: '50%'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {siteData.contact.form.submit}
                    </>
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '1rem',
                      padding: '0.75rem',
                      background: submitStatus === 'success' 
                        ? 'rgba(34, 197, 94, 0.1)' 
                        : 'rgba(239, 68, 68, 0.1)',
                      border: `1px solid ${submitStatus === 'success' ? '#22c55e' : '#ef4444'}`,
                      borderRadius: 'var(--radius-md)',
                      color: submitStatus === 'success' ? '#22c55e' : '#ef4444',
                      textAlign: 'center',
                      fontSize: '0.9rem'
                    }}
                  >
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! I\'ll get back to you soon.' 
                      : 'Failed to send message. Please try again.'}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div 
              className="contact-info"
              variants={fadeInVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
              }}
            >
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem', 
                  color: 'var(--accentColor)' 
                }}>
                  Let's Connect
                </h3>
                <p style={{ 
                  color: 'var(--textColorSecondary)',
                  lineHeight: 1.6,
                  marginBottom: '2.5rem'
                }}>
                  I'm always interested in hearing about new opportunities, exciting projects, 
                  or just having a chat about AI and technology. Feel free to reach out through any of these platforms!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '45px', 
                      height: '45px', 
                      borderRadius: '12px', 
                      background: 'rgba(168, 124, 255, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--accentColor)',
                      border: '1px solid rgba(168, 124, 255, 0.2)'
                    }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--textColorSecondary)', marginBottom: '2px' }}>Phone</p>
                      <a href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`} style={{ color: 'var(--textColor)', textDecoration: 'none', fontWeight: '500' }}>
                        {siteData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '45px', 
                      height: '45px', 
                      borderRadius: '12px', 
                      background: 'rgba(168, 124, 255, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--accentColor)',
                      border: '1px solid rgba(168, 124, 255, 0.2)'
                    }}>
                      <Send size={20} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--textColorSecondary)', marginBottom: '2px' }}>Email</p>
                      <a href={`mailto:${siteData.contact.email}`} style={{ color: 'var(--textColor)', textDecoration: 'none', fontWeight: '500' }}>
                        {siteData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '45px', 
                      height: '45px', 
                      borderRadius: '12px', 
                      background: 'rgba(168, 124, 255, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--accentColor)',
                      border: '1px solid rgba(168, 124, 255, 0.2)'
                    }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--textColorSecondary)', marginBottom: '2px' }}>Location</p>
                      <p style={{ color: 'var(--textColor)', margin: 0, fontWeight: '500' }}>{siteData.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '1rem', 
                  color: 'var(--textColor)' 
                }}>
                  Find Me On
                </h4>
                <div className="social-links" style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  {siteData.contact.socials.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        boxShadow: '0 10px 20px rgba(168, 124, 255, 0.3)'
                      }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        background: 'var(--cardBackground)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        color: 'var(--textColor)',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                      }}
                    >
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'var(--accentColor)',
                          borderRadius: '50%',
                          opacity: 0
                        }}
                        whileHover={{ opacity: 1 }}
                      />
                      <span style={{ position: 'relative', zIndex: 1, fontWeight: 'bold' }}>
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(168, 124, 255, 0.1), rgba(194, 164, 255, 0.05))',
                border: '1px solid rgba(168, 124, 255, 0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}>
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '0.5rem', 
                  color: 'var(--accentColor)' 
                }}>
                  Response Time
                </h4>
                <p style={{ 
                  color: 'var(--textColorSecondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  I typically respond within 24-48 hours. For urgent matters, please mention it in your message subject.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(168, 124, 255, 0.1), transparent)',
              borderRadius: '50%',
              zIndex: 0
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '8%',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(194, 164, 255, 0.08), transparent)',
              borderRadius: '50%',
              zIndex: 0
            }}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
