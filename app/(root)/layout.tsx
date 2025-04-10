import Header from "../components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className={"my-12 sm:my-16"} />
      {children}
    </>
  );
}
