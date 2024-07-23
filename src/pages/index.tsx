import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  
 
  return (
    <Layout>
      <div className="p-8">
        <h2 className="text-xl mb-4">Welcome to my Next.js Project!</h2>
        <p>This is the home page.</p>
      </div>
    </Layout>
  );
};

export default Home;
