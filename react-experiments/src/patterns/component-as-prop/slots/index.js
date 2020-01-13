import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Layout from "./Layout";

const BasicPage = () => (
  <Layout header={<Header />} body={<Body />} footer={<Footer />} />
);

export default BasicPage;
