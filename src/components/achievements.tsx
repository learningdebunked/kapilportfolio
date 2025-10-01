'use client';

import { Award, Users, Star, ChevronRight, FileText, Presentation, Share2 } from 'lucide-react';
import { useState } from 'react';
import { PdfViewer } from './PdfViewer';
import { ImageViewer } from './ImageViewer';
import { toast } from 'sonner';

const BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';

const roles = [
  {
    id: 0,
    title: 'Conference Speaker',
    organization: 'Datacon LA 2025',
    description: 'Panelist at Datacon LA, discussing data engineering best practices and emerging trends in big data technologies.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'November 8, 2025',
    link: 'https://www.dataconla.com/events/dcla-2025/',
    linkText: 'Event Details',
    isUpcoming: true
  },
  {
    id: 1,
    title: 'Keynote Speaker',
    organization: 'Open Source Data Summit 2025',
    description: 'Keynote speaker at the Open Source Data Summit, exploring the future of open data and collaborative analytics.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'November 6, 2025',
    link: 'https://opensourcedatasummit.com/',
    linkText: 'Event Website',
    isUpcoming: true
  },
  {
    id: 2,
    title: 'Conference Speaker',
    organization: 'XtremeJ 2025',
    description: 'Presenting at XtremeJ, discussing cutting-edge Java technologies and modern software development practices.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'November 3, 2025',
    link: 'https://xtremej.dev/2025/speakers/',
    linkText: 'View Speakers',
    isUpcoming: true
  },
  {
    id: 3,
    title: 'Conference Speaker',
    organization: 'Conference for Engineering Diversity',
    description: 'Speaking at the Conference for Engineering Diversity, sharing insights on fostering inclusivity and innovation in the tech industry.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'October 4, 2025',
    link: 'https://www.sjsuced.org/',
    linkText: 'View Event',
    isUpcoming: true
  },
  {
    id: 4,
    title: 'Program Committee',
    organization: 'International Conference on Advanced Mobile, IoT and Cloud Computing Technology (AMICT 2025)',
    description: 'Serving on the program committee to review and evaluate research paper submissions for AMICT 2025, ensuring high-quality technical content and research standards.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    period: 'September 2025',
    link: 'https://amictconf.com/',
    linkText: 'Conference Website'
  },
  {
    id: 1,
    title: 'Poster Session Speaker',
    organization: 'Linux Foundation - PyTorch Conference 2025',
    description: 'Presenting research on "Reducing MTTR and Alert Fatigue with PyTorch-Powered Anomaly Detection" at this premier PyTorch conference.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'October 22-23, 2025',
    location: 'San Francisco, CA',
    link: '#',
    linkText: 'Conference Details',
    isUpcoming: true
  },
  {
    id: 2,
    title: 'Conference Speaker',
    organization: 'IEEE San Francisco Bay Area Computer Society',
    description: 'Presenting on "Telemetry-Driven GitHub Copilot Integration Framework" at this prestigious technical society meeting.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'September 21, 2025',
    location: 'San Francisco Bay Area, CA',
    link: '#',
    linkText: 'Event Details',
    isUpcoming: true
  },
  {
    id: 3,
    title: 'Conference Speaker',
    organization: 'IEEE International Conference on AI in Engineering & Technology - IICAIET 2025',
    description: 'Invited to present research on cutting-edge AI applications in engineering and technology at this prestigious international conference.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    period: 'August 28, 2025 (9:00 AM MYT)',
    link: 'https://iicaiet.ieeesabah.org/IICAIET2025ProgramBookV24082025.pdf',
    linkText: 'View Program Book',
    additionalLink: 'https://youtube.com',
    additionalLinkText: 'Watch Presentation (Coming Soon)',
    thirdLink: '/certificates/certificate_iicaiet2025.pdf',
    thirdLinkText: 'View Certificate',
    isPdf: true
  },
  {
    id: 4,
    title: 'Awards Judge',
    organization: 'Claro Awards',
    description: 'Selected as a judge to evaluate and recognize outstanding achievements and innovations in the technology and business sectors.',
    icon: <Award className="h-6 w-6 text-primary" />,
    period: 'August 2025',
    link: 'https://claroawards.com/',
    linkText: 'Visit Website',
    additionalLink: 'https://www.linkedin.com/posts/claroawards_claroawards-techexcellence-tech-activity-7366137155544338432-bBko',
    additionalLinkText: 'View Announcement'
  },
  {
    id: 5,
    title: 'Awards Judge',
    organization: 'Business Intelligence Group',
    description: 'Volunteering to evaluate and recognize innovative business solutions and leadership in technology.',
    icon: <Award className="h-6 w-6 text-primary" />,
    period: 'August 2025',
    link: 'https://www.bintelligence.com/judge/kapil-poreddy',
    linkText: 'View Profile',
    additionalLink: '/certificates/BI-Badge.png',
    additionalLinkText: 'View Badge',
    thirdLink: '/certificates/Bi-Certificate.png',
    thirdLinkText: 'View Certificate',
    isPdf: true
  },
  {
    id: 6,
    title: 'Program Committee Member',
    organization: 'RS4SD Workshop',
    description: 'Volunteering to review and select research papers and presentations in the field of software development.',
    icon: <Users className="h-6 w-6 text-primary" />,
    period: 'August 2025',
    link: 'https://rs4sd-workshop.github.io/#/team/#pc',
    linkText: 'View Committee'
  },
  {
    id: 7,
    title: 'Paper Reviewer',
    organization: 'ICACECS 2025',
    description: 'Certified reviewer for ICACECS 2025 research papers. Contributed to maintaining the quality and integrity of academic research in the field of advanced computing and emerging computing sciences through thorough and constructive peer reviews.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    period: 'July 2025',
    link: '/images/Certificate.png',
    linkText: 'View Certificate'
  },
  {
    id: 8,
    title: 'Publicity Chair',
    organization: 'CCNIS 2025',
    description: 'Serving as Publicity Chair for the 2025 International Conference on Computer Networks and Information Security (CCNIS 2025), responsible for promoting the conference and increasing its visibility in the academic and professional communities.',
    icon: <Users className="h-6 w-6 text-primary" />,
    period: '2025',
    link: 'https://www.ic-ccnis.org/committee',
    linkText: 'View Committee',
    additionalLink: 'https://www.ic-ccnis.org/',
    additionalLinkText: 'Conference Website'
  },
  {
    id: 9,
    title: 'Tentative Reviewer',
    organization: 'ICIS 2025',
    description: 'Reviewing research papers for ICIS 2025, contributing to the advancement of information systems research by evaluating and providing feedback on cutting-edge studies in the field.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    period: 'July 2025',
    link: '#',
    linkText: 'Learn More'
  }
];

export function AdvisoryRoles() {
  const [openPdf, setOpenPdf] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');
  const [openImage, setOpenImage] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handlePdfClick = (pdfUrl: string) => {
    setCurrentPdf(pdfUrl);
    setOpenPdf(true);
  };

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setOpenImage(true);
  };
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
              id={`achievement-${role.id}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50"
            >
              <div className="absolute right-4 top-4 flex flex-col items-end space-y-2">
                <div className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">
                  {role.icon}
                </div>
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    const shareUrl = `${window.location.origin}/achievements#achievement-${role.id}`;
                    
                    try {
                      if (navigator.share) {
                        // Web Share API is available (mobile and some desktop browsers)
                        await navigator.share({
                          title: `${role.title} - ${role.organization}`,
                          text: role.description,
                          url: shareUrl,
                        });
                      } else if (navigator.clipboard) {
                        // Fallback to clipboard API
                        try {
                          await navigator.clipboard.writeText(shareUrl);
                          toast.success('Link copied to clipboard!');
                        } catch (clipboardErr) {
                          // Final fallback for older browsers
                          const textArea = document.createElement('textarea');
                          textArea.value = shareUrl;
                          document.body.appendChild(textArea);
                          textArea.select();
                          document.execCommand('copy');
                          document.body.removeChild(textArea);
                          toast.success('Link copied to clipboard!');
                        }
                      } else {
                        // Last resort: show the URL in an alert
                        window.prompt('Copy to clipboard: Ctrl+C, Enter', shareUrl);
                      }
                    } catch (err) {
                      console.error('Sharing failed:', err);
                      // If sharing is cancelled or fails, try to copy to clipboard
                      try {
                        await navigator.clipboard?.writeText(shareUrl);
                        toast.success('Link copied to clipboard!');
                      } catch (clipboardErr) {
                        toast.error('Failed to share or copy link');
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Share this achievement"
                  title="Share this achievement"
                >
                  <Share2 className="h-4 w-4" />
                </button>
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
                {role.additionalLink && (
                  <div className="flex flex-col">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (role.additionalLink.endsWith('.png') || role.additionalLink.endsWith('.jpg') || role.additionalLink.endsWith('.jpeg')) {
                          handleImageClick(role.additionalLink);
                        } else {
                          window.open(role.additionalLink, '_blank');
                        }
                      }}
                      className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline text-left"
                    >
                      {role.additionalLinkText} <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                    {role.thirdLink && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (role.thirdLink.endsWith('.pdf')) {
                          handlePdfClick(role.thirdLink);
                        } else {
                          handleImageClick(role.thirdLink);
                        }
                        }}
                        className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline text-left"
                      >
                        {role.thirdLinkText} <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PdfViewer 
        url={currentPdf} 
        open={openPdf} 
        onOpenChange={setOpenPdf} 
      />
      <ImageViewer
        url={currentImage}
        open={openImage}
        onOpenChange={setOpenImage}
        alt="Badge Viewer"
      />
    </section>
  );
}
