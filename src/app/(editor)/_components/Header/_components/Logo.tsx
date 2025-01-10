import Link from "next/link"

function Logo() {
  return (
    <Link href="/" className="flex items-center align-center space-x-2">
      <svg
        className="h-5 w-5 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 00 151 151"
      >
        <path d="m100 149.986-50-28.87v-25l50 28.87 50-28.87v25l-50 28.87Zm-75-50 28.868 50h-25L0 99.986l28.868-50h25L25 99.986Zm71.133-100h25l28.867 50-28.867 50h-25l28.867-50-28.867-50ZM50-.013l50 28.87v25l-50-28.87-50 28.87v-25L50-.014Z" />
      </svg>
      <span className="font-bold text-xl font-geistMono">
        SupaToolkit
      </span>
    </Link>
  )
}

export default Logo
