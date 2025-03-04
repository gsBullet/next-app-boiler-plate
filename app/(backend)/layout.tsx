export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
  // keywords: 'Dashboard',
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          async
        ></script>
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
