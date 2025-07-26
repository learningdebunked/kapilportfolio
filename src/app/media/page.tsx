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
      title: 'Machine Learning Summit 2025',
      description: 'Panel: "Building AI Agents: Techniques and Tradeoffs That Matter" - A deep dive into the practical aspects of developing AI agents with real-world applications.',
      icon: <Mic className="h-5 w-5 text-primary" />,
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
      id: 2,
      title: 'Digital Transformation Week',
      description: 'Panel: Unifying teams for successful digital transformation: Strategies for engagement and collaboration',
      icon: <Calendar className="h-5 w-5 text-primary" />,
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
    //   id: 3,
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
                      {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
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
