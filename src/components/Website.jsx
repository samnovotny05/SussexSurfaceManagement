import React from 'react';
import { ArrowRight, CheckCircle2, Hammer, Home, Lightbulb, Phone, MapPin, Mail, Paintbrush, Wrench, PanelsTopLeft, BrickWall } from 'lucide-react';

const services = [
  'All Specialty Carpentry',
  'Drywall Repairs',
  'Acoustic Removal',
  'Deck Staining / Refurbishing',
  'Deck Installs',
  'Window Installs',
  'Hardwood Flooring',
  'Laminate Flooring',
  'Light Fixtures',
  'Light Repairs',
  'Tile Install',
  'Electrical',
  'Printing Services',
];

const highlights = [
  {
    title: '20 Years of Experience',
    text: 'Trusted craftsmanship serving homeowners and property owners for two decades.',
  },
  {
    title: 'The Triangle, Raleigh NC',
    text: 'Proudly serving Raleigh and the surrounding Triangle communities.',
  },
  {
    title: 'Reliable, Versatile Service',
    text: 'From repairs to installations, one company for many interior and exterior needs.',
  },
];

const serviceIcons = [Hammer, Home, Paintbrush, PanelsTopLeft, Lightbulb, Wrench, BrickWall];

export default function Website() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.14),_transparent_30%)]" />

      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img
                src="/mnt/data/Screenshot 2026-05-22 at 1.26.33 PM.png"
                alt="Sussex Surface Management Group LLC logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Sussex Surface Management Group LLC</p>
              <h1 className="text-xl font-semibold md:text-2xl">Surface, Carpentry, Repair, and Installation Experts</h1>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </header>

        <main className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <section className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              Serving The Triangle for 20 years
            </span>

            <div className="space-y-5">
              <h2 className="max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl">
                Expert craftsmanship for homes and properties across Raleigh, NC.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/70">
                Sussex Surface Management Group LLC delivers dependable interior and exterior improvement services with a focus on quality,
                detail, and long-lasting results. From specialty carpentry to flooring, lighting, and repairs, we handle a wide range of projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-slate-900/80 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Professional Service</p>
              <h3 className="mt-3 text-3xl font-semibold">Solutions for repairs, upgrades, and installs.</h3>
              <p className="mt-4 max-w-xl text-white/70">
                Whether the project is small or large, we bring careful workmanship and clear communication to every job.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Specialty carpentry',
                  'Deck staining and refurbishing',
                  'Window installs and flooring',
                  'Electrical and light repairs',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <section id="services" className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">Services</p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <article
                  key={service}
                  className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{service}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Professional service designed to improve function, appearance, and value.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl">
            <h3 className="text-2xl font-semibold">Why clients choose Sussex Surface Management Group LLC</h3>
            <div className="mt-5 space-y-4">
              {[
                '20 years of experience in The Triangle',
                'Clear communication and dependable scheduling',
                'Quality work across multiple trades and services',
                'A local Raleigh, NC company that understands the area',
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="contact" className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-xl">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-slate-600">
              Add your phone, email, and service area here to start getting leads.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
                <Phone className="h-5 w-5" />
                <span>Your phone number</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
                <Mail className="h-5 w-5" />
                <span>Your email address</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
                <MapPin className="h-5 w-5" />
                <span>Raleigh, NC and The Triangle</span>
              </div>
            </div>

            <form className="mt-6 grid gap-3">
              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-slate-400"
                placeholder="Name"
              />
              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-slate-400"
                placeholder="Email"
              />
              <textarea
                className="min-h-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-slate-400"
                placeholder="Tell us about your project"
              />
              <button className="mt-2 w-full rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Send Message
              </button>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
}
