import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn')
  const prevLocationRef = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== prevLocationRef.current) {
      // Start fade out
      setTransitionStage('fadeOut')
      
      // After fade out completes, update content and fade in
      const timer = setTimeout(() => {
        setDisplayChildren(children)
        prevLocationRef.current = location.pathname
        
        // Use requestAnimationFrame to ensure DOM update before fade in
        requestAnimationFrame(() => {
          setTransitionStage('fadeIn')
        })
      }, 300) // Match fadeOut animation duration

      return () => clearTimeout(timer)
    } else {
      // Same route, just update children without transition
      setDisplayChildren(children)
    }
  }, [location.pathname, children])

  return (
    <div className={`page-transition page-transition-${transitionStage}`}>
      {displayChildren}
    </div>
  )
}

