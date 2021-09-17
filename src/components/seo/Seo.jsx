import Head from "next/head"
const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="dialect" />
    <meta property="og:url" content="https://dialect.so" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="DialectHQ" />
    <meta name="twitter:creator" content="ryanbrwr" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    <meta property="og:image" content="/dark-logo.png" />
    <meta name="twitter:image" content="/dark-logo.png" />
  </Head>
)
export default Meta
