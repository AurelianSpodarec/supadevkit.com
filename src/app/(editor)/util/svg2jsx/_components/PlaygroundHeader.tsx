interface IPlaygroundProps {
  children: React.ReactNode
}

function PlaygroundHeader({ name, children }: IPlaygroundProps) {
  return (
    <header className="border-b border-b-[#3f3f46] bg-[#18181b] px-2">
      {/* {name} */}
      {children}
    </header>
  )
}

export default PlaygroundHeader
