import React from "react"

export type FeatureProps = {
  title: string,
  children: string
  responsive?: boolean
  direction?: 'row' | 'column'
  minWidth?: React.CSSProperties['maxWidth']
}