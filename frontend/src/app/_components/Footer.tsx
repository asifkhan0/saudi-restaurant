import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMobileScreen, FaXTwitter } from "react-icons/fa6";
import styles from "../styles/Footer.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

interface FooterProps {
  logoSrc: string;
}

const Footer: React.FC<FooterProps> = ({ logoSrc }) => {
  return (
    <footer className="bg-image bg-primary text-secondary">
      {/* Footer Top */}
      <div className="footer-top py-14">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facilities Section */}
            <div className="flex items-center justify-center">
              <div className="wrapper space-y-4">
                <h3 className="text-2xl font-bold">Our Facilities</h3>
                <ul className="space-y-2 text-lg">
                  <li>
                    <a href="/menu1" className="hover:text-gray-400">
                      Indian Menu
                    </a>
                  </li>
                  <li>
                    <a href="/menu1" className="hover:text-gray-400">
                      Menu Item
                    </a>
                  </li>
                  <li>
                    <a href="/reservation" className="hover:text-gray-400">
                      Private Event
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo & Social Area */}
            <div className="flex justify-center">
              <div className={`brandContainer ${styles.borderRadius} w-80 h-80`}>
                <div className="text-center w-full h-full flex flex-col items-center justify-center gap-6">
                  <div>
                    <img src={logoSrc} alt="Logo" className="mx-auto" />
                    <p className={styles.underline}>Established . 2022</p>
                  </div>
                  <ul className="flex justify-center gap-3">
                    <li>
                      <a href="#" className={styles.socialBorder} aria-label="Facebook">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.socialBorder} aria-label="LinkedIn">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.socialBorder} aria-label="Instagram">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.socialBorder} aria-label="Twitter">
                        <FaXTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Address Info */}
            <div className="flex items-center justify-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Address Info</h3>
                <div className="space-y-2 text-lg">
                  <div className="flex gap-4 items-center">
                    <FaMobileScreen className="text-xl" />
                    <a href="tel:+8801776766767" className="hover:text-gray-400">
                      +880-1776-766-767
                    </a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <MdOutlineMailOutline className="text-xl" />
                    <a href="mailto:info@example.com" className="hover:text-gray-400">
                      info@example.com
                    </a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <IoLocationOutline className="text-xl" />
                    <a
                      href="https://goo.gl/maps/2Q4gzMK8mNc1uYnL7"
                      className="hover:text-gray-400 text-wrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mirpur DOHS, House-167/170
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-btm py-4 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
            <div className="mb-2 md:mb-0">
              <p>
                &copy; 2024{" "}
                <a href="/#" className="hover:text-gray-400">
                  makhmakha
                </a>{" "}
                - All Rights Reserved.
              </p>
            </div>
            <div>
              <p>
                <a href="/#" className="hover:text-gray-400">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="/#" className="hover:text-gray-400">
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
