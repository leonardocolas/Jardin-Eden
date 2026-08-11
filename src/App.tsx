import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Clock3,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/6899538/pexels-photo-6899538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  manicure: 'https://images.pexels.com/photos/7990108/pexels-photo-7990108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  massage: 'https://images.pexels.com/photos/37229287/pexels-photo-37229287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  hair: 'https://images.pexels.com/photos/8834042/pexels-photo-8834042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  studio: 'https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  care: 'https://images.pexels.com/photos/7755500/pexels-photo-7755500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const services = [
  { number: '01', title: 'Hair atelier', text: 'Cuts, color, and styling that move with your life.', image: images.hair, icon: Scissors },
  { number: '02', title: 'Hands & feet', text: 'A thoughtful manicure or pedicure, finished to perfection.', image: images.manicure, icon: Sparkles },
  { number: '03', title: 'Slow spa', text: 'Facials and rituals for skin that feels as good as it looks.', image: images.studio, icon: Heart },
  { number: '04', title: 'Massage room', text: 'The quiet reset your body has been asking for.', image: images.massage, icon: MoveRight },
];

const gallery = [images.manicure, images.hair, images.studio, images.care];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#28322c]">
      <div className="bg-[#26332c] px-6 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e6cbb4]">
        Your hour of calm, now in Playa · Open Monday to Saturday
      </div>

      <header className="absolute left-0 right-0 top-8 z-20 border-b border-white/20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6cbb4]/70 text-[#e6cbb4] transition-transform group-hover:rotate-12"><Sparkles size={17} strokeWidth={1.5} /></span>
            <span className="font-serif text-2xl tracking-[-0.04em]">El Jardín <em className="font-light">del</em> Eden</span>
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.19em] lg:flex">
            <a className="text-[#e6cbb4]" href="#top">Home</a>
            <a className="transition-colors hover:text-[#e6cbb4]" href="#services">Services</a>
            <a className="transition-colors hover:text-[#e6cbb4]" href="#story">Our story</a>
            <a className="transition-colors hover:text-[#e6cbb4]" href="#visit">Visit us</a>
          </nav>
          <a href="#book" className="hidden rounded-full bg-[#dc765d] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white shadow-lg shadow-[#18251f]/20 transition-transform hover:-translate-y-0.5 lg:block">Book your moment</a>
          <button aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 bg-[#26332c] px-6 pb-7 pt-2 text-sm uppercase tracking-widest lg:hidden"><a href="#top" onClick={closeMenu}>Home</a><a href="#services" onClick={closeMenu}>Services</a><a href="#story" onClick={closeMenu}>Our story</a><a href="#visit" onClick={closeMenu}>Visit us</a></nav>}
      </header>

      <main id="top">
        <section className="relative flex min-h-[720px] items-end bg-[#26332c] px-6 pb-16 pt-40 text-white lg:min-h-[810px] lg:px-10 lg:pb-24">
          <img src={images.hero} alt="Sunlit beauty salon interior" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2822]/95 via-[#26332c]/65 to-[#26332c]/10" />
          <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1fr_330px]">
            <div className="max-w-3xl">
              <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#e6cbb4]"><span className="h-px w-10 bg-[#dc765d]" /> Beauty, but more personal</p>
              <h1 className="max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] sm:text-8xl lg:text-[104px]">Come back to<br /><em className="font-light text-[#e6cbb4]">yourself.</em></h1>
              <p className="mt-8 max-w-md text-base leading-7 text-white/75">A women’s beauty garden in Playa for the days you need to feel like yourself again — only softer, brighter, and unhurried.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#book" className="rounded-full bg-[#dc765d] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.17em] text-white transition-all hover:bg-[#e88c73] hover:shadow-lg hover:shadow-[#dc765d]/20">Book your moment <ArrowUpRight className="ml-2 inline" size={15} /></a><a href="#services" className="px-4 py-4 text-[11px] font-bold uppercase tracking-[0.17em] text-white/80 transition-colors hover:text-[#e6cbb4]">Explore services <MoveRight className="ml-2 inline" size={15} /></a></div>
            </div>
            <div className="hidden border-l border-white/25 pl-8 lg:block"><p className="mb-8 font-serif text-3xl leading-tight">“The nicest hour<br />of my week.”</p><div className="flex items-center gap-3"><div className="flex text-[#e6cbb4]"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><span className="text-[10px] uppercase tracking-widest text-white/55">Our guests say</span></div></div>
          </div>
          <div className="absolute bottom-7 right-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/55 lg:flex"><span className="h-px w-16 bg-white/30" /> Scroll to explore</div>
        </section>

        <section className="border-b border-[#d7d0c5] bg-[#e6cbb4] py-4"><div className="flex min-w-max animate-[marquee_26s_linear_infinite] items-center gap-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#314038]"><span>Hair atelier</span><Sparkles size={14} /><span>Manos & pies</span><Sparkles size={14} /><span>Slow spa</span><Sparkles size={14} /><span>Massage room</span><Sparkles size={14} /><span>Playa, La Habana</span><Sparkles size={14} /><span>Hair atelier</span><Sparkles size={14} /><span>Manos & pies</span><Sparkles size={14} /><span>Slow spa</span><Sparkles size={14} /></div></section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">The Eden edit</p><h2 className="section-title mt-4 max-w-xl">Small rituals.<br /><em>Big difference.</em></h2></div><p className="max-w-xs text-sm leading-6 text-[#5f685f]">No rushing, no one-size-fits-all packages. Just skilled hands, considered products, and space to breathe.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(({ number, title, text, image, icon: Icon }) => <article key={title} className="group"><div className="relative mb-5 aspect-[0.87] overflow-hidden bg-[#d9d1c6]"><img src={image} alt={title} className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3ec]/90 text-xs font-serif">{number}</span><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#dc765d] text-white"><Icon size={17} strokeWidth={1.7} /></span></div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#697169]">{text}</p><a href="#book" className="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#3e5548] transition-colors hover:text-[#dc765d]">View treatment <ArrowUpRight size={14} className="ml-2" /></a></article>)}</div></section>

        <section id="story" className="bg-[#dfe5dc] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-28"><div className="relative mx-auto max-w-md"><div className="absolute -bottom-6 -right-6 h-2/3 w-2/3 border border-[#9eaa9d]" /><img src={images.care} alt="Woman relaxing in the salon" className="relative aspect-[0.8] w-full object-cover" /><div className="absolute -bottom-5 -left-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#dc765d] text-center text-white"><span className="font-serif text-3xl">12</span><span className="text-[9px] uppercase tracking-widest">years of<br />care</span></div></div><div><p className="eyebrow">Our philosophy</p><h2 className="section-title mt-4 max-w-xl">Beauty is not<br /><em>another task.</em></h2><p className="mt-8 max-w-lg text-base leading-8 text-[#59645b]">El Jardín del Eden began with one simple belief: looking after yourself should never feel like a chore. So we created a place that feels like a pause — full of natural light, familiar faces, and beauty rituals made around you.</p><div className="mt-9 grid max-w-lg grid-cols-2 gap-y-6 border-t border-[#bdc9bd] pt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#405146]"><span><Check size={14} className="mr-2 inline text-[#dc765d]" />Personalised care</span><span><Check size={14} className="mr-2 inline text-[#dc765d]" />Kind expertise</span><span><Check size={14} className="mr-2 inline text-[#dc765d]" />Beautiful products</span><span><Check size={14} className="mr-2 inline text-[#dc765d]" />No rush, ever</span></div></div></div></section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-center"><div><p className="eyebrow">A little love note</p><div className="mt-6 flex gap-1 text-[#dc765d]"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div><blockquote className="mt-7 max-w-md font-serif text-4xl leading-tight tracking-[-0.04em] text-[#334239]">“I walked in tired and left feeling like I had a whole new week ahead of me.”</blockquote><p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a837a]">— Mariana R. · Regular Eden guest</p><div className="mt-12 flex gap-2"><button aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c8c1b7] transition hover:bg-[#e6cbb4]"><MoveRight className="rotate-180" size={16} /></button><button aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c8c1b7] transition hover:bg-[#e6cbb4]"><MoveRight size={16} /></button></div></div><div className="grid grid-cols-2 gap-4"><img src={gallery[0]} alt="Manicure detail" className="mt-10 aspect-[0.85] w-full object-cover" /><img src={gallery[1]} alt="Hair care detail" className="aspect-[0.85] w-full object-cover" /><img src={gallery[2]} alt="Salon interior" className="aspect-[0.85] w-full object-cover" /><img src={gallery[3]} alt="Relaxing salon moment" className="mt-10 aspect-[0.85] w-full object-cover" /></div></div></section>

        <section id="book" className="bg-[#26332c] px-6 py-24 text-white lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-28"><div><p className="eyebrow text-[#e6cbb4]">Your next good decision</p><h2 className="section-title mt-4 text-white">Make some<br /><em className="text-[#e6cbb4]">room for you.</em></h2><p className="mt-7 max-w-sm text-sm leading-7 text-white/65">Tell us what you have in mind and we’ll find the right time, treatment, and person for you.</p><div className="mt-10 space-y-4 text-sm text-white/75"><a href="tel:+5372041826" className="flex items-center gap-3 hover:text-[#e6cbb4]"><Phone size={16} className="text-[#dc765d]" /> +53 7 204 1826</a><a href="mailto:hola@eljardindeleden.cu" className="flex items-center gap-3 hover:text-[#e6cbb4]"><Mail size={16} className="text-[#dc765d]" /> hola@eljardindeleden.cu</a></div></div><div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="grid gap-5 sm:grid-cols-2">{submitted ? <div className="sm:col-span-2 border border-[#76877a] bg-[#334239] p-8"><Check className="mb-5 text-[#e6cbb4]" /><h3 className="font-serif text-3xl">We’ll be in touch.</h3><p className="mt-3 text-sm text-white/65">Thank you for reaching out. We’ll reply shortly to arrange your moment.</p></div> : <><label className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Your name<input required type="text" placeholder="How should we call you?" className="form-input" /></label><label className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Phone or email<input required type="text" placeholder="Your best contact" className="form-input" /></label><label className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 sm:col-span-2">What are you dreaming of?<textarea required rows={3} placeholder="Hair, hands, a massage..." className="form-input resize-none" /></label><button type="submit" className="mt-2 w-fit rounded-full bg-[#dc765d] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#e88c73]">Send your request <ArrowUpRight className="ml-2 inline" size={14} /></button></>}</form></div></div></section>
      </main>

      <footer id="visit" className="bg-[#f7f3ec] px-6 py-12 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 border-b border-[#d7d0c5] pb-12 md:grid-cols-2 lg:grid-cols-4"><div className="md:col-span-2"><a href="#top" className="font-serif text-3xl tracking-[-0.05em]">El Jardín <em className="font-light">del</em> Eden</a><p className="mt-4 max-w-xs text-sm leading-6 text-[#717871]">A softer place to land in the middle of Havana.</p></div><div><p className="footer-label">Find us</p><a href="https://maps.google.com/?q=Playa,Havana,Cuba" target="_blank" rel="noreferrer" className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#556158] hover:text-[#dc765d]"><MapPin size={16} className="mt-1 shrink-0" />Calle 30, entre 5ta y 7ma<br />Playa, La Habana</a></div><div><p className="footer-label">Come by</p><div className="mt-4 space-y-2 text-sm leading-6 text-[#556158]"><p className="flex gap-2"><Clock3 size={16} className="mt-1 shrink-0" />Mon–Sat · 9am–7pm</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#dc765d]"><Instagram size={16} />@eljardindeleden</a><a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#dc765d]"><Facebook size={16} />El Jardín del Eden</a></div></div></div><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-6 text-[10px] uppercase tracking-[0.17em] text-[#969c96] sm:flex-row"><span>© 2024 El Jardín del Eden</span><span>Made for your well-being</span></div></footer>
      <a href="https://wa.me/5352041826" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#dc765d] text-white shadow-xl shadow-[#26332c]/20 transition-transform hover:-translate-y-1"><MessageCircle size={23} /></a>
    </div>
  );
}

export default App;
