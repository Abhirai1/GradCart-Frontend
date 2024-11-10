  import React from "react";
  import Navbar from "../Navbar/Navbar";
  import Footer from "../Footer/Footer";
  import ProductCategory from "../ProductCategory/ProductCategory";
  import SlidingImages from "../SlidingImages/SlidingImages";

  interface LayoutProps {
    children: React.ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ProductCategory />
        <SlidingImages />
        <main className="flex-grow p-4 bg-gray-100">{children}</main>
        <Footer />
      </div>
    );
  };

  export default Layout;
