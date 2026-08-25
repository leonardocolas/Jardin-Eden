import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { services, getServiceBySlug, carouselImages, t as tr } from '@/data/services';
import { translations, type Lang } from '@/data/translations';

const gallery = [
  'https://images.pexels.com/photos/7990108/pexels-photo-7990108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8834042/pexels-photo-8834042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7755500/pexels-photo-7755500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const mapsQuery = 'Calle+30+entre+5ta+y+7ma+Playa+La+Habana+Cuba';
const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

function LangToggle({ lang, setLang, dark }: { lang: Lang; setLang: (l: Lang) => void; dark?: boolean }) {
  return (
    <div className={`flex items-center rounded-full border ${dark ? 'border-white/30' : 'border-[#c8c1b7]'} p-0.5 text-[10px] font-bold uppercase tracking-[0.12em]`}>
      <button
        onClick={() => setLang('es')}
        className={`rounded-full px-3 py-1.5 transition-colors ${lang === 'es' ? (dark ? 'bg-[#e6cbb4] text-[#26332c]' : 'bg-[#26332c] text-white') : dark ? 'text-white/60 hover:text-white' : 'text-[#717871] hover:text-[#26332c]'}`}
      >ES</button>
      <button
        onClick={() => setLang('en')}
        className={`rounded-full px-3 py-1.5 transition-colors ${lang === 'en' ? (dark ? 'bg-[#e6cbb4] text-[#26332c]' : 'bg-[#26332c] text-white') : dark ? 'text-white/60 hover:text-white' : 'text-[#717871] hover:text-[#26332c]'}`}
      >EN</button>
    </div>
  );
}

function Carousel({ lang }: { lang: Lang }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = carouselImages.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 3500);
    return () => clearInterval(timer);
  }, [total, paused]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div
      className="relative h-[420px] overflow-hidden rounded-sm sm:h-[500px] lg:h-[580px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {carouselImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{ opacity: i === index ? 1 : 0, transform: `scale(${i === index ? 1 : 1.08})` }}
        >
          <img src={img} alt={lang === 'es' ? `Momento del salón ${i + 1}` : `Salon moment ${i + 1}`} className="h-full w-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b2822]/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <div className="flex gap-2">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              aria-label={lang === 'es' ? `Ir a imagen ${i + 1}` : `Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-[#dc765d]' : 'w-4 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button aria-label={lang === 'es' ? 'Anterior' : 'Previous'} onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30">
            <ChevronLeft size={18} />
          </button>
          <button aria-label={lang === 'es' ? 'Siguiente' : 'Next'} onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, lang, onClick }: { service: typeof services[0]; lang: Lang; onClick: () => void }) {
  const Icon = service.icon;
  const tx = translations[lang];
  return (
    <div className="group h-[420px] cursor-pointer [perspective:1400px]" onClick={onClick}>
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative h-full w-full overflow-hidden bg-[#d9d1c6]">
            <img src={service.heroImage} alt={tr(service.title, lang)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2822]/80 via-[#26332c]/10 to-transparent" />
            <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f3ec]/90 font-serif text-sm">{service.number}</span>
            <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#dc765d] text-white"><Icon size={18} strokeWidth={1.7} /></span>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-serif text-3xl tracking-[-0.03em]">{tr(service.title, lang)}</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e6cbb4]">{tx.servicesSection.hoverHint}</p>
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between bg-[#26332c] p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dc765d]"><Icon size={18} strokeWidth={1.7} /></span>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em]">{tr(service.title, lang)}</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">{tr(service.shortDescription, lang)}</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {service.treatments.slice(0, 3).map((treat) => (
                <span key={treat.name.en} className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">{tr(treat.name, lang).split(' ')[0]}</span>
              ))}
            </div>
            <span className="mt-5 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.17em] text-[#e6cbb4]">
              {tx.servicesSection.viewDetails} <ArrowUpRight className="ml-2" size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState<'home' | 'service'>('home');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<Lang>('es');

  const tx = translations[lang];

  const goHome = () => {
    setRoute('home');
    setActiveSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToService = (slug: string) => {
    setRoute('service');
    setActiveSlug(slug);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const closeMenu = () => setMenuOpen(false);

  const activeService = route === 'service' && activeSlug ? getServiceBySlug(activeSlug) : null;

  if (route === 'service' && activeService) {
    return (
      <div className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#28322c]">
        <header className="absolute left-0 right-0 top-0 z-20 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <button onClick={goHome} className="group flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6cbb4]/70 text-[#e6cbb4] transition-transform group-hover:rotate-12"><Sparkles size={17} strokeWidth={1.5} /></span>
              <span className="font-serif text-2xl tracking-[-0.04em]">El Jardín <em className="font-light">del</em> Eden</span>
            </button>
            <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.19em] lg:flex">
              <button onClick={goHome} className="text-white/70 transition-colors hover:text-[#e6cbb4]">{tx.nav.home}</button>
              <button onClick={() => { goHome(); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-white/70 transition-colors hover:text-[#e6cbb4]">{tx.nav.services}</button>
              <button onClick={() => { goHome(); setTimeout(() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-white/70 transition-colors hover:text-[#e6cbb4]">{tx.nav.story}</button>
              <button onClick={() => { goHome(); setTimeout(() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-white/70 transition-colors hover:text-[#e6cbb4]">{tx.nav.visit}</button>
            </nav>
            <div className="hidden items-center gap-4 lg:flex">
              <LangToggle lang={lang} setLang={setLang} dark />
              <button onClick={goHome} className="rounded-full border border-white/30 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition-colors hover:border-[#e6cbb4] hover:text-[#e6cbb4]"><ArrowLeft className="mr-2 inline" size={14} /> {tx.nav.allServices}</button>
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <LangToggle lang={lang} setLang={setLang} dark />
              <button aria-label={tx.nav.back} onClick={goHome}><ArrowLeft /></button>
            </div>
          </div>
        </header>

        <section className="relative flex min-h-[620px] items-end bg-[#26332c] px-6 pb-16 pt-32 text-white lg:px-10 lg:pb-20">
          <img src={activeService.heroImage} alt={tr(activeService.title, lang)} className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2822]/95 via-[#26332c]/65 to-[#26332c]/10" />
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#e6cbb4]"><span className="h-px w-10 bg-[#dc765d]" /> {tx.servicePage.service} {activeService.number}</p>
            <h1 className="max-w-2xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">{tr(activeService.title, lang)}</h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/75">{tr(activeService.longDescription, lang)}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">{tx.servicePage.eyebrow}</p>
              <h2 className="section-title mt-4">{tx.servicePage.title1}<br /><em>{tx.servicePage.title2}</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#5f685f]">{tx.servicePage.hint}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {activeService.treatments.map((treat) => (
              <article key={treat.name.en} className="group grid gap-0 overflow-hidden bg-white shadow-sm sm:grid-cols-[1fr_1.1fr]">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                  <img src={treat.image} alt={tr(treat.name, lang)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-full bg-[#dc765d] px-4 py-2 font-serif text-lg text-white">{treat.price}</span>
                </div>
                <div className="flex flex-col justify-center p-7">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a837a]">
                    <Clock3 size={14} className="text-[#dc765d]" /> {treat.duration}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl">{tr(treat.name, lang)}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#697169]">{tr(treat.description, lang)}</p>
                  <a href="#book" className="mt-5 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#3e5548] transition-colors hover:text-[#dc765d]">
                    {tx.servicePage.bookTreatment} <ArrowUpRight size={14} className="ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-2xl">
            <p className="eyebrow">{tx.servicePage.benefitsEyebrow}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {activeService.benefits.map((b) => (
                <li key={b.en} className="flex items-start gap-3 text-sm leading-6 text-[#405146]"><Check size={16} className="mt-0.5 shrink-0 text-[#dc765d]" /> {tr(b, lang)}</li>
              ))}
            </ul>
            <a href="#book" className="mt-8 flex w-fit items-center rounded-full bg-[#dc765d] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#e88c73]">{tx.servicePage.bookService} <ArrowUpRight className="ml-2" size={14} /></a>
          </div>
        </section>

        <section className="border-y border-[#d7d0c5] bg-[#e6cbb4] py-4">
          <div className="flex min-w-max animate-[marquee_26s_linear_infinite] items-center gap-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#314038]">
            {services.map((s) => (
              <button key={s.slug} onClick={() => goToService(s.slug)} className="flex items-center gap-3 transition-colors hover:text-[#dc765d]">{tr(s.shortTitle, lang)} <Sparkles size={14} /></button>
            ))}
          </div>
        </section>

        <section id="book" className="bg-[#26332c] px-6 py-24 text-white lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-28">
            <div>
              <p className="eyebrow text-[#e6cbb4]">{tx.booking.eyebrow}</p>
              <h2 className="section-title mt-4 text-white">{tx.booking.title1}<br /><em className="text-[#e6cbb4]">{tx.booking.title2}</em></h2>
              <p className="mt-7 max-w-sm text-sm leading-7 text-white/65">{tx.booking.description}</p>
              <div className="mt-10 space-y-4 text-sm text-white/75">
                <a href="tel:+5372041826" className="flex items-center gap-3 hover:text-[#e6cbb4]"><Phone size={16} className="text-[#dc765d]" /> +53 7 204 1826</a>
                <a href="mailto:hola@eljardindeleden.cu" className="flex items-center gap-3 hover:text-[#e6cbb4]"><Mail size={16} className="text-[#dc765d]" /> hola@eljardindeleden.cu</a>
              </div>
            </div>
            <div>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-5 sm:grid-cols-2">
                {submitted ? (
                  <div className="sm:col-span-2 border border-[#76877a] bg-[#334239] p-8"><Check className="mb-5 text-[#e6cbb4]" /><h3 className="font-serif text-3xl">{tx.booking.successTitle}</h3><p className="mt-3 text-sm text-white/65">{tx.booking.successMessage}</p></div>
                ) : (
                  <>
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{tx.booking.nameLabel}<input required type="text" placeholder={tx.booking.namePlaceholder} className="form-input" /></label>
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{tx.booking.contactLabel}<input required type="text" placeholder={tx.booking.contactPlaceholder} className="form-input" /></label>
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 sm:col-span-2">{tx.booking.messageLabel}<textarea required rows={3} placeholder={`${tx.booking.messageLabel}...`} className="form-input resize-none" /></label>
                    <button type="submit" className="mt-2 w-fit rounded-full bg-[#dc765d] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#e88c73]">{tx.booking.submit} <ArrowUpRight className="ml-2 inline" size={14} /></button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>

        <footer id="visit" className="bg-[#f7f3ec] px-6 py-12 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 border-b border-[#d7d0c5] pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2"><button onClick={goHome} className="font-serif text-3xl tracking-[-0.05em]">El Jardín <em className="font-light">del</em> Eden</button><p className="mt-4 max-w-xs text-sm leading-6 text-[#717871]">{tx.footer.tagline}</p></div>
            <div>
              <p className="footer-label">{tx.footer.findUs}</p>
              <p className="mt-4 flex items-start gap-2 whitespace-pre-line text-sm leading-6 text-[#556158]"><MapPin size={16} className="mt-1 shrink-0 text-[#dc765d]" />{tx.footer.address}</p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#c8c1b7] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#3e5548] transition hover:border-[#dc765d] hover:text-[#dc765d]"><MapPin size={14} /> {tx.footer.viewMaps}</a>
            </div>
            <div>
              <p className="footer-label">{tx.footer.comeBy}</p>
              <div className="mt-4 space-y-2 text-sm leading-6 text-[#556158]">
                <p className="flex gap-2"><Clock3 size={16} className="mt-1 shrink-0" />{tx.footer.hours}</p>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#dc765d]"><Instagram size={16} />@eljardindeleden</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#dc765d]"><Facebook size={16} />El Jardín del Eden</a>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-6 text-[10px] uppercase tracking-[0.17em] text-[#969c96] sm:flex-row"><span>{tx.footer.copyright}</span><span>{tx.footer.madeFor}</span></div>
        </footer>

        <a href="https://wa.me/5352041826" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#dc765d] text-white shadow-xl shadow-[#26332c]/20 transition-transform hover:-translate-y-1"><MessageCircle size={23} /></a>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#28322c]">
      <div className="bg-[#26332c] px-6 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e6cbb4]">{tx.banner}</div>

      <header className="absolute left-0 right-0 top-8 z-20 border-b border-white/20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button onClick={goHome} className="group flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6cbb4]/70 text-[#e6cbb4] transition-transform group-hover:rotate-12"><Sparkles size={17} strokeWidth={1.5} /></span><span className="font-serif text-2xl tracking-[-0.04em]">El Jardín <em className="font-light">del</em> Eden</span></button>
          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.19em] lg:flex"><a className="text-[#e6cbb4]" href="#top">{tx.nav.home}</a><a className="transition-colors hover:text-[#e6cbb4]" href="#services">{tx.nav.services}</a><a className="transition-colors hover:text-[#e6cbb4]" href="#story">{tx.nav.story}</a><a className="transition-colors hover:text-[#e6cbb4]" href="#visit">{tx.nav.visit}</a></nav>
          <div className="hidden items-center gap-4 lg:flex">
            <LangToggle lang={lang} setLang={setLang} dark />
            <a href="#book" className="rounded-full bg-[#dc765d] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white shadow-lg shadow-[#18251f]/20 transition-transform hover:-translate-y-0.5">{tx.nav.book}</a>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <LangToggle lang={lang} setLang={setLang} dark />
            <button aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 bg-[#26332c] px-6 pb-7 pt-2 text-sm uppercase tracking-widest lg:hidden"><a href="#top" onClick={closeMenu}>{tx.nav.home}</a><a href="#services" onClick={closeMenu}>{tx.nav.services}</a><a href="#story" onClick={closeMenu}>{tx.nav.story}</a><a href="#visit" onClick={closeMenu}>{tx.nav.visit}</a></nav>}
      </header>

      <main id="top">
        <section className="relative flex min-h-[720px] items-end bg-[#26332c] px-6 pb-16 pt-40 text-white lg:min-h-[810px] lg:px-10 lg:pb-24">
          <img src={carouselImages[0]} alt={lang === 'es' ? 'Interior del salón de belleza bañado por el sol' : 'Sunlit beauty salon interior'} className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2822]/95 via-[#26332c]/65 to-[#26332c]/10" />
          <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1fr_330px]">
            <div className="max-w-3xl">
              <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#e6cbb4]"><span className="h-px w-10 bg-[#dc765d]" /> {tx.hero.eyebrow}</p>
              <h1 className="max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] sm:text-8xl lg:text-[104px]">{tx.hero.title1}<br /><em className="font-light text-[#e6cbb4]">{tx.hero.title2}</em></h1>
              <p className="mt-8 max-w-md text-base leading-7 text-white/75">{tx.hero.description}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#book" className="rounded-full bg-[#dc765d] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.17em] text-white transition-all hover:bg-[#e88c73] hover:shadow-lg hover:shadow-[#dc765d]/20">{tx.hero.book} <ArrowUpRight className="ml-2 inline" size={15} /></a><a href="#services" className="px-4 py-4 text-[11px] font-bold uppercase tracking-[0.17em] text-white/80 transition-colors hover:text-[#e6cbb4]">{tx.hero.explore} <MoveRight className="ml-2 inline" size={15} /></a></div>
            </div>
            <div className="hidden border-l border-white/25 pl-8 lg:block"><p className="mb-8 whitespace-pre-line font-serif text-3xl leading-tight">{tx.hero.quote}</p><div className="flex items-center gap-3"><div className="flex text-[#e6cbb4]"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><span className="text-[10px] uppercase tracking-widest text-white/55">{tx.hero.quoteLabel}</span></div></div>
          </div>
          <div className="absolute bottom-7 right-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/55 lg:flex"><span className="h-px w-16 bg-white/30" /> {tx.hero.scroll}</div>
        </section>

        <section className="border-b border-[#d7d0c5] bg-[#e6cbb4] py-4"><div className="flex min-w-max animate-[marquee_26s_linear_infinite] items-center gap-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#314038]">{[...tx.marquee, ...tx.marquee].map((item, i) => (<span key={i} className="flex items-center gap-8">{item}<Sparkles size={14} /></span>))}</div></section>

        {/* Carousel */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">{tx.carousel.eyebrow}</p>
              <h2 className="section-title mt-4">{tx.carousel.title1}<br /><em>{tx.carousel.title2}</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#5f685f]">{tx.carousel.description}</p>
          </div>
          <Carousel lang={lang} />
        </section>

        {/* Services with flip cards */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">{tx.servicesSection.eyebrow}</p>
              <h2 className="section-title mt-4 max-w-xl">{tx.servicesSection.title1}<br /><em>{tx.servicesSection.title2}</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#5f685f]">{tx.servicesSection.hint}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} lang={lang} onClick={() => goToService(s.slug)} />
            ))}
          </div>
        </section>

        <section id="story" className="bg-[#dfe5dc] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-28">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -bottom-6 -right-6 h-2/3 w-2/3 border border-[#9eaa9d]" />
              <img src={gallery[3]} alt={lang === 'es' ? 'Mujer relajándose en el salón' : 'Woman relaxing in the salon'} className="relative aspect-[0.8] w-full object-cover" />
              <div className="absolute -bottom-5 -left-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#dc765d] text-center text-white"><span className="font-serif text-3xl">12</span><span className="whitespace-pre-line text-[9px] uppercase tracking-widest">{tx.story.badge}</span></div>
            </div>
            <div>
              <p className="eyebrow">{tx.story.eyebrow}</p>
              <h2 className="section-title mt-4 max-w-xl">{tx.story.title1}<br /><em>{tx.story.title2}</em></h2>
              <p className="mt-8 max-w-lg text-base leading-8 text-[#59645b]">{tx.story.body}</p>
              <div className="mt-9 grid max-w-lg grid-cols-2 gap-y-6 border-t border-[#bdc9bd] pt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#405146]">{tx.story.values.map((v) => (<span key={v}><Check size={14} className="mr-2 inline text-[#dc765d]" />{v}</span>))}</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#f7f3ec] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="eyebrow">{tx.testimonials.eyebrow}</p>
              <h2 className="section-title mt-4">{lang === 'es' ? 'Lo que dicen' : 'What they'}<br /><em>{lang === 'es' ? 'nuestras clientas.' : 'our guests say.'}</em></h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tx.testimonials.items.map((item, i) => (
                <figure key={i} className="flex flex-col justify-between border border-[#d7d0c5] bg-white p-8">
                  <div>
                    <div className="flex gap-1 text-[#dc765d]"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div>
                    <blockquote className="mt-5 font-serif text-xl leading-snug tracking-[-0.02em] text-[#334239]">"{item.quote}"</blockquote>
                  </div>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#26332c] font-serif text-lg text-[#e6cbb4]">{item.author.charAt(0)}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#334239]">{item.author}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7a837a]">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Map + Schedule */}
        <section id="visit" className="bg-[#26332c] px-6 py-24 text-white lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <p className="eyebrow text-[#e6cbb4]">{tx.map.title}</p>
              <h2 className="section-title mt-4 text-white">{lang === 'es' ? 'Ven a' : 'Come'}<br /><em className="text-[#e6cbb4]">{lang === 'es' ? 'vernos.' : 'see us.'}</em></h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/65">{tx.map.subtitle}</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="overflow-hidden rounded-sm border border-white/15">
                <iframe
                  title="Google Maps — El Jardín del Eden"
                  src={mapsEmbed}
                  className="h-[360px] w-full lg:h-[440px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-between rounded-sm border border-white/15 bg-[#334239] p-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6cbb4]">{tx.schedule.title}</p>
                  <ul className="mt-5 space-y-3">
                    {tx.schedule.days.map((d) => (
                      <li key={d.day} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                        <span className="text-white/75">{d.day}</span>
                        <span className={d.hours === (lang === 'es' ? 'Cerrado' : 'Closed') ? 'font-semibold text-[#dc765d]' : 'font-medium text-white/90'}>{d.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#dc765d] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#e88c73]"><MapPin size={14} /> {tx.footer.viewMaps}</a>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="bg-[#f7f3ec] px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-28">
            <div>
              <p className="eyebrow">{tx.booking.eyebrow}</p>
              <h2 className="section-title mt-4">{tx.booking.title1}<br /><em>{tx.booking.title2}</em></h2>
              <p className="mt-7 max-w-sm text-sm leading-7 text-[#5f685f]">{tx.booking.description}</p>
              <div className="mt-10 space-y-4 text-sm text-[#556158]">
                <a href="tel:+5372041826" className="flex items-center gap-3 hover:text-[#dc765d]"><Phone size={16} className="text-[#dc765d]" /> +53 7 204 1826</a>
                <a href="mailto:hola@eljardindeleden.cu" className="flex items-center gap-3 hover:text-[#dc765d]"><Mail size={16} className="text-[#dc765d]" /> hola@eljardindeleden.cu</a>
              </div>
            </div>
            <div>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-5 sm:grid-cols-2">
                {submitted ? (
                  <div className="sm:col-span-2 border border-[#9eaa9d] bg-white p-8"><Check className="mb-5 text-[#dc765d]" /><h3 className="font-serif text-3xl text-[#334239]">{tx.booking.successTitle}</h3><p className="mt-3 text-sm text-[#5f685f]">{tx.booking.successMessage}</p></div>
                ) : (
                  <>
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#717871]">{tx.booking.nameLabel}<input required type="text" placeholder={tx.booking.namePlaceholder} className="form-input-light" /></label>
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#717871]">{tx.booking.contactLabel}<input required type="text" placeholder={tx.booking.contactPlaceholder} className="form-input-light" /></label>
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#717871] sm:col-span-2">{tx.booking.messageLabel}<textarea required rows={3} placeholder={tx.booking.messagePlaceholderHome} className="form-input-light resize-none" /></label>
                    <button type="submit" className="mt-2 w-fit rounded-full bg-[#dc765d] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#e88c73]">{tx.booking.submit} <ArrowUpRight className="ml-2 inline" size={14} /></button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#26332c] px-6 py-12 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2"><button onClick={goHome} className="font-serif text-3xl tracking-[-0.05em] text-white">El Jardín <em className="font-light">del</em> Eden</button><p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{tx.footer.tagline}</p></div>
          <div>
            <p className="footer-label">{tx.footer.findUs}</p>
            <p className="mt-4 flex items-start gap-2 whitespace-pre-line text-sm leading-6 text-white/65"><MapPin size={16} className="mt-1 shrink-0 text-[#dc765d]" />{tx.footer.address}</p>
            <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.17em] text-white/80 transition hover:border-[#dc765d] hover:text-[#dc765d]"><MapPin size={14} /> {tx.footer.viewMaps}</a>
          </div>
          <div>
            <p className="footer-label">{tx.footer.comeBy}</p>
            <div className="mt-4 space-y-2 text-sm leading-6 text-white/65">
              <p className="flex gap-2"><Clock3 size={16} className="mt-1 shrink-0" />{tx.footer.hours}</p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#dc765d]"><Instagram size={16} />@eljardindeleden</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#dc765d]"><Facebook size={16} />El Jardín del Eden</a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-6 text-[10px] uppercase tracking-[0.17em] text-white/40 sm:flex-row"><span>{tx.footer.copyright}</span><span>{tx.footer.madeFor}</span></div>
      </footer>

      <a href="https://wa.me/5352041826" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#dc765d] text-white shadow-xl shadow-[#26332c]/20 transition-transform hover:-translate-y-1"><MessageCircle size={23} /></a>
    </div>
  );
}

export default App;
