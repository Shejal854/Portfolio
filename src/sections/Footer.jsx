import { socialImgs } from "../constants";

import "../styles/sections/footer.css";

const NAV_LINKS = ["About", "Projects", "Experience", "Contact"];
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="pf-section site-footer">
      <div className="footer__shimmer" />

      <div className="footer__inner">
       
        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="footer__nav-item">
              <a href={`#${link.toLowerCase()}`} className="footer__link">{link}</a>
              {i < NAV_LINKS.length - 1 && <span className="footer__nav-dot" aria-hidden="true" />}
            </span>
          ))}
        </nav>

        <div className="footer__brand">
          <p className="footer__name">She<span>jal</span></p>
          <div className="footer__socials">
            {socialImgs.map((s, i) => (
              <a
                key={i}
                href={s.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn pf-btn--icon footer__social-btn"
                aria-label={`Social link ${i + 1}`}
              >
                <img src={s.imgPath} alt="" aria-hidden="true" className="footer__social-img" />
              </a>
            ))}
          </div>
        </div>

        
        <div className="footer__copy">
          <p className="footer__copy-year">© {CURRENT_YEAR} Shejal</p>
          <p className="footer__copy-made">
            Made with <span className="footer__heart" aria-label="love">♥</span> in India
          </p>
        </div>
      </div>

     
      <div className="footer__bottom">
        <div className="footer__bottom-line footer__bottom-line--left" />
        <span className="footer__bottom-text">All rights reserved</span>
        <div className="footer__bottom-line footer__bottom-line--right" />
      </div>
    </footer>
  );
}