import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";
import Footer from "../Footer";
const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header className="fixStyleHeader container h-24">
        <Header />
      </Layout.Header>
       <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        
        <Footer />
      </Layout.Footer>  
    </Layout>
  );
};

export default MainLayout;
