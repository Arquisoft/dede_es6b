
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FooterLink } from "./FooterStyles";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                   <FooterLink href="https://arquisoft.github.io/dede_es6b/">Sobre nosotros</FooterLink>
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} DeDe. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/Arquisoft/dede_es6b"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;