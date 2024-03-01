interface LinkItem {
  id: string
  title: string
  url: string
  enabled: boolean
}

export interface LinkItemProps {
  link?: LinkItem
  onToggle: (id: string) => void
  onEdit: (id: string, title: string, url: string) => void
  onDelete: (id: string) => void
}
