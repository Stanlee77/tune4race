import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>Błąd 404: Nie znaleziono strony</h1>
    <p>Spróbuj przejść na stronę główną <a href="http://tune4race.pl">tune4race.pl</a></p>
  </Layout>
)

export const Head = () => <Seo title="404: Nie znaleziono" />

export default NotFoundPage
