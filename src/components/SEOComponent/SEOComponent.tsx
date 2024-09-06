import Head from "next/head";

interface SEOComponentProps {
  PageTitle?: string;
  PageDescription?: string;
  PageKeywords?: string[];
  PageOGLImage?: string;
  PageURL?: string;
}

export default function SEOComponent({
  PageTitle = "siNUsoid v8",
  PageDescription = "siNUsoid v8",
  PageKeywords = ["siNUsoid", "techfest", "niituniversity"],
  PageOGLImage = "/logo/logo.png",
  PageURL = "sinusoid.in",
}: SEOComponentProps) {
  return (
    <Head>
      <title>{`${PageTitle}` || "siNUsoid v8"}</title>
      <meta name="description" content={PageDescription || "siNUsoid v8"} />

      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" href="/socialLogo.jpg" />
      <meta
        name="keywords"
        content={
          `${PageKeywords?.join(",")}` ||
          "siNUsoid,fest,techfest,niituniversity"
        }
      />
      <meta property="og:title" content={PageTitle || "siNUsoid v8"} />
      <meta
        property="og:description"
        content={PageDescription || "siNUsoid v8"}
      />
      <meta property="og:image" content={PageOGLImage || "/socialLogo.jpg"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PageURL || "sinusoid.in"} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@sinusoid_nu" />
      <meta name="twitter:title" content={PageTitle || "siNUsoid v8"} />
      <meta
        name="twitter:description"
        content={PageDescription || "siNUsoid v8"}
      />
      <meta name="twitter:image" content="/socialLogo.jpg" />
    </Head>
  );
}
