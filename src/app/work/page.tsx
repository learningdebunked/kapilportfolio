import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

type ProjectLink = {
  label: string;
  url: string;
  external: boolean;
  icon: React.ReactNode;
};

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  image?: string; // Make image optional
};

export const metadata: Metadata = {
  title: 'My Work | Kapil Poreddy',
  description: 'Explore my portfolio of projects and case studies',
};

export default function WorkPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Healthcare Event Logging for MCP',
      description: 'AI agents in healthcare increasingly rely on contextual memory from MCP servers to summarize records, make recommendations, or drive decisions. But this introduces risk:\n\n Unchecked exposure of PHI/PII\n Unbounded token consumption in LLMs\n No visibility into what context was used and why\n\nHELMCP provides a policy-driven middleware layer that brings governance, transparency, and control over every request to an MCP server.',
      tags: ['Healthcare', 'MCP Server', 'PHI/PII Governance', 'AI Governance', 'Compliance'],
      links: [
        {
          label: 'View on GitHub',
          url: 'https://github.com/learningdebunked/HELMCP',
          external: true,
          icon: <ExternalLink className="ml-1 h-4 w-4" />
        }
      ]
    },
    {
      id: 2,
      title: 'Parrot - Lightweight Mock Service',
      description: 'A lightweight Spring Boot based mock service for quickly setting up REST API endpoints with templated responses. Ideal for testing and development environments.',
      tags: ['Java', 'Spring Boot', 'REST API', 'Testing', 'Mocking'],
      links: [
        {
          label: 'View on GitHub',
          url: 'https://github.com/learningdebunked/Parrot',
          external: true,
          icon: <ExternalLink className="ml-1 h-4 w-4" />
        }
      ]
    }
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
            My Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my recent projects and case studies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              
              {project.image && (
                <div className="my-4 overflow-hidden rounded-md border bg-white p-2">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
              )}
              
              <p className="mb-4 mt-2 text-muted-foreground whitespace-pre-line">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      {link.label} {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Want to see more of my work or discuss a project?
          </p>
          <Link href="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
