import {useState, useEffect} from 'react'

type Breakpoints = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
}
const breakpoints: Breakpoints = {
  'xs': 0,
  'sm': 550,
  'md': 700,
  'lg': 900,
  'xl': 1200,
}

type UseBreakpoint = () => keyof Breakpoints

function getBreakpoint(): keyof Breakpoints{
  let breakpoint = 'xs'
  for (let bp of Object.entries(breakpoints)){
    if (innerWidth > bp[1]) breakpoint = bp[0]
    else break;
  }
  return breakpoint as keyof Breakpoints
}

const useBreakpoint: UseBreakpoint = () => {
  const [currentBP, setCurrentBP] = useState<keyof Breakpoints>(getBreakpoint())

  useEffect(() => {
    const handleSetBP = () => {
      const bp = getBreakpoint()
      if (currentBP !== bp) setCurrentBP(bp)
    }
    window.addEventListener('resize', handleSetBP)   
    return () => window.removeEventListener('resize', handleSetBP) 
  }, [currentBP])

  return currentBP
}

export default useBreakpoint