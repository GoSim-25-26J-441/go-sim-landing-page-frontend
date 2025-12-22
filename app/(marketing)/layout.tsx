import CookieConsent from "../../components/common/cookies/CookieConsent";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* <CookieConsent /> */}
    </div>
  );
}
