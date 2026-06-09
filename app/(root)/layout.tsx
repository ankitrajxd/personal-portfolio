import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow">
        <Header className={"my-12 sm:my-16"} />
        {children}
      </div>
      <Footer />
    </div>
  );
}
