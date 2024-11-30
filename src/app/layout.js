export const metadata = {
    title: "Dolami",
    description: "TestApplication",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }