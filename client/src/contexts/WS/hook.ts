import { WSContext } from '@/contexts/WS'
import { useContext } from 'react'

export const useWSContext = () => useContext(WSContext)
