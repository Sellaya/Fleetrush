import {
  Truck,
  Timer,
  ShieldCheck,
  Users,
  Clock,
  FileText,
  Package,
  Boxes,
  Briefcase,
  Bike,
  Car,
  CircleHelp,
  HeartPulse,
  Scale,
  Building,
  ShoppingBag,
  Info,
  Mail,
  Phone,
  Waypoints,
  HandCoins,
} from 'lucide-react';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/track', label: 'Track' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const valueProps = [
  {
    icon: Timer,
    title: 'Same-Day Delivery',
  },
  {
    icon: Waypoints,
    title: 'Real-Time Tracking',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
  },
  {
    icon: Users,
    title: 'Dedicated Drivers',
  },
];

export const services = [
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    description:
      'Immediate dispatch and direct delivery to ensure your package arrives within hours, not days. Perfect for urgent, time-sensitive shipments.',
  },
  {
    icon: Waypoints,
    title: 'Multi-Drop Delivery',
    description:
      'Optimized routes for multiple stops, providing an efficient and cost-effective solution for businesses with complex delivery schedules.',
  },
  {
    icon: FileText,
    title: 'Document Courier',
    description:
      'Secure and confidential handling for all your important legal, medical, and corporate documents. We prioritize privacy and promptness.',
  },
  {
    icon: Package,
    title: 'Parcel Delivery',
    description:
      'From small packages to bulk shipments, we offer flexible and scalable solutions to meet all your parcel delivery requirements.',
  },
  {
    icon: Users,
    title: 'Dedicated Courier',
    description:
      'Your delivery is handled exclusively by one driver from pickup to drop-off, with no additional stops, ensuring maximum speed and security.',
  },
  {
    icon: Boxes,
    title: 'Large Freight',
    description:
      'Specialized handling for large and heavy freight shipments. Our fleet is equipped to manage goods of all sizes, ensuring safe transit.',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Book Online',
    description: 'Enter your pickup and delivery details into our simple online form.',
  },
  {
    step: 2,
    title: 'Driver Assigned',
    description:
      'An available driver is instantly assigned to your delivery for immediate pickup.',
  },
  {
    step: 3,
    title: 'Track in Real Time',
    description:
      'Monitor your delivery from start to finish with our live tracking system.',
  },
  {
    step: 4,
    title: 'Proof of Delivery',
    description:
      'Receive instant confirmation and a digital proof of delivery upon completion.',
  },
];

export const industries = [
  { name: 'Healthcare & Medical', icon: HeartPulse },
  { name: 'Legal Firms', icon: Scale },
  { name: 'E-commerce', icon: ShoppingBag },
  { name: 'Retail', icon: Building },
  { name: 'Corporate Businesses', icon: Briefcase },
  { name: 'And More...', icon: CircleHelp },
];

export const fleetDetails = [
  {
    name: 'Motorbikes',
    description: 'The fastest way to navigate urban environments, perfect for documents and small parcels.',
    icon: Bike,
    imageId: 'motorbike'
  },
  {
    name: 'Cars',
    description: 'Versatile and efficient for medium-sized deliveries, balancing speed with capacity.',
    icon: Car,
    imageId: 'car'
  },
  {
    name: 'Vans',
    description: 'Our workhorses for bulk orders, heavy goods, and multi-drop routes.',
    icon: Truck,
    imageId: 'van'
  },
];


export const faqItems = [
    {
      question: "Do you offer same-day delivery?",
      answer: "Yes, we specialize in same-day delivery across the UK. Our network of drivers is ready to dispatch your items immediately for delivery within hours."
    },
    {
      question: "Can I track my delivery in real time?",
      answer: "Absolutely. Once your booking is confirmed, you'll receive a tracking link that provides real-time updates on your delivery's location and estimated arrival time."
    },
    {
      question: "Are my items insured during transit?",
      answer: "Yes, all deliveries booked with FleetRush are fully insured. We provide comprehensive coverage to give you peace of mind from pickup to delivery."
    },
    {
      question: "What kind of items can you deliver?",
      answer: "We can deliver a wide range of items, including urgent documents, parcels of all sizes, retail goods, medical supplies, and more. If you have a specific request, please contact us."
    },
    {
      question: "What are your operating hours?",
      answer: "FleetRush operates 24/7, 365 days a year. You can book a delivery or get support from our team at any time, day or night."
    },
    {
      question: "How is the delivery price calculated?",
      answer: "Our pricing is transparent and based on several factors, including the distance between pickup and delivery, the size and weight of your package, the urgency of the delivery, and the type of vehicle required."
    }
];

export const coreValues = [
    {
      title: 'Reliability',
      description: 'We are committed to being a courier service you can count on, every time.',
      icon: ShieldCheck,
    },
    {
      title: 'Speed',
      description: 'Our logistics are optimized for the fastest possible delivery times.',
      icon: Timer,
    },
    {
      title: 'Customer-First',
      description: 'Your satisfaction is our top priority. We are here to support you 24/7.',
      icon: Users,
    },
    {
      title: 'Innovation',
      description: 'We leverage technology to make logistics simpler and more efficient.',
      icon: Waypoints,
    },
]

export const contactMethods = [
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak directly with our support team for immediate assistance.",
        contact: "0800 123 4567"
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "For non-urgent inquiries, send us an email and we'll reply promptly.",
        contact: "support@fleetrush.co.uk"
    }
]
