import Intro1 from "../components/Intro1";
import ContactList from "../components/ContactList";
import Intro2 from "../components/Intro2";

export const metadata = {
  title: "Home | Fabian Tenzara",
  description: "Fabian Tenzara's portfolio - Here you can find information about my background, experience, and projects.",
};

export default function Home() {
  return (
<div className="overflow-x-hidden w-full">
  <Intro1/>
  <ContactList/>
  <Intro2/>
</div>

  );
}
