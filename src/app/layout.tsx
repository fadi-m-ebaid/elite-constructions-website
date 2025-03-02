import "./globals.css";
import { ReactNode } from "react";
import NavbarComponenet from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevents FontAwesome from adding duplicate styles
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import VersionChecker from "@/components/VersionChecker";

export const metadata = {
  title: "Elite Constructions",
  description: "Elite Constructions Official Website",
  icons: {
    icon: "/assets/logo-07.svg",
    shortcut: "/assets/logo-07.svg",
    apple: "/assets/logo-07.svg",
  },
  openGraph: {
    images: ["/assets/logo-07.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="body">
        <VersionChecker />
        <NavbarComponenet />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
