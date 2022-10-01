import { graphql, HeadFC, PageProps, Link } from 'gatsby';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ToTop from '../components/toTop';

interface DataProps {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: `${string} ${number}, ${number}`;
      tag: string[];
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

const Style = {
  Content: styled.div`
    font-size: 17px;
    pre[class*='language-'] {
      padding: 1em;
      margin: 0em 0 0.5em 0;
      /* overflow: ; */
      overflow-wrap: break-word;
      border-radius: 0.3em;
      /* border-top-left-radius: 0; */
    }

    pre code {
      font-family: var(--theme-ui-fonts-code) !important;
      font-size: 0.9em !important;
    }

    blockquote {
      margin-left: 0;
      padding-left: 40px;
      border-left: 3px solid var(--theme-ui-colors-border);
      opacity: 80%;
      /* background-color: var(--background-color); */
      color: var(--theme-ui-colors-text);
      /* filter: invert(); */
    }

    .gatsby-highlight-code-line {
      background-color: #535547;
      display: block;
      margin-right: calc(-1em - 2px);
      margin-left: calc(-1em - 2px);
      padding-right: 1em;
      padding-left: calc(0.75em + 2px);
      border-left: 0.3em solid #a6e22e;
    }

    .gatsby-remark-code-title {
      display: inline-block;
      margin-top: 0.5em;
      margin-bottom: -0.6rem;
      padding: 0.3em 1em;
      font-family: var(--theme-ui-fonts-code);
      font-size: 1em;

      background-color: #282a36;
      color: white;
      z-index: 0;

      border-top-left-radius: 0.3em;
      border-top-right-radius: 0.3em;
    }

    /* :not(pre) > code.language-text {
    background-color: gray;
  } */
    div:not(pre) > code {
      background-color: gray !important;
      padding: 2px 5px;
      border-radius: 4px;
      /* color: var(--text-color); */
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--theme-ui-colors-heading);
    }
    color: var(--theme-ui-colors-content);

    a {
      color: var(--theme-ui-colors-primary);
      text-decoration: none;
      transition: 0.08s cubic-bezier(0.9, 0.03, 0.31, 1.36);
      &:visited {
        color: var(--theme-ui-colors-primary);
      }
      &:hover {
        /* animation: link-line 0.1s ease-in; */
        border-bottom: 2px solid var(--theme-ui-colors-primary);
      }
      &.anchor {
        /* transform: translateX(0); */
        opacity: 0;
        transition: 0.08s ease-in;
        fill: var(--theme-ui-colors-heading);
        &:hover {
          border-bottom: 0px;
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &:hover {
        a.anchor {
          opacity: 100%;
          /* transform: translateX(-100%); */
        }
      }
    }
  `,
  Meta: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--theme-ui-fonts-main);
    p {
      color: var(--theme-ui-colors-text);
    }
  `,
};

const TagLinks = styled.p`
  display: flex;
  flex-direction: row;
  height: min-content;
`;

const TagLink = styled(Link)`
  padding: 1px 3px;
  margin: 0 2px;
  border-radius: 4px;
  border: 1px solid var(--theme-ui-colors-border);
  height: min-content;
  color: var(--theme-ui-colors-text);
  text-decoration: none;
`;

const BlogPost = ({
  data,
  pageContext,
}: PageProps<DataProps, { html: string }>) => {
  const image: IGatsbyImageData | undefined = getImage(
    data.markdownRemark.frontmatter.cover
  );
  return (
    <Layout maxWidth={750} pageTitle={data.markdownRemark.frontmatter.title}>
      <Style.Meta>
        <p>{data.markdownRemark.frontmatter.date}</p>
        <TagLinks>
          {data.markdownRemark.frontmatter.tag.map((tag, i) => (
            <>
              <TagLink to={`/tag/${tag}`}>{tag}</TagLink>
              {/* {data.markdownRemark.frontmatter.tag.length !== i + 1 ? `, ` : ''} */}
            </>
          ))}
        </TagLinks>
      </Style.Meta>
      {image && <GatsbyImage image={image} alt="cover image" />}
      <hr />
      <Style.Content>
        <MDXProvider>
          <div dangerouslySetInnerHTML={{ __html: pageContext.html }}></div>
        </MDXProvider>
      </Style.Content>
      <ToTop />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Post($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tag
        cover {
          childImageSharp {
            gatsbyImageData(width: 750, height: 400)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
);

export default BlogPost;