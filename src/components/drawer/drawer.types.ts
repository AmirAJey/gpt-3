import React from "react"

export type DrawerProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}