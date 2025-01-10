interface IMenuSubContainer {
  children: React.ReactNode,
  className?: string
}

function MenuSubContainer({ children, className }: IMenuSubContainer) {
  return (
    <div className={`overflow-y-auto w-[256px] ${className}`}>
      <div className="my-2 px-2">
        {children}
      </div>
    </div>
  )
}

export default MenuSubContainer
