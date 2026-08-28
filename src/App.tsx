import Navigation from "./components/ui/Navigation";
import Overture from "./components/chapters/Overture";
import Context from "./components/chapters/Context";
import Approach from "./components/chapters/Approach";
import Work from "./components/chapters/Work";
import Services from "./components/chapters/Services";
import Journal from "./components/chapters/Journal";
import ContactOutro from "./components/chapters/ContactOutro";
import PrototypeManager from "./components/prototypes/PrototypeManager";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Overture />
        <Context />
        <Approach />
        <Work />
        <Services />
        <Journal />
        <ContactOutro />
      </main>
      <PrototypeManager />
    </>
  );
}
