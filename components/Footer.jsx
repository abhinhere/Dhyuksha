import React from "react";
import img from "@/app/public/logo.png";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-[#152c37] text-[#fefefe] ">
            <div className="flex flex-col gap-5 items-center justify-center h-[250px]">
                <div className="flex items-center gap-4 pt-">
                    <Image src={img} alt="Dhyuksha" width={50} height={50} />
                    <p className="text-5xl font-makalo">DHYUKSHA</p>
                </div>
                <div className="flex items-center font-makala flex-col">
                    <p>Students Union</p>
                    <p>College of Engineering Vadakara</p>
                </div>

                <p>Copyright © 2025 - All right reserved</p>

                <a
                    href="https://www.instagram.com/dhyuksha.cev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fefefe] flex hover:text-black transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 1.5A4.26 4.26 0 003.5 7.75v8.5A4.26 4.26 0 007.75 20.5h8.5a4.26 4.26 0 004.25-4.25v-8.5A4.26 4.26 0 0016.25 3.5h-8.5zm4.25 3.25a5.5 5.5 0 015.5 5.5 5.5 5.5 0 01-5.5 5.5 5.5 5.5 0 01-5.5-5.5 5.5 5.5 0 015.5-5.5zm0 1.5a4 4 0 100 8 4 4 0 000-8zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                    </svg>
                    &nbsp; dhyuksha.cev
                </a>
            </div>
        </footer>
    );
};



export default Footer;
