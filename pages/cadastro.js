import React, { useState } from "react"
import PageTitle from "../components/PageTitle"
import { useFormik } from "formik"
import * as Yup from "yup"

import Confirmed from "../components/Confirmed"

const validationSchema = Yup.object().shape({
  Nome: Yup.string().required("Campo obrigatório"),
  Telefone: Yup.string().required("Campo obrigatório"),
  Categoria: Yup.string().required("Campo obrigatório"),
})

const Cadastro = () => {
  const [success, setSuccess] = useState(false)

  const {
    values,
    handleSubmit,
    handleChange,
    isSubmitting,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      Nome: "",
      Telefone: "",
      Categoria: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/postContact", {
          method: "POST",
          body: JSON.stringify(values),
        })
        await response.json()
        setSuccess(true)
      } catch (error) {}
    },
  })

  return (
    <section className="text-gray-700 body-font relative">
      <PageTitle title="CRPF - Prefeitura Municipal de Jequitinhonha" />
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
            Cadastrar Contato
          </h1>
          {success && <Confirmed />}
        </div>
        {!success && (
          <form onSubmit={handleSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <input
                    className={`${
                      errors.Nome && touched.Nome
                        ? "border-red-400"
                        : "border-gray-400"
                    } w-full bg-gray-100 rounded border focus:outline-none focus:border-purple-500 text-base px-4 py-2`}
                    placeholder="Nome Completo"
                    type="text"
                    name="Nome"
                    value={values.Nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <input
                    className={`${
                      errors.Telefone && touched.Telefone
                        ? "border-red-400"
                        : "border-gray-400"
                    } w-full bg-gray-100 rounded border focus:outline-none focus:border-purple-500 text-base px-4 py-2`}
                    placeholder="Data de Nascimento"
                    type="text"
                    name="DataNascimento"
                    value={values.Telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <input
                    className={`${
                      errors.Telefone && touched.Telefone
                        ? "border-red-400"
                        : "border-gray-400"
                    } w-full bg-gray-100 rounded border focus:outline-none focus:border-purple-500 text-base px-4 py-2`}
                    placeholder="Telefone com Whatsapp"
                    type="text"
                    name="Telefone"
                    value={values.Telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <select input
                    className={`${
                      errors.Categoria && touched.Categoria
                        ? "border-red-400"
                        : "border-gray-400"
                    } w-full bg-gray-100 rounded border focus:outline-none focus:border-purple-500 text-base px-4 py-2`}
                    placeholder="Categoria (Politico, Funcionario)"
                    type="text"
                    name="Categoria"
                    value={values.Categoria}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-blue-800 font-bold text-sm uppercase hover:bg-blue-700 border-0 py-2 px-8 focus:outline-none rounded"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? "Cadastrar" : "Aguarde. Salvando..."}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Cadastro
