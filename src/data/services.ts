import { Heart, MoveRight, Scissors, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  heroImage: string;
  gallery: string[];
  treatments: Treatment[];
  benefits: string[];
  icon: LucideIcon;
}

export const services: ServiceData[] = [
  {
    slug: 'hair',
    number: '01',
    title: 'Hair atelier',
    shortTitle: 'Hair',
    tagline: 'Cuts, color, and styling that move with your life.',
    shortDescription: 'From a fresh cut to a sunlit balayage — hair that moves with your life, shaped by stylists who listen first.',
    description: 'Cuts, color, and styling that move with your life.',
    longDescription:
      'Our hair atelier is led by stylists who listen first and cut second. Whether you are after a fresh cut, a sun-kissed balayage, or a deep treatment to bring tired hair back to life, every session starts with a conversation about you — your hair history, your routine, the look you are really after.',
    heroImage:
      'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/3993140/pexels-photo-3993140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4981460/pexels-photo-4981460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20263237/pexels-photo-20263237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    treatments: [
      { name: 'Signature cut & blow-dry', description: 'A personalised cut shaped to your face and lifestyle, finished with a smooth blow-dry.', duration: '60 min', price: '$25', image: 'https://images.pexels.com/photos/10028673/pexels-photo-10028673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Balayage & creative color', description: 'Hand-painted highlights for a natural, sunlit effect that grows out beautifully.', duration: '150 min', price: '$65', image: 'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Deep nourishing treatment', description: 'A restorative mask and scalp massage to revive dry or chemically treated hair.', duration: '45 min', price: '$20', image: 'https://images.pexels.com/photos/8834067/pexels-photo-8834067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Bridal & event styling', description: 'Updos and soft waves that last from the first photo to the last dance.', duration: '90 min', price: '$40', image: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    benefits: [
      'A consultation before every color service',
      'Ammonia-free, hair-friendly color lines',
      'Styling tips you can recreate at home',
    ],
    icon: Scissors,
  },
  {
    slug: 'hands-feet',
    number: '02',
    title: 'Hands & feet',
    shortTitle: 'Manos & pies',
    tagline: 'A thoughtful manicure or pedicure, finished to perfection.',
    shortDescription: 'Meticulous, gentle nail care — from shaping and cuticle work to long-lasting polish and nourishing massages.',
    description: 'A thoughtful manicure or pedicure, finished to perfection.',
    longDescription:
      'Your hands and feet do so much for you. We return the favor with meticulous, gentle care — from shaping and cuticle work to long-lasting polish and nourishing massages. Every tool is sanitised, every surface fresh, so you can relax completely.',
    heroImage:
      'https://images.pexels.com/photos/7990108/pexels-photo-7990108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/5238012/pexels-photo-5238012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19988192/pexels-photo-19988192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7066298/pexels-photo-7066298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    treatments: [
      { name: 'Classic manicure', description: 'Shaping, cuticle care, hand massage, and polish in the shade of your choice.', duration: '45 min', price: '$15', image: 'https://images.pexels.com/photos/14267567/pexels-photo-14267567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Gel manicure', description: 'Long-lasting, high-shine color that stays flawless for up to three weeks.', duration: '60 min', price: '$25', image: 'https://images.pexels.com/photos/9099607/pexels-photo-9099607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Spa pedicure', description: 'A warm soak, exfoliation, foot massage, and polish — the full reset.', duration: '60 min', price: '$20', image: 'https://images.pexels.com/photos/19695948/pexels-photo-19695948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Nail art & design', description: 'From minimalist lines to bold statements, painted by hand for you.', duration: '30 min', price: '$10', image: 'https://images.pexels.com/photos/7066258/pexels-photo-7066258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    benefits: [
      'Medical-grade sterilisation for every guest',
      'Breathable, 7-free polishes',
      'A relaxing hand or foot massage in every service',
    ],
    icon: Sparkles,
  },
  {
    slug: 'spa',
    number: '03',
    title: 'Slow spa',
    shortTitle: 'Spa',
    tagline: 'Facials and rituals for skin that feels as good as it looks.',
    shortDescription: 'An invitation to step off the clock — botanically driven facials and rituals that cleanse, nourish, and restore.',
    description: 'Facials and rituals for skin that feels as good as it looks.',
    longDescription:
      'Our slow spa is an invitation to step off the clock. We use gentle, botanically driven products and unhurried techniques to cleanse, nourish, and restore your skin — leaving you glowing, grounded, and lighter than when you walked in.',
    heroImage:
      'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/3764552/pexels-photo-3764552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12932911/pexels-photo-12932911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8406612/pexels-photo-8406612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    treatments: [
      { name: 'Garden glow facial', description: 'A deep cleanse, exfoliation, and mask tailored to your skin on the day.', duration: '60 min', price: '$35', image: 'https://images.pexels.com/photos/7755547/pexels-photo-7755547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Hydrating ritual', description: 'A moisture-rich facial with facial massage to plump and soothe dry skin.', duration: '75 min', price: '$45', image: 'https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Back treatment', description: 'A deep-cleansing back facial to clear and soften hard-to-reach skin.', duration: '60 min', price: '$30', image: 'https://images.pexels.com/photos/27860842/pexels-photo-27860842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Eden full ritual', description: 'Our signature two-hour journey: facial, body scrub, and full nourishment.', duration: '120 min', price: '$70', image: 'https://images.pexels.com/photos/3881089/pexels-photo-3881089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    benefits: [
      'Products free from harsh chemicals',
      'Every facial is customised on the day',
      'Quiet room, warm towels, zero rush',
    ],
    icon: Heart,
  },
  {
    slug: 'massage',
    number: '04',
    title: 'Massage room',
    shortTitle: 'Massage',
    tagline: 'The quiet reset your body has been asking for.',
    shortDescription: 'Tension has a way of settling in without asking. Our massage room is where you let it go — soft lighting, warm oils, expert hands.',
    description: 'The quiet reset your body has been asking for.',
    longDescription:
      'Tension has a way of settling in without asking. Our massage room is where you let it go. With soft lighting, warm oils, and hands that know where to work, each session is built around what your body needs today — not a menu of fixed routines.',
    heroImage:
      'https://images.pexels.com/photos/6628601/pexels-photo-6628601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/6560303/pexels-photo-6560303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/37719545/pexels-photo-37719545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    treatments: [
      { name: 'Relaxation massage', description: 'A full-body Swedish massage to calm the nervous system and release surface tension.', duration: '60 min', price: '$30', image: 'https://images.pexels.com/photos/6629608/pexels-photo-6629608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Deep tissue massage', description: 'Targeted, deeper pressure for stubborn knots and tight muscles.', duration: '60 min', price: '$35', image: 'https://images.pexels.com/photos/5888064/pexels-photo-5888064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Hot stone therapy', description: 'Warm, smooth stones melt tension before your therapist even begins.', duration: '75 min', price: '$45', image: 'https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Foot reflexology', description: 'A focused foot treatment that relaxes the whole body through key pressure points.', duration: '45 min', price: '$20', image: 'https://images.pexels.com/photos/5793976/pexels-photo-5793976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    benefits: [
      'Pressure always adjusted to your comfort',
      'Warm, aromatic oils included',
      'A few quiet minutes before and after',
    ],
    icon: MoveRight,
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);

export const carouselImages = [
  'https://images.pexels.com/photos/6899538/pexels-photo-6899538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7990108/pexels-photo-7990108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37229287/pexels-photo-37229287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7755500/pexels-photo-7755500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
