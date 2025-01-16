'use client'

function EditorFooter() {
  return (
    <footer className="flex items-center justify-between py-3 px-4 text-xs">
      <span>
        &copy; {new Date().getFullYear()} SupaDevkit 🛠️✨ All rights reserved.
      </span>
      <span>
        Made by Aurelian Spodarec 🏛️
      </span>
      {/* SupaDevkit All Rights Reserved &copy; {new Date().getFullYear()} made by Aurelian Spodarec */}
    </footer>
  );
}

export default EditorFooter
