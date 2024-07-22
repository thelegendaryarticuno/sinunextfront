// src/pages/about.tsx
import React from "react";
import Layout from "../components/Layout";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <h2 className="text-xl mb-4">About Us</h2>
        <p>This is the about page.</p>
      </div>
    </Layout>
  );
};

export default About;
