import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
