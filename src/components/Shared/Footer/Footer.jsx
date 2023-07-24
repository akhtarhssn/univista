import React from "react";
import Container from "../Container/Container";
import Logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 bg-base-200 text-base-content">
      <Container>
        <div className="footer">
          <div>
            <Link to="/">
              <img className="max-w-[250px]" src={Logo} alt="Univista Logo" />
            </Link>
            <p>
              Univista PVT. LTD.
              <br />
              Providing reliable College Info since 2022
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
