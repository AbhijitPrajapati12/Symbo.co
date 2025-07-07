import Header from "../components/Header";
import StartingAd from "../components/StartingAd";
import Benefits from "../components/Benefits";
import BusinessHelp from "../components/BusinessHelp";
import DeliveryPartner from "../components/DeliveryPartner";
import InsurTech from "../components/InsurTech";
import Reviews from "../components/Reviews";
import CaseStudy from "../components/CaseStudy";
import DragToTop from "../components/DragToTop";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <StartingAd />
        <Benefits />
        <BusinessHelp />
        <DeliveryPartner />
        <InsurTech />
        <Reviews />
        <CaseStudy />
        {/* <DragToTop /> */}
      </main>
    </>
  );
};

export default HomePage;
