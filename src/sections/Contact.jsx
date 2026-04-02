import { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "../styles/sections/contact.css";


const INITIAL_FORM_STATE = { name: "", email: "", message: "" };

const FORM_FIELDS = [
  { id: "name", type: "text", label: "Name", placeholder: "Your name" },
  { id: "email", type: "email", label: "Email", placeholder: "your@email.com" },
];

const SOCIALS = [
  {
    label:  "GitHub",
    handle: "Shejal854",
    href:   "https://github.com/Shejal854",
    color:  "255,255,255",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      
    ),
  },
  {
    label:  "LinkedIn",
    handle: "in/shejal",
    href:   "https://www.linkedin.com/in/shejalyadav/",
    color:  "10,102,227",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label:  "Email",
    handle: "shejalyadav.sy133@gmail.com",
    href:   "mailto:shejalyadav.sy133@gmail.com",
    color:  "245,158,11",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const INFO_STATS = [
  { label: "Location",      val: "India · Remote OK" },
];

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};


export default function Contact() {
  const formRef = useRef(null);
  const sentTimeoutRef = useRef(null);

  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    return () => {
      if (sentTimeoutRef.current) clearTimeout(sentTimeoutRef.current);
    };
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );

      setForm(INITIAL_FORM_STATE);
      setSent(true);

      if (sentTimeoutRef.current) clearTimeout(sentTimeoutRef.current);
      sentTimeoutRef.current = setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".contact__title > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      ".contact__form-col, .contact__info-col",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="contact" className="pf-section">
      <div className="pf-grid-bg" />
      <div className="pf-orb pf-orb--amber-tl" />
      <div className="pf-orb pf-orb--indigo-br" />

      <div className="pf-container">
        <div className="pf-divider" />

        <div className="contact__title">
          <span className="pf-title-sub">// let's connect</span>
          <h2 className="pf-title-heading">Get in Touch</h2>
        </div>

        <div className="pf-divider" />

        <div className="contact__grid">
          {/* ── Form ── */}
          <div className="contact__form-col">
            <div className="pf-card contact__form-card">
              <div className="pf-card__corner-tr" />
              <div className="pf-card__corner-bl" />

              <div className="contact__form-inner">
                <p className="contact__form-intro">
                  Have an idea, project, or opportunity? I’d love to collaborate and learn.
                  Feel free to reach out — I’m always open to new experiences.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
                  {/* Name + Email row */}
                  <div className="contact__row-2">
                    {FORM_FIELDS.map((f) => (
                      <div key={f.id} className="contact__field">
                        <label className="contact__label" htmlFor={f.id}>{f.label}</label>
                        <div className="contact__input-wrap">
                          <input
                            className="contact__input"
                            id={f.id} name={f.id} type={f.type}
                            value={form[f.id]} onChange={handleChange}
                            placeholder={f.placeholder}
                            required
                          />
                          <div className="contact__focus-line" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="message">Message</label>
                    <div className="contact__input-wrap">
                      <textarea
                        className="contact__input contact__textarea"
                        id="message" name="message"
                        value={form.message} onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={5} required
                      />
                      <div className="contact__focus-line" />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`contact__submit${sent ? " contact__submit--sent" : ""}`}
                    disabled={loading}
                  >
                    {sent ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Message Sent
                      </>
                    ) : loading ? (
                      <><Spinner /> Sending...</>
                    ) : (
                      <>Send Message <span>↗</span></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ── Info panel ── */}
          <div className="contact__info-col">
            <div className="pf-card contact__info-card">
              <div className="contact__info-inner">
                <div className="pf-badge pf-badge--green">
                  <div className="pf-badge__dot" />
                  Available for work
                </div>

                <div className="contact__tagline">
                  <p className="contact__tagline-heading">Let's build<br />something great.</p>
                  <p className="contact__tagline-sub">
                    Open to internships, full-time opportunities, and open-source contributions.
                  </p>
                </div>

                <div className="pf-inner-divider" />

                {/* Social links */}
                <div className="contact__socials">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-item"
                      style={{ "--social-color": s.color }}
                    >
                      <div className="contact__social-icon">{s.icon}</div>
                      <div>
                        <p className="contact__social-label">{s.label}</p>
                        <p className="contact__social-handle">{s.handle}</p>
                      </div>
                      <span className="contact__social-arrow">↗</span>
                    </a>
                  ))}
                </div>

                <div className="pf-inner-divider" />

                {/* Stat chips */}
                <div className="contact__stat-chips">
                  {INFO_STATS.map((s) => (
                    <div key={s.label} className="contact__stat-chip">
                      <span>{s.icon}</span>
                      <span className="contact__stat-text">
                        {s.label}: <span className="contact__stat-val">{s.val}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="pf-more-strip" style={{ marginTop: 40 }}>
          <div className="pf-more-strip__line pf-more-strip__line--left" />
          <div className="pf-more-strip__line pf-more-strip__line--right" />
        </div>
      </div>
    </section>
  );
}