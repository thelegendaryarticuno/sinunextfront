import Head from "next/head";
import { GetServerSideProps } from "next";

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
  PageOGLImage = "https://sinusoid.in/logo/logo.png",
  PageURL = "https://sinusoid.in",
}: SEOComponentProps) {
  return (
    <Head>
      <title>{PageTitle}</title>
      <meta name="description" content={PageDescription} />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" href="/socialLogo.jpg" />
      <meta name="keywords" content={PageKeywords?.join(",")} />
      <meta property="og:title" content={PageTitle} />
      <meta property="og:description" content={PageDescription} />
      <meta property="og:image" content={PageOGLImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PageURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@sinusoid_nu" />
      <meta name="twitter:title" content={PageTitle} />
      <meta name="twitter:description" content={PageDescription} />
      <meta name="twitter:image" content={PageOGLImage} />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: PageTitle,
            url: PageURL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${PageURL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Head>
  );
}

// // Use this in your page component
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {}, // Props passed to the page component
//   };
// };
// // pages/blog/[slug].tsx
// import SEOComponent from "../../components/SEOComponent";
// import { GetServerSideProps } from "next";

// interface BlogPostPageProps {
//   PageTitle: string;
//   PageDescription: string;
//   PageKeywords: string[];
//   PageOGLImage: string;
//   PageURL: string;
//   content: string;
// }

// const BlogPostPage = ({
//   PageTitle,
//   PageDescription,
//   PageKeywords,
//   PageOGLImage,
//   PageURL,
//   content,
// }: BlogPostPageProps) => {
//   return (
//     <>
//       {/* SEO Component with dynamic metadata */}
//       <SEOComponent
//         PageTitle={PageTitle}
//         PageDescription={PageDescription}
//         PageKeywords={PageKeywords}
//         PageOGLImage={PageOGLImage}
//         PageURL={PageURL}
//       />
      
//       {/* Blog post content */}
//       <div className="blog-post">
//         <h1>{PageTitle}</h1>
//         <p>{content}</p>
//       </div>
//     </>
//   );
// };

// // Use getServerSideProps to fetch data dynamically based on the URL slug
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug } = context.params;

//   // Example: Fetch data from an API or database
//   const response = await fetch(`https://api.example.com/posts/${slug}`);
//   const postData = await response.json();

//   // Prepare the props for the component
//   return {
//     props: {
//       PageTitle: postData.title,
//       PageDescription: postData.description,
//       PageKeywords: postData.keywords.split(","),
//       PageOGLImage: postData.image,
//       PageURL: `https://yourwebsite.com/blog/${slug}`,
//       content: postData.content,
//     },
//   };
// };

// export default BlogPostPage;

