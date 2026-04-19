import Footer from "../../components/footer/Footer";
import GlobalNetworkDock from "../../components/network/GlobalNetworkDock";
import Navbar from "../../components/nav/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <GlobalNetworkDock />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
