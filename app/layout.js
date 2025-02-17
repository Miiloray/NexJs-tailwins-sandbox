import "./globals.css";
import MainLayout from "@/components/MainLayout";
import MenuContextProvider from "@/context/MenuContext";


export const metadata = {
  title: "Nextjs Tailwind Sandbox",
  description: "This is a tutorial Project ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MenuContextProvider>
        <MainLayout>
            {children}
        </MainLayout>
          </MenuContextProvider>
      </body>
    </html>
  );
}
