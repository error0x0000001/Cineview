import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from './ContentWrapper'

const Footer = () => {



  return (
    <footer className="bg-black3 py-[50px] text-white relative ">
      <ContentWrapper className='flex flex-col items-center'>

        <ul className="list-none flex items-center justify-center gap-4 md:gap-[30px] mb-5 md:mb-[30px] ">
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">Terms Of Use</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">Privacy-Policy</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">About</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">Blog</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">FAQ</li>
        </ul>

        <div className="text-center text-xs md:text-sm leading-5 opacity-50 max-w-[800px] mb-5 md:mb-[30px] ">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id veniam ipsa facere! Est consequatur,
            explicabo laboriosam suscipit eius rem non amet ratione fugiat provident reprehenderit error?
            Fuga iure quam sed atque, ipsum explicabo dignissimos! Voluptas vero facilis velit beatae totam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, pariatur.
          </p>
        </div>

      </ContentWrapper>
    </footer>
  )
}

export default Footer