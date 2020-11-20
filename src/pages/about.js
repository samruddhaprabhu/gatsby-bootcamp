import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title='About'/>
      <h1>About page</h1>
      <p>I am Samruddha Prabhu and I am a Full-stack developer</p>

      <Link to="contact">Contact me will you ??</Link>
    </Layout>
  );
};

export default AboutPage;
