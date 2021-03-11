import React from "react"
import Link from "next/link"

const Navbar = () => (
  <nav className="w-full py-2 bg-white-200 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav>
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Link href="/"><a><img  src='/brasao.png'/></a></Link>
          </li>          
        </ul>
      </nav>
    </div>
  </nav>
)

export default Navbar
