import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
