import React from 'react';
import Layout from '../components/layout/layout';
import Head from '../components/head/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact'/>
      <h1>Contact me at the following numbers</h1>
      <ul>
        <li>Phone: *******</li>
        <li>E-mail: youwish@something.com</li>
        <li>Address: somewhere or nowhere</li>
      </ul>

      <p>View this tutorial on <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=1420s" target="_blank"
           rel="noopener noreferrer">
          Youtube</a>
      </p>
    </Layout>
  );
};

export default ContactPage;
