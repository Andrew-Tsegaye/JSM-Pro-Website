import React from "react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
