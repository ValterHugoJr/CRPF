import React from "react"
import Head from "next/head"

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
      <meta httpEquiv="Content-Language" content="pt-br" />
      <meta name="application-name" content="CRM Jequi" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CRM Jequi" />
      <meta name="description" content="Cadastro de Relacionamento" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta property="og:title" content="CRM - Prefeitura Municipal de Jequitinhonha" />
      <meta property="og:description" content="Cadastro de Relacionamento" />
    </Head>
  )
}
export default PageTitle
