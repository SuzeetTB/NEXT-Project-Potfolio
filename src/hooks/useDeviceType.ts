import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const useDeviceType = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isMobile = useMediaQuery({ maxWidth: 576 })
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 1024 })
  const isDesktop = useMediaQuery({ minWidth: 1025 })

  if (!mounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    }
  }

  return { isMobile, isTablet, isDesktop }
}

export default useDeviceType