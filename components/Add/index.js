import React from "react"
import Link from "next/link"

const Add = () => (
  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
    <p className="text-xl text-center font-semibold pb-5">Cadastrar contato do gabinete da Prefeitura Municipal de Jequitinhonha</p>
    <p className="text-xs">Todos os cadastros passam por aprovação prévia antes de serem mostrados.</p>
    <Link href="/postContact">
      <a className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
        Cadastrar
      </a>
    </Link>
  </div>
)

export default Add
