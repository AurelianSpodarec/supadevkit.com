function Header() {
  return (
    <header className="bg-[#07080a] text-white py-2 px-4">
      <div className="flex items-center justify-between">

        <div>
          <h1 className="font-bold text-xl">ShotCrafter</h1>
        </div>

        <div className="space-x-4">
          <button className="border border-[#ff792f]/30 text-gray-100 font-medium px-3.5 py-2 rounded-lg">
            Preview
          </button>
          <button type="button" className="bg-[#251b17] text-[#ff792f] font-medium  px-3.5 py-2 rounded-lg">
            Download
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
