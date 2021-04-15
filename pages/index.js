import React, { useState, useEffect } from "react"
import PageTitle from "../components/PageTitle"
import Header from "../components/Header"
import NavSections from "../components/NavSections"
import Contact from "../components/Contact"
import Add from "../components/Add"

const Index = () => {
  const [isLoading, setLoading] = useState(true)
  const [dados, setDados] = useState({})

  useEffect(async () => {
    try {
      const response = await fetch("/api/getContact")
      const allData = await response.json()
      const categoria = []
      if (Object.keys(allData).length > 0) {
        allData?.map((item) => {
          if (!categoria.includes(item.categoria)) {
            categoria.push(item.categoria)
          }
        })
        setDados({categoria, allData, filter: "" })
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])
  const filterResults = (filter) => () => {
    setDados({ ...dados, filter })
  }

  return (
    <>
      <PageTitle title="Prefeitura Municipal de Jequitinhonha"/>
      <Header/>
        {!isLoading &&(
            <NavSections cat={dados.categoria} action={filterResults}/>)}
        <div className="container mx-auto flex flex-wrap py-6">
           {!isLoading &&(
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
              {dados?.allData.map((item,index) => {
                 if (!dados.filter || item.categoria === dados.filter) {
                    return <Contact key={index} data={item}/>
                 }
                  })}
            </section>
          )}
            <aside className={`w-full ${isLoading ? "w-full" : "md:w-1/3"} flex flex-col items-center px-3`}><Add/></aside>
        </div>
    </>
  )
}
export default Index
