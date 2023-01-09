type Animation = 'fade' | 'scale'

type HorizontalPos = 'left' | 'center' | 'right'
type VerticalPos = 'top' | 'center' | 'bottom'

export type ScaleSettings = {
  axis?: 'x' | 'y' | 'z'
  origin?: Exclude<`${HorizontalPos}-${VerticalPos}`, 'center-center'> | 'center'
}

export type AnimatedProps = {
  animations?: Animation | Animation[]
  children: React.ReactNode
  show?: boolean
  scaleSettings?: ScaleSettings
  duration?: number
}

export type DefaultType = {
  scaleSettings: ScaleSettings
}

