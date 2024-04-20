import { ElementType, ReactNode } from 'react'

interface Props {
  title: ReactNode
  nodeName?: ElementType
  className?: string
}

export default function UTitle(props: Props) {
  const { title, nodeName: NodeName = 'h2', className } = props

  return <NodeName className={className}>{title}</NodeName>
}
