import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen mt-16 bg-white dark:bg-black">
        {children}
      </div>
      <Footer />
    </>
  );
}
