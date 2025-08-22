"use client";

import React, { useMemo, useState } from "react";

const CONTACT_EMAIL = "hello@fairleasecanada.ca";
const FORM_ENDPOINT = "#"; // e.g., "https://formspree.io/f/xxxxxxx" or your /api/submit

export default function FairLeaseCanadaLanding() {
  const [modal, setModal] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    setModal(null);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen">
      <Header onPrimary={() => setModal("review")} />
      <main>
        <Hero onPrimary={() => setModal("review")} onSecondary={() => setModal("valuation")} />
        <TrustBar />
        <HowItWorks />
        <Services open={(k) => setModal(k)} />
        <WhySection />
        <FAQSection />
        <AboutSection />
      </main>
      <Footer />

      {modal && (
        <FormModal
          kind={modal}
          onClose={closeModal}
          onSubmitted={() => setSubmitted(true)}
        />
      )}
      <FloatingCTA onClick={() => setModal("review")} />
    </div>
  );
}

function Header({ onPrimary }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group" aria-label="FairLeaseCanada Home">
            <Logo />
            <span className="text-lg sm:text-xl font-semibold tracking-tight group-hover:opacity-90">FairLeaseCanada</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="nav-link" href="#how">How it works</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#why">Why us</a>
            <a className="nav-link" href="#faqs">FAQs</a>
            <a className="nav-link" href="#about">About</a>
            <button onClick={onPrimary} className="btn-primary">Start Lease Review</button>
          </nav>
          <button className="md:hidden inline-flex items-center p-2 rounded-lg border border-slate-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Burger open={open} />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a className="nav-link py-2" href="#how" onClick={() => setOpen(false)}>How it works</a>
              <a className="nav-link py-2" href="#services" onClick={() => setOpen(false)}>Services</a>
              <a className="nav-link py-2" href="#why" onClick={() => setOpen(false)}>Why us</a>
              <a className="nav-link py-2" href="#faqs" onClick={() => setOpen(false)}>FAQs</a>
              <a className="nav-link py-2" href="#about" onClick={() => setOpen(false)}>About</a>
              <button className="btn-primary mt-2" onClick={() => { setOpen(false); onPrimary(); }}>Start Lease Review</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero({ onPrimary, onSecondary }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(14,42,59,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(12,59,46,0.25),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Take control of your freehold lease
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl">
              Independent reviews, valuations, sale support, and negotiation—built for Canadian freehold owners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn-primary" onClick={onPrimary}>Get a Lease Review</button>
              <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-slate-300 hover:bg-white shadow-sm" onClick={onSecondary}>Request a Valuation</button>
            </div>
            <p className="mt-4 text-sm text-slate-600">Independent • Owner‑First • Canada‑Wide</p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
              <h3 className="text-lg font-medium">What we do</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  { t: "Clause‑by‑clause lease reviews" },
                  { t: "Evidence‑based valuations" },
                  { t: "Sell your lease (confidential)" },
                  { t: "Negotiate on your behalf" },
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{it.t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm text-slate-600">
                <p>Plain‑language advice. No jargon. No surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            "Independent & owner‑first",
            "Canadian expertise",
            "Confidential & secure",
            "Data‑driven valuations",
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <ShieldIcon /> <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Tell us about your lease",
      desc: "Secure intake in ~5 minutes with uploads for your documents.",
    },
    {
      title: "Get your options",
      desc: "We flag risks, leverage points, and recommended next steps.",
    },
    {
      title: "Act with confidence",
      desc: "Choose review only, valuation, sell, or negotiation support.",
    },
  ];
  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-3">
                <Badge>{i + 1}</Badge>
                <h3 className="font-medium text-lg">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ open }) {
  const cards = [
    {
      k: "review",
      title: "Lease Review",
      desc: "Clause‑by‑clause analysis with red flags, leverage points, and practical recommendations.",
      cta: "Start Lease Review",
    },
    {
      k: "valuation",
      title: "Valuation",
      desc: "Evidence‑based estimate of fair market value using comparable terms and transactions.",
      cta: "Request Valuation",
    },
    {
      k: "sell",
      title: "Sell Your Lease",
      desc: "Confidential packaging and outreach to qualified buyers; you control terms and timeline.",
      cta: "Explore Selling",
    },
    {
      k: "negotiate",
      title: "Negotiate on Your Behalf",
      desc: "We manage offers, counters, and terms so you get fair value without the hassle.",
      cta: "Ask Us to Negotiate",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.k} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-medium">{c.title}</h3>
              <p className="mt-3 text-sm text-slate-700 flex-1">{c.desc}</p>
              <button className="btn-primary mt-6" onClick={() => open(c.k)}>{c.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const points = [
    {
      t: "Independent, not tied to operators",
      d: "Our duty is to the owner. We disclose conflicts and act in your interest.",
    },
    {
      t: "Plain‑language advice",
      d: "We translate legalese into clear options so you can decide.",
    },
    {
      t: "Canadian expertise",
      d: "Aligned to provincial practice with deep AB/SK/MB experience.",
    },
    {
      t: "Data‑driven valuations",
      d: "Comparable terms, royalty structures, and precedent underpin our analysis.",
    },
    {
      t: "Confidential",
      d: "Your information stays private and is never shared without consent.",
    },
  ];
  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why FairLeaseCanada</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <h3 className="font-medium">{p.t}</h3>
                  <p className="mt-1 text-sm text-slate-700">{p.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: "What documents do I need?",
      a: "The lease (all pages/appendices), any amendments, royalty statements (if producing), and any prior correspondence.",
    },
    {
      q: "How long does a review take?",
      a: "Typical initial readback in 2–4 business days; rush available.",
    },
    {
      q: "Is this legal advice?",
      a: "We provide analysis and negotiation support; where legal services are required, we coordinate with licensed counsel.",
    },
    {
      q: "Which provinces do you cover?",
      a: "Canada‑wide, with deepest experience in Alberta, Saskatchewan, and Manitoba.",
    },
    {
      q: "How do valuations work?",
      a: "We consider lease terms, royalty %, depth rights, offset obligations, operator quality, and comparable transactions.",
    },
    {
      q: "Will you negotiate against my current operator?",
      a: "Yes. We manage communications and keep you informed at every step.",
    },
    {
      q: "How are fees structured?",
      a: "Flat fees for review/valuation; success‑based or hybrid for sale/negotiation. You approve scope before we start.",
    },
    {
      q: "How do you protect my data?",
      a: "Encrypted intake, limited access, and written consent required before any third‑party sharing.",
    },
  ];
  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">FAQs</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 shadow-sm bg-white">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <button
                className="w-full text-left flex items-start justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium">{f.q}</span>
                <span className="ml-4">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="mt-3 text-sm text-slate-700">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About FairLeaseCanada</h2>
        <p className="mt-4 text-slate-700">
          FairLeaseCanada exists to level the playing field for individual freehold owners. We combine deep lease experience,
          market data, and practical negotiation to help you get fair terms and real value. We are independent—our loyalty is to you.
        </p>
        <p className="mt-4 italic text-slate-600">Your lease. Your land. Your terms.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-semibold">FairLeaseCanada</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Independent lease review, valuation, sale support, and negotiation for Canadian freehold owners.</p>
          </div>
          <div>
            <h4 className="font-medium">Contact</h4>
            <p className="mt-2 text-sm"><a className="underline hover:no-underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
          <div>
            <h4 className="font-medium">Legal</h4>
            <p className="mt-2 text-xs text-slate-600">FairLeaseCanada provides analysis and negotiation support. Where legal services are required, we coordinate with licensed counsel.</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} FairLeaseCanada. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Modal + Form
function FormModal({ kind, onClose, onSubmitted }) {
  const title = useMemo(() => ({
    review: "Start Lease Review",
    valuation: "Request Valuation",
    sell: "Explore Selling Your Lease",
    negotiate: "Ask Us to Negotiate",
  }[kind]), [kind]);

  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setOk(true);
      onSubmitted();
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg" aria-label="Close">✕</button>
          </div>
          {ok ? (
            <div className="px-6 py-10 text-center">
              <h4 className="text-xl font-medium">Thanks—your request is in.</h4>
              <p className="mt-2 text-slate-700 text-sm">We’ll review and email you within 1–2 business days with next steps. For urgent matters, email <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
              <button onClick={onClose} className="btn-primary mt-6">Close</button>
            </div>
          ) : (
            <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} className="px-6 py-6 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <TextField name="name" label="Full name / entity" required />
                <TextField name="email" type="email" label="Email" required />
                <TextField name="phone" label="Phone" />
                <SelectField name="province" label="Province" options={["AB","SK","MB","BC","ON","QC","NB","NS","PE","NL","YT","NT","NU"]} />
                <TextField name="lld" label="Legal land description" placeholder="e.g., 04-10-034-02W4M / quarter-section" />
                <SelectField name="producing" label="Producing?" options={["Yes","No","Unknown"]} />
                <TextField name="operator" label="Operator / counterparty (if known)" />
              </div>

              <Field label="Key concerns (check all that apply)">
                <Checkbox name="concerns" value="assignment" label="Assignment" />
                <Checkbox name="concerns" value="offset" label="Offset obligations" />
                <Checkbox name="concerns" value="deductions" label="Deductions/costs" />
                <Checkbox name="concerns" value="continuation" label="Continuation/shut‑in" />
                <Checkbox name="concerns" value="pooling" label="Pooling/spacing" />
                <Checkbox name="concerns" value="other" label="Other" />
              </Field>

              {kind === "valuation" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <TextField name="payments12" label="Payments last 12–24 months (approx)" placeholder="$" />
                  <TextField name="offers" label="Offers received (if any)" />
                </div>
              )}
              {kind === "sell" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <TextField name="minPrice" label="Minimum acceptable price (if any)" placeholder="$" />
                  <TextField name="royaltyFloor" label="Royalty floor / key terms" />
                </div>
              )}
              {kind === "negotiate" && (
                <div className="grid gap-4">
                  <SelectField name="status" label="Current status" options={["New offer","Renewal","Dispute","Deductions","Other"]} />
                  <TextArea name="objectives" label="Your objectives" placeholder="e.g., higher royalty, shorter term, depth carve‑outs, audit rights…" />
                </div>
              )}

              <Field label="Upload documents (lease, amendments, statements)">
                <input type="file" name="files" multiple className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-slate-900 file:text-white hover:file:bg-slate-800" />
              </Field>

              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" required className="mt-1" name="consent" />
                <span>I consent to FairLeaseCanada reviewing my materials and contacting me. Information is confidential and not shared without my written permission.</span>
              </label>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-white" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-primary disabled:opacity-50" disabled={sending}>{sending ? "Submitting…" : "Submit"}</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Small UI helpers
function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-800">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function TextField({ name, label, type = "text", required = false, placeholder }) {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="text-sm font-medium text-slate-800">{label}{required && <span className="text-rose-600">*</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-xl border-slate-300 focus:border-slate-400 focus:ring-slate-400/40 text-sm" />
    </div>
  );
}

function TextArea({ name, label, required = false, placeholder }) {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="text-sm font-medium text-slate-800">{label}{required && <span className="text-rose-600">*</span>}</label>
      <textarea id={name} name={name} required={required} placeholder={placeholder}
        className="w-full rounded-xl border-slate-300 focus:border-slate-400 focus:ring-slate-400/40 text-sm min-h-[90px]" />
    </div>
  );
}

function SelectField({ name, label, options }) {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="text-sm font-medium text-slate-800">{label}</label>
      <select id={name} name={name} className="w-full rounded-xl border-slate-300 focus:border-slate-400 focus:ring-slate-400/40 text-sm">
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ name, value, label }) {
  const id = `${name}-${value}`;
  return (
    <label htmlFor={id} className="inline-flex items-center gap-2 text-sm mr-4 mb-2">
      <input id={id} type="checkbox" name={name} value={value} className="rounded" />
      <span>{label}</span>
    </label>
  );
}

function Badge({ children }) {
  return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-medium">{children}</span>;
}

function FloatingCTA({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 rounded-full shadow-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800"
    >
      Start Lease Review
    </button>
  );
}

// Icons
function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="6" width="40" height="30" rx="4" fill="#0E2A3B" />
      <path d="M10 14h20M10 20h28M10 26h18" stroke="#C6A25A" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 38l6-6" stroke="#0F3B2E" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="flex-none mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Burger({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </>
      )}
    </svg>
  );
}
