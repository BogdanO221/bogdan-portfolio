import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl text-slate-100 font-thin tracking-widest">
          Bo
        </h1>
      </div>
      <div className=" m-8 flex items-cente justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bogdan-obradovic-8a9230272?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bloj%2F9sCnRVCuw3OUZ3IvFA%3D%3D"
          target="blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/BogdanO221">
          <FaGithub />
        </a>

        <a href="https://www.instagram.com/_bogdan__o_/">
          <FaInstagram />
        </a>

        <a href="mailto:bogdanobradovic02@gmail.com">
          <SiGmail />
        </a>
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
