/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 basis-[10rem]  mr-0 md:mr-10">
            <Link
              to="/"
              className="flex-shrink-0 flex-align-center justify-center md:justify-start gap-x-1"
            >
              <BiBuildingHouse className="text-3xl text-primary" />
              <h1 className=" text-center block md:block">Aashray</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
              <div className="gap-5 my-6 flex-center-center md:flex md:justify-start ">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem] p-3 ">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="/about-us"> About Us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/faqs">FAQs</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#services">Services</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Careers</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold text-center md:text-left">
              Services
            </h2>
            <ul className="flex md:gap-0 gap-3  md:flex-col md:justify-start ">
              <li className="my-3 text-muted text-center md:text-left">
                <a href="#" className="text-primary text-base">
                  Find Property
                </a>
              </li>
              <li className="my-3 text-muted text-center md:text-left">
                <a href="#" className="text-primary text-base">
                  List Property
                </a>
              </li>
              <li className="my-3 text-muted text-center md:text-left">
                <a href="#" className="text-primary text-base">
                  Find Roomies
                </a>
              </li>
              <li className="my-3 text-muted text-center md:text-left">
                <a href="#" className="text-primary text-base">
                  Explore Nearby
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div> */}
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
          Created By <span className="text-primary">Webfudge</span> | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
