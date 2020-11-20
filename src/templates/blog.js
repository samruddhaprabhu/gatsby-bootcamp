import React from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import Head from '../components/head/head';

export const query = graphql`
  query( $slug: String!){
    markdownRemark (
      fields:{
       slug:{
        eq: $slug
        }
      }
    ){
      frontmatter{
        title
        date
      }
      html
    }
  }
`;

const Blog = (props) => {
  console.log('props: ', props);
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}/>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={
        {
          __html: props.data.markdownRemark.html
        }
      }>
      </div>
    </Layout>
  );
};

export default Blog;
