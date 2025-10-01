import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Mic, Calendar, Video, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media | Kapil Poreddy',
  description: 'Explore my speaking engagements, interviews, and media appearances',
};

export default function MediaPage() {
  const mediaItems = [
    {
      id: 1,
      title: 'Conference for Engineering Diversity',
      description: 'Speaking at the Conference for Engineering Diversity, sharing insights on fostering inclusivity and innovation in the tech industry.',
      icon: <Mic className="h-5 w-5 text-primary" />,
      image: '/images/GDAI.png',
      tags: ['Conference', 'Diversity', 'Inclusion', 'Engineering', 'Oct 4, 2025'],
      links: [
        {
          label: 'View Event',
          url: 'https://www.sjsuced.org/',
          external: true,
          icon: <ExternalLink className="ml-1 h-4 w-4" />
        }
      ]
    },
    {
      id: 2,
      title: 'XtremeJ 2025',
      description: 'Presenting at XtremeJ, discussing cutting-edge Java technologies and modern software development practices.',
      icon: <Mic className="h-5 w-5 text-primary" />,
      image: '/images/SpeakerCard.jpeg',
      tags: ['Java', 'Development', 'Technology', 'Conference', 'Nov 3, 2025'],
      links: [
        {
          label: 'View Speakers',
          url: 'https://xtremej.dev/2025/speakers/',
          external: true
        }
      ]
    },
    {
      id: 3,
      title: 'Open Source Data Summit 2025',
      description: 'Keynote speaker at the Open Source Data Summit, exploring the future of open data and collaborative analytics.',
      icon: <Mic className="h-5 w-5 text-primary" />,
      image: '/images/DigitalTransformationExpo.png',
      tags: ['Open Source', 'Data', 'Analytics', 'Keynote', 'Nov 6, 2025'],
      links: [
        {
          label: 'Event Website',
          url: 'https://opensourcedatasummit.com/',
          external: true
        }
      ]
    },
    {
      id: 4,
      title: 'Datacon LA 2025',
      description: 'Panelist at Datacon LA, discussing data engineering best practices and emerging trends in big data technologies.',
      icon: <Mic className="h-5 w-5 text-primary" />,
      image: '/images/GDAI.png',
      tags: ['Data Engineering', 'Big Data', 'Conference', 'Panel', 'Nov 8, 2025'],
      links: [
        {
          label: 'Event Details',
          url: 'https://www.dataconla.com/events/dcla-2025/',
          external: true
        }
      ]
    },
    {
      id: 5,
      title: 'Moderator - GDAI 2025',
      description: 'Serving as a moderator at the Global Data & AI Conference 2025, facilitating discussions and knowledge sharing among industry leaders and researchers in the field of Data Science and Artificial Intelligence.',
      icon: <Mic className="h-5 w-5 text-primary" />,
      image: '/images/GDAI.png',
      tags: ['GDAI 2025', 'Moderator', 'Data Science', 'Artificial Intelligence', 'Conference'],
      links: [
        {
          label: 'View Post',
          url: 'https://www.linkedin.com/posts/dataglobal-hub_gdai2025-moderator-engineering-activity-7360980602382118914-WM-r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAWtMGYBtRrwbj0Otfj1hjZWmBV-IC_N6x4',
          external: true,
          icon: <ExternalLink className="ml-1 h-4 w-4" />
        }
      ]
    },
    {
      id: 6,
      title: 'Machine Learning Summit 2025',
      description: 'Panel: "Building AI Agents: Techniques and Tradeoffs That Matter" - A deep dive into the practical aspects of developing AI agents with real-world applications.',
      icon: <Mic className="h-5 w-5 text-primary" />,
      image: '/images/SpeakerCard.jpeg',
      tags: ['Panel Discussion', 'AI Agents', 'Machine Learning', 'GenAI', 'LLMs'],
      links: [
        {
          label: 'View Event Details',
          url: 'https://www.eventbrite.com/e/machine-learning-summit-2025-applied-ml-engineering-to-genai-and-llms-tickets-1332848338259',
          external: true
        }
      ]
    },
    {
      id: 7,
      title: 'Digital Transformation Week',
      description: 'Panel: Unifying teams for successful digital transformation: Strategies for engagement and collaboration',
      icon: <Calendar className="h-5 w-5 text-primary" />,
      image: '/images/DigitalTransformationExpo.png',
      tags: ['Panel Discussion', 'Digital Transformation', 'Leadership'],
      links: [
        {
          label: 'View Speaker Profile',
          url: 'https://www.digitaltransformation-week.com/northamerica/speaker/kapil-poreddy/',
          external: true
        },
        {
          label: 'View Session Details',
          url: 'https://www.digitaltransformation-week.com/northamerica/agenda/digital-transformation-in-action/',
          external: true
        }
      ]
    },
    // Add more media items here in the future
    // {
    //   id: 4,
    //   title: 'Interview on AI Trends',
    //   description: 'Watch my interview discussing the latest trends in AI and machine learning.',
    //   icon: <Video className="h-5 w-5 text-primary" />,
    //   tags: ['Interview', 'AI', 'Machine Learning'],
    //   link: '#',
    //   external: true
    // },
  ];

  return (
    <div className="py-20">
      <div className="container">
        <div className="mb-8">
          <Link href="/" className="btn btn-ghost mb-6 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Media & Appearances
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of my speaking engagements, interviews, and media contributions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                {item.description}
              </p>
              {item.image && (
                <div className="mb-4 overflow-hidden rounded-lg border bg-white p-2 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mx-auto max-h-[400px] w-auto object-contain"
                  />
                </div>
              )}
              <div className="mb-4 flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                {item.links ? (
                  item.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      {link.label}
                      {link.external && link.icon}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={item.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    {item.title === 'Sessionize Profile' ? 'View Profile' : 'View Details'}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Interested in having me speak at your event or contribute to your media?
          </p>
          <Link href="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
