import { Award, Users, Star, ChevronRight, FileText } from 'lucide-react';

const roles = [
  {
    id: 1,
    title: 'Awards Judge',
    organization: 'Claro Awards',
    description: 'Selected as a judge to evaluate and recognize outstanding achievements and innovations in the technology and business sectors.',
    icon: <Award className="h-6 w-6 text-primary" />,
    period: 'August 2025',
    link: 'https://claroawards.com/',
    linkText: 'Visit Website'
  },
  {
    id: 2,
    title: 'Awards Judge',
    organization: 'Business Intelligence Group',
    description: 'Volunteering to evaluate and recognize innovative business solutions and leadership in technology.',
    icon: <Award className="h-6 w-6 text-primary" />,
    period: 'August 2025',
    link: 'https://www.bintelligence.com/judge/kapil-poreddy',
    linkText: 'View Profile'
  },
  {
    id: 3,
    title: 'Program Committee Member',
    organization: 'RS4SD Workshop',
    description: 'Volunteering to review and select research papers and presentations in the field of software development.',
    icon: <Users className="h-6 w-6 text-primary" />,
    period: 'August 2025',
    link: 'https://rs4sd-workshop.github.io/#/team/#pc',
    linkText: 'View Committee'
  },
  {
    id: 5,
    title: 'Paper Reviewer',
    organization: 'ICACECS 2025',
    description: 'Certified reviewer for ICACECS 2025 research papers. Contributed to maintaining the quality and integrity of academic research in the field of advanced computing and emerging computing sciences through thorough and constructive peer reviews.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    period: 'July 2025',
    link: '/images/Certificate.png',
    linkText: 'View Certificate'
  },
  {
    id: 6,
    title: 'Tentative Reviewer',
    organization: 'ICIS 2025',
    description: 'Reviewing research papers for ICIS 2025, contributing to the advancement of information systems research by evaluating and providing feedback on cutting-edge studies in the field.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    period: 'July 2025',
    link: '#', // Update with actual link if available
    linkText: 'Learn More'
  }
];

export function AdvisoryRoles() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Advisory and Volunteer Service Roles
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Contributing to the tech community through leadership and service
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div 
              key={role.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50"
            >
              <div className="absolute right-4 top-4 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">
                {role.icon}
              </div>
              <div className="mt-2">
                <span className="text-sm font-medium text-primary">{role.period}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {role.title}
                </h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {role.organization}
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {role.description}
                </p>
                {role.link && (
                  <a
                    href={role.link}
                    target={role.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    {role.linkText} <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
