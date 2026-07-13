export const clubVereContent = {
  brand: "club vere",
  location: "Vancouver, BC",
  tagline: "The antidote to no fun city.",
  heroTitle: "Meet your new plans.",
  heroBody:
    "Thoughtful local events for moving, making, lingering, and meeting people who get it.",
  aboutTitle: "Come for the plan. Stay for the people.",
  aboutBody:
    "Club Vere creates low-pressure, high-care gatherings that make Vancouver feel a little smaller and a lot more fun.",
  instagramUrl: "https://www.instagram.com/club.vere/",
  eventbriteUrl:
    "https://www.eventbrite.com/e/picnic-pilates-tickets-1991937702289?aff=oddtdtcreator",
  pastEvent: {
    status: "Past event",
    title: "Picnic & Pilates",
    description: "Stretching, snacking, and socializing by the water.",
    date: "July 4, 2026",
    location: "David Lam Park",
  },
  formatsTitle: "A reason to leave the group chat.",
  formats: [
    {
      title: "Move together",
      description: "Pilates, gentle movement, and a snack after.",
    },
    {
      title: "Make something",
      description: "Flowers, charms, crafts, and curious hands.",
    },
    {
      title: "Go somewhere",
      description: "Beach mornings, city walks, and tiny adventures.",
    },
    {
      title: "Stay awhile",
      description: "Picnics, long tables, and unhurried conversation.",
    },
  ],
  communityTitle: "Built for the maybe-I'll-come friend.",
  communityBody:
    "Show up solo or bring someone. The point is a good afternoon, not perfect networking.",
  finalTitle: "Your next favorite plan is probably close by.",
  finalBody: "Follow Club Vere for the next gathering, drop, or spontaneous idea.",
  images: {
    park: {
      src: "/images/club-vere-park.webp",
      width: 1536,
      height: 1024,
      alt: "Friends setting up a picnic beside the water in a Vancouver park",
    },
    picnic: {
      src: "/images/club-vere-picnic.webp",
      width: 1122,
      height: 1402,
      alt: "Pink gingham picnic with flowers, strawberries, pastries, and colorful glasses",
    },
    movement: {
      src: "/images/club-vere-movement.webp",
      width: 1570,
      height: 1001,
      alt: "Outdoor movement class stretching beside Vancouver's shoreline",
    },
    details: {
      src: "/images/club-vere-details.webp",
      width: 1254,
      height: 1254,
      alt: "Colorful flowers, ribbon, strawberries, and drinks arranged for a gathering",
    },
  },
} as const;

export type ClubVereContent = typeof clubVereContent;
