import * as React from "react"
import Layout from "./components/Layout"
import SEO from "./components/SEO"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO 
        title="404 Not Found"
      />
        <h1 className="section__title not-page__title">Parece que a gente não esperava por essa...</h1>

        <div className="not-page__info">
          <p className="paragraph">Relaxa, nossos desenvolvedores estão trabalhando assiduamente para construir mais essa página.</p>
          <h2 className="title">Enquanto isso, pra onde você quer ir? </h2>
        </div>
    </Layout>
  )
}

export default NotFoundPage
