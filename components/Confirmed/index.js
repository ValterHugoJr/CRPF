import React from "react"
import Link from "next/link"

const Confirmed = () => (
  <div className="container mx-auto">
    <p className="text-sm text-gray-800">Contato cadastrado com Sucesso</p>
    <Link href="/" className="text-center">
      <a className="bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
        Voltar
      </a>
    </Link>
  </div>
)

export default Confirmed
