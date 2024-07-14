import Head from "next/head";

const SEO = ({ pageTitle, description, keywords, font }) => (
  <>
    <Head>
      <title>{pageTitle ? `${pageTitle} | WebCloudor - Web Agency Your Digital Needs` : 'WebCloudor - Web Agency Your Digital Needs'}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={description || "WebCloudor creates personal websites for individuals to enhance personal branding and assist in job seeking."} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="keywords" content={keywords || "personal websites, personal branding , personal branding for websites, job seeking, student websites, job holder websites, recent graduate websites"} />
      
      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
