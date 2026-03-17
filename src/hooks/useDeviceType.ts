import { useMediaQuery } from 'react-responsive'

const useDeviceType = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 }) // phones
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 1024 }) // tablets, including iPad Mini, Air, Pro
  const isDesktop = useMediaQuery({ minWidth: 1025 }) // desktop and larger screens

  return { isMobile, isTablet, isDesktop }
}

export default useDeviceType