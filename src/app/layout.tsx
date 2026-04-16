import type { Metadata } from "next";
import "./globals.css";
import { payloadFindGlobal } from "@/lib/payload";
import { TopBar } from "@/components/layout/TopBar";
import { DynamicNavSecondary } from "@/components/layout/DynamicNavSecondary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ViewportScale } from "@/components/layout/ViewportScale";

export const metadata: Metadata = {
  title: "CMS Unifacisa",
  description: "CMS Unifacisa",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let announcement = "";
  let announcementLink = "";
  let secondaryLinks: { label: string; href?: string }[] = [];

  try {
    const nav = await payloadFindGlobal("navigation");
    announcement = nav.topBarAnnouncement || "";
    announcementLink = nav.topBarLink || "";
    if (Array.isArray(nav.secondaryLinks)) {
      secondaryLinks = nav.secondaryLinks.map((l: { label: string; href: string }) => ({
        label: l.label,
        href: l.href,
      }));
    }
  } catch {
    // Globals may not exist yet on first run
  }

  return (
    <html lang="pt-BR">
      <body className="siteBody">
        <ViewportScale />
        {announcement && <TopBar announcement={announcement} announcementLink={announcementLink} />}
        <DynamicNavSecondary />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
