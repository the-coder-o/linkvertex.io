import React from 'react'

type TabProps = {
  isSelected: boolean
  label: string
  onClick: () => void
}

const Tab: React.FC<TabProps> = ({ isSelected, label, onClick }) => {
  return (
    <button className={`px-4 py-2 font-medium text-sm transition-colors duration-150 ${isSelected ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Tab
