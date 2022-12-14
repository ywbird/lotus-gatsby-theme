import { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo: FC<{
  title: string;
  date?: string;
  description?: string;
  slug?: string;
}> = ({ title, date, description, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          nickname
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta charSet="UTF-8" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta httpEquiv="Author" content={data.site.siteMetadata.nickname} />
      <meta property="og:image" content={data.site.siteMetadata.logo} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      {date && <meta name="Date" content={date} />}
      {description && <meta property="og:description" content={description} />}
      {slug && (
        <meta
          property="og:url"
          content={data.site.siteMetadata.siteUrl + slug}
        />
      )}
    </>
  );
};

export default Seo;
