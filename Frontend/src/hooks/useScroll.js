import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }

    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { scrollY, scrollDirection }
}

export const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return { visibleElements }
}

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'techstack', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}
