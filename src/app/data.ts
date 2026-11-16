export type Movie = {
  slug: string;
  title: string;
  year: string;
  genre: string;
  runtime: string;
  rating: string;
  badge: string;
  description: string;
  cast: string[];
  backdrop: string;
  accent: string;
  poster: string;
};

export const movies: Movie[] = [
  {
    slug: 'a-quiet-horizon',
    title: 'A Quiet Horizon',
    year: '2025',
    genre: 'Drama',
    runtime: '2h 08m',
    rating: 'PG-13',
    badge: 'Featured',
    description:
      'A celebrated photographer returns to the coast after a personal loss and must decide whether to leave the life she built behind or finally face the truth she has been avoiding.',
    cast: ['Mila Hart', 'Jonas Vale', 'Nia Rowan'],
    backdrop: 'linear-gradient(135deg, rgba(30,44,54,0.9), rgba(20,15,12,0.8))',
    accent: '#d4af37',
    poster: 'horizon',
  },
  {
    slug: 'velvet-hours',
    title: 'Velvet Hours',
    year: '2024',
    genre: 'Thriller',
    runtime: '1h 49m',
    rating: 'TV-MA',
    badge: 'New',
    description:
      'When a luxury concierge begins receiving anonymous messages that seem to predict every move she makes, she finds herself hunted by the one person who knows her best.',
    cast: ['Elena Frost', 'Darius Kline', 'Vivian Pike'],
    backdrop: 'linear-gradient(135deg, rgba(57,24,26,0.9), rgba(20,15,12,0.8))',
    accent: '#f08b73',
    poster: 'velvet',
  },
  {
    slug: 'the-last-orchard',
    title: 'The Last Orchard',
    year: '2025',
    genre: 'Adventure',
    runtime: '2h 14m',
    rating: 'PG',
    badge: 'Top Rated',
    description:
      'A young mapmaker uncovers a buried route connecting forgotten cities and must race across vast wilderness before a season of storms closes the pass forever.',
    cast: ['Theo Marsh', 'Iris Wren', 'Sam Quin'],
    backdrop: 'linear-gradient(135deg, rgba(42,62,39,0.9), rgba(17,19,16,0.8))',
    accent: '#a9d78b',
    poster: 'orchard',
  },
  {
    slug: 'blue-meridian',
    title: 'Blue Meridian',
    year: '2024',
    genre: 'Sci-Fi',
    runtime: '2h 01m',
    rating: 'PG-13',
    badge: 'Trending',
    description:
      'In a near-future world of storm-lashed cities and fractured memory, a pilot discovers a signal pointing to a place no one is supposed to remember.',
    cast: ['Leah Chen', 'Tariq Bell', 'Eva Stone'],
    backdrop: 'linear-gradient(135deg, rgba(18,52,67,0.9), rgba(14,18,22,0.8))',
    accent: '#85d6e5',
    poster: 'meridian',
  },
];

export const dashboardStats = [
  { label: 'Current plan', value: 'Annual', detail: 'Renews in 143 days' },
  { label: 'Active devices', value: '3 / 5', detail: '1 device awaiting renewal' },
  { label: 'Watchtime', value: '36h', detail: 'This month' },
  { label: 'Support', value: '2 open', detail: 'Last response 2h ago' },
];

export const recentActivity = [
  'Finished: A Quiet Horizon',
  'Added to watchlist: Blue Meridian',
  'Renewal reminder scheduled for Nov 30',
  'Saved progress: The Last Orchard',
];

export const watchlist = ['Velvet Hours', 'Blue Meridian', 'The Last Orchard'];

export const supportTickets = [
  { id: '#ST-1028', subject: 'Billing adjustment', status: 'In review' },
  { id: '#ST-1009', subject: 'Device setup help', status: 'Resolved' },
  { id: '#ST-1002', subject: 'Playback issue on TV app', status: 'Open' },
];

export const subscriptions = [
  { name: 'Annual', next: 'Next billing: Dec 21', amount: '$179.99' },
  { name: 'Device limit', next: '5 devices included', amount: '3 active' },
];
