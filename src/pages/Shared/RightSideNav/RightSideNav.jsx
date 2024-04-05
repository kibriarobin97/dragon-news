import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Login With</h2>
        <button className="btn btn-outline text-[#3B599C] w-full mb-2">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline text-black w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Find Us on</h2>
        <a
          href=""
          className="flex items-center gap-2 p-2 text-lg border rounded-t-lg"
        >
          <FaFacebookF />
          Facebook
        </a>
        <a href="" className="flex items-center gap-2 p-2 text-lg border-x">
          <FaXTwitter />
          Twitter
        </a>
        <a
          href=""
          className="flex items-center gap-2 p-2 text-lg border rounded-b-lg"
        >
          <FaInstagram />
          Instagram
        </a>
      </div>
      <div className="p-4 ">
        <div className="p-1 rounded-md bg-[#F3F3F3]">
          <h2 className="text-xl font-bold mb-2">Q-Zone</h2>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
