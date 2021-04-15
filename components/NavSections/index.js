import React, { useState } from "react"
import Hamburger from "hamburger-react"

const NavSection = ({ cat, action }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="w-full py-4 border-t border-b bg-gray-100">
      <div className="flex md:hidden justify-end mr-4">
        <div className="pl-12 w-full text-center self-center text-sm font-bold uppercase"
          onClick={() => setOpen(!isOpen)}>Menu
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`${isOpen ? "w-full container mx-auto flex flex-col" : "hidden sm:flex"
        } sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2`}
      >
        {cat.map((item, index) => (
          <span className="hover:bg-gray-400 rounded py-2 px-4 mx-2" key={index} onClick={action(item)}>
            {item}
          </span>
        ))}
      </div>
    </nav>
  )
}

export default NavSection
