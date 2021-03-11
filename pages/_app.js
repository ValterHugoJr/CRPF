import React from "react"
import "../css/styles.css"
import Router from "next/router"
import withGA from "next-ga"

import Layout from "../layout"

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default withGA(process.env.NEXT_PUBLIC_GANALYTICS, Router)(MyApp)
