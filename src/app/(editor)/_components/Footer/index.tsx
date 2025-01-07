'use client'

function EditorFooter() {
  return (
    <footer className="flex items-center justify-between py-3 px-4 text-xs">
      <span>
        &copy; {new Date().getFullYear()} SupaToolkit 🛠️✨ All rights reserved.
      </span>
      <span>
        Made by Aurelian Spodarec 🏛️
      </span>
      {/* SupaToolkit All Rights Reserved &copy; {new Date().getFullYear()} made by Aurelian Spodarec */}
    </footer>
  );
}

export default EditorFooter
