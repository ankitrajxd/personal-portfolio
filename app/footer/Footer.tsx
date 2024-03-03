import Socials from "./Socials";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

const Footer = () => {
  return (
    <div>
      
      <Socials />
    </div>
  );
};

export default Footer;
