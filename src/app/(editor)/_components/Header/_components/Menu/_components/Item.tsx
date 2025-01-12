import MenuDash from "./Dash"

interface IMenuItemProps {
  className?: string
  name: string
  icon?: React.ReactNode
}

function MenuItem({ name, icon, className }: IMenuItemProps) {
  return (
    <div className={`flex ${className}`}>
      <MenuDash />
      <div
        className="flex items-center space-x-1 group cursor-default"
      >
        {icon &&
          <div className="h-6 w-6">
            {icon}
          </div>
        }
        <span className="font-medium text-sm">{name}</span>
        <div className="py-1 rounded px-0.5 group-hover:bg-gray-900/90 ">
          <svg width="16" height="16" strokeLinejoin="round" color="var(--ds-gray-900)" data-testid="geist-icon" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8.707 2.396a1 1 0 0 0-1.414 0L4.47 5.22l-.53.53L5 6.81l.53-.53L8 3.81l2.47 2.47.53.53 1.06-1.06-.53-.53zM5.53 9.72 5 9.19l-1.06 1.06.53.53 2.823 2.824a1 1 0 0 0 1.414 0l2.823-2.824.53-.53L11 9.19l-.53.53L8 12.19z" clipRule="evenodd"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
