import React from "react"

export type ButtonProps = {
  variant?: 'filled' | 'text'
  colorPalette?: 'primary' | 'none' | React.CSSProperties['color']
  size?: 'sm' | 'md' | 'lg'
} & React.ComponentProps<'button'>