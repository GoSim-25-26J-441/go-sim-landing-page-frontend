import { cookies } from "next/headers";
import CookieConsent from "../../components/common/cookies/CookieConsent";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const hasConsent = (await cookies()).has("gs_cookie_consent");
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* {!hasConsent && <CookieConsent />} */}
    </div>
  );
}
