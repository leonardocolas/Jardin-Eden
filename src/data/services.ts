import { Heart, MoveRight, Scissors, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Lang } from './translations';

export interface Treatment {
  name: { en: string; es: string };
  description: { en: string; es: string };
  duration: string;
  price: string;
  image: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  title: { en: string; es: string };
  shortTitle: { en: string; es: string };
  tagline: { en: string; es: string };
  shortDescription: { en: string; es: string };
  longDescription: { en: string; es: string };
  heroImage: string;
  treatments: Treatment[];
  benefits: { en: string; es: string }[];
  icon: LucideIcon;
}

export const services: ServiceData[] = [
  {
    slug: 'hair',
    number: '01',
    title: { en: 'Hair atelier', es: 'Atelier de cabello' },
    shortTitle: { en: 'Hair', es: 'Cabello' },
    tagline: {
      en: 'Cuts, color, and styling that move with your life.',
      es: 'Cortes, color y styling que se mueven con tu vida.',
    },
    shortDescription: {
      en: 'From a fresh cut to a sunlit balayage — hair that moves with your life, shaped by stylists who listen first.',
      es: 'Desde un corte fresco hasta un balayage soleado — cabello que se mueve con tu vida, moldeado por estilistas que primero escuchan.',
    },
    longDescription: {
      en: 'Our hair atelier is led by stylists who listen first and cut second. Whether you are after a fresh cut, a sun-kissed balayage, or a deep treatment to bring tired hair back to life, every session starts with a conversation about you — your hair history, your routine, the look you are really after.',
      es: 'Nuestro atelier de cabello está liderado por estilistas que primero escuchan y luego cortan. Ya sea que busques un corte fresco, un balayage soleado o un tratamiento profundo para revivir el cabello cansado, cada sesión comienza con una conversación sobre ti — tu historia capilar, tu rutina, el look que realmente deseas.',
    },
    heroImage:
      'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    treatments: [
      {
        name: { en: 'Signature cut & blow-dry', es: 'Corte y secado personalizado' },
        description: {
          en: 'A personalised cut shaped to your face and lifestyle, finished with a smooth blow-dry.',
          es: 'Un corte personalizado según tu rostro y estilo de vida, terminado con un secado suave.',
        },
        duration: '60 min',
        price: '$25',
        image: 'https://images.pexels.com/photos/10028673/pexels-photo-10028673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Balayage & creative color', es: 'Balayage y color creativo' },
        description: {
          en: 'Hand-painted highlights for a natural, sunlit effect that grows out beautifully.',
          es: 'Reflejos pintados a mano para un efecto soleado y natural que crece hermosamente.',
        },
        duration: '150 min',
        price: '$65',
        image: 'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Deep nourishing treatment', es: 'Tratamiento nutritivo profundo' },
        description: {
          en: 'A restorative mask and scalp massage to revive dry or chemically treated hair.',
          es: 'Una mascarilla restauradora y masaje de cuero cabelludo para revivir cabello seco o tratado químicamente.',
        },
        duration: '45 min',
        price: '$20',
        image: 'https://images.pexels.com/photos/8834067/pexels-photo-8834067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Bridal & event styling', es: 'Peinado para bodas y eventos' },
        description: {
          en: 'Updos and soft waves that last from the first photo to the last dance.',
          es: 'Recogidos y ondas suaves que duran desde la primera foto hasta el último baile.',
        },
        duration: '90 min',
        price: '$40',
        image: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
    benefits: [
      {
        en: 'A consultation before every color service',
        es: 'Una consulta antes de cada servicio de color',
      },
      {
        en: 'Ammonia-free, hair-friendly color lines',
        es: 'Líneas de color sin amoníaco, amigables con tu cabello',
      },
      {
        en: 'Styling tips you can recreate at home',
        es: 'Tips de styling que puedes recrear en casa',
      },
    ],
    icon: Scissors,
  },
  {
    slug: 'hands-feet',
    number: '02',
    title: { en: 'Hands & feet', es: 'Manos y pies' },
    shortTitle: { en: 'Manos & pies', es: 'Manos y pies' },
    tagline: {
      en: 'A thoughtful manicure or pedicure, finished to perfection.',
      es: 'Una manicura o pedicura cuidada, terminada a la perfección.',
    },
    shortDescription: {
      en: 'Meticulous, gentle nail care — from shaping and cuticle work to long-lasting polish and nourishing massages.',
      es: 'Cuidado de uñas meticuloso y gentil — desde el moldeado y cutículas hasta un esmalte duradero y masajes nutritivos.',
    },
    longDescription: {
      en: 'Your hands and feet do so much for you. We return the favor with meticulous, gentle care — from shaping and cuticle work to long-lasting polish and nourishing massages. Every tool is sanitised, every surface fresh, so you can relax completely.',
      es: 'Tus manos y pies hacen mucho por ti. Te lo devolvemos con cuidado meticuloso y gentil — desde el moldeado y cutículas hasta un esmalte duradero y masajes nutritivos. Cada herramienta está esterilizada, cada superficie fresca, para que te relajes completamente.',
    },
    heroImage:
      'https://images.pexels.com/photos/7990108/pexels-photo-7990108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    treatments: [
      {
        name: { en: 'Classic manicure', es: 'Manicura clásica' },
        description: {
          en: 'Shaping, cuticle care, hand massage, and polish in the shade of your choice.',
          es: 'Moldeado, cuidado de cutículas, masaje de manos y esmalte en el tono que elijas.',
        },
        duration: '45 min',
        price: '$15',
        image: 'https://images.pexels.com/photos/14267567/pexels-photo-14267567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Gel manicure', es: 'Manicura en gel' },
        description: {
          en: 'Long-lasting, high-shine color that stays flawless for up to three weeks.',
          es: 'Color de alto brillo y larga duración que se mantiene impecable hasta tres semanas.',
        },
        duration: '60 min',
        price: '$25',
        image: 'https://images.pexels.com/photos/9099607/pexels-photo-9099607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Spa pedicure', es: 'Pedicura spa' },
        description: {
          en: 'A warm soak, exfoliation, foot massage, and polish — the full reset.',
          es: 'Remojo tibio, exfoliación, masaje de pies y esmalte — el reset completo.',
        },
        duration: '60 min',
        price: '$20',
        image: 'https://images.pexels.com/photos/19695948/pexels-photo-19695948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Nail art & design', es: 'Arte y diseño de uñas' },
        description: {
          en: 'From minimalist lines to bold statements, painted by hand for you.',
          es: 'Desde líneas minimalistas hasta declaraciones audaces, pintadas a mano para ti.',
        },
        duration: '30 min',
        price: '$10',
        image: 'https://images.pexels.com/photos/7066258/pexels-photo-7066258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
    benefits: [
      {
        en: 'Medical-grade sterilisation for every guest',
        es: 'Esterilización de grado médico para cada clienta',
      },
      {
        en: 'Breathable, 7-free polishes',
        es: 'Esmaltes transpirables, libres de 7 tóxicos',
      },
      {
        en: 'A relaxing hand or foot massage in every service',
        es: 'Un relajante masaje de manos o pies en cada servicio',
      },
    ],
    icon: Sparkles,
  },
  {
    slug: 'spa',
    number: '03',
    title: { en: 'Slow spa', es: 'Slow spa' },
    shortTitle: { en: 'Spa', es: 'Spa' },
    tagline: {
      en: 'Facials and rituals for skin that feels as good as it looks.',
      es: 'Faciales y rituales para una piel que se siente tan bien como se ve.',
    },
    shortDescription: {
      en: 'An invitation to step off the clock — botanically driven facials and rituals that cleanse, nourish, and restore.',
      es: 'Una invitación a salir del reloj — faciales y rituales botánicos que limpian, nutren y restauran.',
    },
    longDescription: {
      en: 'Our slow spa is an invitation to step off the clock. We use gentle, botanically driven products and unhurried techniques to cleanse, nourish, and restore your skin — leaving you glowing, grounded, and lighter than when you walked in.',
      es: 'Nuestro slow spa es una invitación a salir del reloj. Usamos productos gentiles y botánicos con técnicas sin prisa para limpiar, nutrir y restaurar tu piel — dejándote radiante, centrada y más ligera que cuando entraste.',
    },
    heroImage:
      'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    treatments: [
      {
        name: { en: 'Garden glow facial', es: 'Facial brillo del jardín' },
        description: {
          en: 'A deep cleanse, exfoliation, and mask tailored to your skin on the day.',
          es: 'Una limpieza profunda, exfoliación y mascarilla adaptada a tu piel del día.',
        },
        duration: '60 min',
        price: '$35',
        image: 'https://images.pexels.com/photos/7755547/pexels-photo-7755547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Hydrating ritual', es: 'Ritual de hidratación' },
        description: {
          en: 'A moisture-rich facial with facial massage to plump and soothe dry skin.',
          es: 'Un facial rico en humedad con masaje facial para rellenar y calmar la piel seca.',
        },
        duration: '75 min',
        price: '$45',
        image: 'https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Back treatment', es: 'Tratamiento de espalda' },
        description: {
          en: 'A deep-cleansing back facial to clear and soften hard-to-reach skin.',
          es: 'Un facial de espalda de limpieza profunda para aclarar y suavizar la piel difícil de alcanzar.',
        },
        duration: '60 min',
        price: '$30',
        image: 'https://images.pexels.com/photos/27860842/pexels-photo-27860842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Eden full ritual', es: 'Ritual completo Eden' },
        description: {
          en: 'Our signature two-hour journey: facial, body scrub, and full nourishment.',
          es: 'Nuestro viaje insignia de dos horas: facial, exfoliación corporal y nutrición completa.',
        },
        duration: '120 min',
        price: '$70',
        image: 'https://images.pexels.com/photos/3881089/pexels-photo-3881089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
    benefits: [
      {
        en: 'Products free from harsh chemicals',
        es: 'Productos libres de químicos agresivos',
      },
      {
        en: 'Every facial is customised on the day',
        es: 'Cada facial se personaliza en el día',
      },
      {
        en: 'Quiet room, warm towels, zero rush',
        es: 'Sala tranquila, toallas tibias, sin prisa',
      },
    ],
    icon: Heart,
  },
  {
    slug: 'massage',
    number: '04',
    title: { en: 'Massage room', es: 'Sala de masaje' },
    shortTitle: { en: 'Massage', es: 'Masaje' },
    tagline: {
      en: 'The quiet reset your body has been asking for.',
      es: 'El reset tranquilo que tu cuerpo ha estado pidiendo.',
    },
    shortDescription: {
      en: 'Tension has a way of settling in without asking. Our massage room is where you let it go — soft lighting, warm oils, expert hands.',
      es: 'La tensión tiene forma de instalarse sin pedir permiso. Nuestra sala de masaje es donde la dejas ir — luz suave, aceites tibios, manos expertas.',
    },
    longDescription: {
      en: 'Tension has a way of settling in without asking. Our massage room is where you let it go. With soft lighting, warm oils, and hands that know where to work, each session is built around what your body needs today — not a menu of fixed routines.',
      es: 'La tensión tiene forma de instalarse sin pedir permiso. Nuestra sala de masaje es donde la dejas ir. Con luz suave, aceites tibios y manos que saben dónde trabajar, cada sesión se construye alrededor de lo que tu cuerpo necesita hoy — no un menú de rutinas fijas.',
    },
    heroImage:
      'https://images.pexels.com/photos/6628601/pexels-photo-6628601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    treatments: [
      {
        name: { en: 'Relaxation massage', es: 'Masaje de relajación' },
        description: {
          en: 'A full-body Swedish massage to calm the nervous system and release surface tension.',
          es: 'Un masaje sueco de cuerpo completo para calmar el sistema nervioso y liberar la tensión superficial.',
        },
        duration: '60 min',
        price: '$30',
        image: 'https://images.pexels.com/photos/6629608/pexels-photo-6629608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Deep tissue massage', es: 'Masaje de tejido profundo' },
        description: {
          en: 'Targeted, deeper pressure for stubborn knots and tight muscles.',
          es: 'Presión más profunda y dirigida para nudos rebeldes y músculos tensos.',
        },
        duration: '60 min',
        price: '$35',
        image: 'https://images.pexels.com/photos/5888064/pexels-photo-5888064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Hot stone therapy', es: 'Terapia con piedras calientes' },
        description: {
          en: 'Warm, smooth stones melt tension before your therapist even begins.',
          es: 'Piedras tibias y suaves derriten la tensión antes de que tu terapeuta comience.',
        },
        duration: '75 min',
        price: '$45',
        image: 'https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: { en: 'Foot reflexology', es: 'Reflexología podal' },
        description: {
          en: 'A focused foot treatment that relaxes the whole body through key pressure points.',
          es: 'Un tratamiento enfocado en los pies que relaja todo el cuerpo a través de puntos de presión clave.',
        },
        duration: '45 min',
        price: '$20',
        image: 'https://images.pexels.com/photos/5793976/pexels-photo-5793976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
    benefits: [
      {
        en: 'Pressure always adjusted to your comfort',
        es: 'La presión siempre se ajusta a tu comodidad',
      },
      {
        en: 'Warm, aromatic oils included',
        es: 'Aceites tibios y aromáticos incluidos',
      },
      {
        en: 'A few quiet minutes before and after',
        es: 'Unos minutos de quietud antes y después',
      },
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

export function t(obj: { en: string; es: string }, lang: Lang): string {
  return obj[lang];
}
