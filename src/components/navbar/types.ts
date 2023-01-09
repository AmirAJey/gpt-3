export type MenuButtonProps = {
  isActive: boolean
  onPress: () => void
}

export type ActionButtonsProps = {
  size?: 'sm' | 'md'
}

export type MenuDropdownProps = { show: boolean, onClose: () => void }

export type NavbarLinksProps = { float?: boolean, direction?: 'row' | 'column'}