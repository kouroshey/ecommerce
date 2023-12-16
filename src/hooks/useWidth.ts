import { useMemo, useState } from "react"

export interface BreakPointsType {
    sm: number
    md: number
    lg: number
    xl: number
}

export default function useWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    const breakPoints: BreakPointsType = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    }

    useMemo(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { width, breakPoints }
}
