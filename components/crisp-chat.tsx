'use client'

import { Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('b79407b2-abe1-46be-827b-329151cea4ea')
  }, [])

  return null
}
