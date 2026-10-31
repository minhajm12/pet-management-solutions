import Image from "next/image";
import { Icons } from "../common/Icons";
import MainBtn from "../common/MainBtn";
import WhyChoosePoints from "./WhyChoosePoints";
import WhyChooseMain from "./WhyChooseMain";



export default function HomeWhyChoose() {
  return (
    <section
      className="main-padding y-gap flex flex-col"
      aria-labelledby="why-choose-heading"
    >
      {/* Why Choose Us Main Section */}
      <WhyChooseMain />

      {/* Why Choose Us Feature Points Section */}
      <WhyChoosePoints />
    </section>
  );
}

