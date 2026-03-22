import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll, useActiveSection } from '../../hooks/useScroll'
import { siteData } from '../../data/content'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY, scrollDirection } = useScroll()
  const activeSection = useActiveSection()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 }
  }

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <AnimatePresence>
      {(scrollDirection === 'up' || scrollY < 100) && (
        <motion.header
          className={`nav ${isScrolled ? 'scrolled' : ''}`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <div className="section-container">
            <motion.div 
              className="nav-brand"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteData.name}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="nav-menu">
              {siteData.navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="nav-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="mobile-menu"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="mobile-menu-content">
                  {siteData.navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleNavClick(e, item.href)}
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default Header
