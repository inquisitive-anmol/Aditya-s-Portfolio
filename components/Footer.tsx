import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 " id="contact">

      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to enhance
          <span className="text-purple">
          your digital narrative with stunning edits.
          </span>
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out me today! and let&apos;s discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:anmolof10gms@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-20 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
            Copyright &copy; 2024 Aditya
        </p>

        <div className="flex items-center md:gap-3 gap-6">
{socialMedia.map((profile) => (
    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
        <a href="https://www.instagram.com/editbyaadi/" target="_blank"><img src={profile.img} alt={profile.img} width={20} height={20} className="bg-white-100 rounded" />
        </a>
    </div>
))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
