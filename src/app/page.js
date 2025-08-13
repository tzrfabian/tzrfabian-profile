import Intro1 from "@/components/Intro1";
import ContactList from "@/components/ContactList";
import Intro2 from "@/components/Intro2";

export default function Home() {
  return (
<div className="overflow-x-hidden w-full">
  <Intro1/>
  <ContactList/>
  <Intro2/>
</div>

  );
}
