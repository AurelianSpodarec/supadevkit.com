import Logo from "@/app/(editor)/_components/Header/_components/Logo"

function Header() {
  return (
    <header>
      <div className="flex items-cetner align-center justify-between px-12">
        <Logo />
        <button>Open Editor</button>
      </div>
    </header>
  )
}

export default Header
