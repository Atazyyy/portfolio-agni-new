export interface Demo {
  name: string;
  emoji: string;
  category: string;
  description: string;
  url: string;
}

/**
 * Concept demos for Agni's web development service.
 * All brands are fictional and built end-to-end (landing page + working app logic).
 */
export const demos: Demo[] = [
  {
    name: 'Tanamanies Cafe',
    emoji: '🌿',
    category: 'Company Profile',
    description: 'Plant cafe profile site with story, menu, and atmosphere showcase.',
    url: 'https://tanamanies-cafe.vercel.app',
  },
  {
    name: 'Teinun',
    emoji: '🛍️',
    category: 'E-Commerce',
    description: 'Batik & woven fashion store: catalog, filters, cart, WhatsApp checkout.',
    url: 'https://teinun.vercel.app',
  },
  {
    name: 'LapakHub',
    emoji: '🧾',
    category: 'POS + Dashboard',
    description: 'Cashier app with inventory CRUD and sales charts for small shops.',
    url: 'https://lapakhub.vercel.app',
  },
  {
    name: 'BarberLagi',
    emoji: '💈',
    category: 'Booking System',
    description: 'Multi-step barbershop booking: service, barber, schedule, confirmation.',
    url: 'https://barberlagi.vercel.app',
  },
  {
    name: 'MieSalnyy',
    emoji: '🍜',
    category: 'Digital Menu',
    description: 'QR restaurant menu with spice levels, cart, and order summary.',
    url: 'https://miesalnya.vercel.app',
  },
  {
    name: 'Panggunggema',
    emoji: '🎟️',
    category: 'Event + Ticketing',
    description: 'Event management with interactive 3D stage hero, ticket flow, and organizer panel.',
    url: 'https://panggunggema.vercel.app',
  },
  {
    name: 'Rentakara',
    emoji: '🚗',
    category: 'Rental System',
    description: 'Car rental with real-time date availability and owner schedule panel.',
    url: 'https://rentakara.vercel.app',
  },
  {
    name: 'Tiketara',
    emoji: '🎫',
    category: 'Helpdesk Ticketing',
    description: 'Lightweight support desk: kanban board with SLA timers per priority.',
    url: 'https://tiketara.vercel.app',
  },
  {
    name: 'Relasera',
    emoji: '🤝',
    category: 'CRM',
    description: '5-stage sales pipeline with deal values, win rate, and follow-up alerts.',
    url: 'https://relasera.vercel.app',
  },
  {
    name: 'Niagava',
    emoji: '📦',
    category: 'Mini ERP',
    description: 'Stock in/out, transactions, and automatic profit report per product.',
    url: 'https://niagava.vercel.app',
  },
  {
    name: 'Belajiva',
    emoji: '📚',
    category: 'LMS',
    description: 'Micro-courses with module progress and scored quizzes.',
    url: 'https://belajiva.vercel.app',
  },
  {
    name: 'Absensiva',
    emoji: '🏢',
    category: 'HRIS',
    description: 'Attendance check-in/out, leave approvals, and employee directory.',
    url: 'https://absensiva.vercel.app',
  },
];
