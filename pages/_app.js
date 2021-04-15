import React from "react"
import "../css/styles.css"
import Router from "next/router"
import Layout from "../layout"

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default (MyApp)
