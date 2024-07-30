import { Icon } from '@iconify/react'
import type { IconProps } from '@iconify/react'

interface Props extends IconProps {
  size?: IconProps['width']
}

export default function Iconify({ icon, size, className, ...props }: Props) {
  return (
    <span role="img" className="anticon">
      <Icon
        icon={icon}
        width={size}
        height={size}
        className={className}
        {...props}
      />
    </span>
  )
}
