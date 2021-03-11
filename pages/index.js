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
      const category = []
      if (Object.keys(allData).length > 0) {
        allData?.map((item) => {
          if (!category.includes(item.category)) {
            category.push(item.category)
          }
        })
        setDados({category, allData, filter: "" })
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
      <PageTitle title="CRPF - Prefeitura Municipal de Jequitinhonha"/>
      <Header/>
      {isLoading && (<p className="container text-center text-4xl font-bold">Aguarde...</p>)}
        {!isLoading &&(
            <NavSections cat={dados.category} action={filterResults}/>)}
        <div className="container mx-auto flex flex-wrap py-6">
           {!isLoading &&(
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
              {dados?.allData.map((item,index) => {
                 if (!dados.filter || item.category.toLowerCase() === dados.filter.toLowerCase()) {
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
