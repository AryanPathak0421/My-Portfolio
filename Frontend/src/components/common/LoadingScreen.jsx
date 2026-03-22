import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoadingScreen } from '../../hooks/useAnimation'

const LoadingScreen = () => {
  const [isClicked, setIsClicked] = useState(false)
  const { isLoading, completeLoading } = useLoadingScreen()
  const containerRef = useRef()

  const handleClick = () => {
    setIsClicked(true)
    completeLoading()
  }

  if (!isLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={containerRef}
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loading-header">
            <span className="loader-title">Redoyanul Haque</span>
            <span className="loader-title">AI Developer</span>
          </div>

          <motion.div
            className={`loading-wrap ${isClicked ? 'loading-clicked' : ''}`}
            onClick={!isClicked ? handleClick : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="loading-hover"></div>
            <div className="loading-button">
              <div className="loading-content">
                <div className="loading-content-in">
                  <div className="loading-container">
                    <div className="loading-content2">
                      <span>Enter</span>
                      <div className="loading-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="loading-marquee">
            <span>AI Developer • Python Engineer • Machine Learning • Full Stack •</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
