'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function ThemeButton({ name, onClick, isActive }: { name: string; onClick: () => void; isActive: boolean }) {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={`text-center w-full border-2 py-4 ${isActive ? "border-blue-600" : ""}`}
    >
      {name}
    </button>
  );
}

function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex justify-between">
      <ThemeButton name="System" isActive={theme === "System"} onClick={() => { setTheme('System') }} />
      <ThemeButton name="Light" isActive={theme === "light"} onClick={() => { setTheme('light') }} />
      <ThemeButton name="Dark" isActive={theme === "dark"} onClick={() => { setTheme('dark') }} />
      <ThemeButton name="Theme 1" isActive={theme === "theme1"} onClick={() => { setTheme('theme1') }} />
      <ThemeButton name="Theme 2" isActive={theme === "theme2"} onClick={() => { setTheme('theme2') }} />
      <ThemeButton name="Theme 3" isActive={theme === "theme3"} onClick={() => { setTheme('theme3') }} />
    </div>
  )
}

export default ModeToggle
