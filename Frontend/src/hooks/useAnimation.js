import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

export const useTypewriter = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
    }
  }, [currentIndex, text, speed])

  const reset = () => {
    setDisplayedText('')
    setCurrentIndex(0)
    setIsTyping(true)
  }

  return { displayedText, isTyping, reset }
}

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isInView]
}

export const useStaggeredAnimation = (items, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]))
            }, index * delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.stagger-item')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [items, delay])

  return visibleItems
}

export const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting) {
          setIsCounting(true)
          const increment = target / (duration / 16)
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [target, duration, isCounting])

  return [ref, count]
}

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  const completeLoading = () => {
    setIsLoadingComplete(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  // Auto-complete loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      completeLoading()
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return { isLoading, isLoadingComplete, completeLoading }
}

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null)

  const open = (modalContent) => {
    setContent(modalContent)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    setTimeout(() => setContent(null), 300)
  }

  return { isOpen, content, open, close }
}

export const useTheme = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  return { theme, toggleTheme }
}
