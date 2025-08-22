import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Users, Code, Layers, BarChart2, Mic, ExternalLink, MessageSquare } from 'lucide-react';
import { AdvisoryRoles } from '@/components/achievements';

export const metadata: Metadata = {
  title: 'Kapil Poreddy | AI Powered Senior Engineering Leader',
  description: 'Professional portfolio of Kapil Poreddy, showcasing expertise in AI, Machine Learning, and Digital Transformation',
};

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <section className="relative pt-16 pb-8 md:pt-20 md:pb-12">
        <div className="container">
          {/* Headshot */}
          <div className="mx-auto mb-6 sm:mb-8 flex justify-center">
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-primary/20 p-1 shadow-lg">
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="/images/headshot.jpg"
                  alt="Kapil Poreddy"
                  className="h-full w-full object-cover"
                  width={192}
                  height={192}
                />
              </div>
            </div>
          </div>
          
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Kapil Poreddy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              AI Powered Senior Engineering Leader | Digital Transformation Specialist | Innovator in Retail Tech & Digital Health
            </p>
          </div>
        </div>
      </section>

      {/* Profile Cards Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            {/* About Me Card */}
            <div className="mb-8 rounded-lg border bg-card p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="text-base leading-normal text-foreground">
                  I am an accomplished AI & Engineering Leader with a proven record of driving
                  large-scale digital transformation through AI-powered solutions in retail,
                  healthcare, and cloud-native systems. My work spans cutting-edge innovations in
                  machine learning, intelligent observability, and scalable infrastructure, helping
                  enterprises solve mission-critical problems while delivering measurable business
                  outcomes.
                </p>
                
                <p className="text-base leading-normal text-foreground">
                  With deep expertise in AI/ML engineering, software architecture, and platform
                  resilience, I lead the development of high-availability, fault-tolerant systems
                  supporting millions of users. My focus lies at the intersection of generative AI,
                  agentic workflows, and domain-specific platforms—transforming traditional systems
                  into intelligent, autonomous ecosystems.
                </p>
                
                <p className="text-base leading-normal text-foreground">
                  I'm an AI/ML leader with 19+ years of experience in building and scaling AI
                  platforms and teams. I specialize in driving digital transformation through
                  innovative AI solutions and cloud-native architectures.
                </p>
              </div>
            </div>

            {/* Advisory and Volunteer Service Roles Section */}
            <AdvisoryRoles />

            {/* Profile Cards Grid - Removed as per user request */}
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-4 text-muted-foreground">
              A comprehensive overview of my technical expertise and leadership capabilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Leadership */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Leadership</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>AI-Driven Engineering Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Digital Transformation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Thought Leadership</span>
                </li>
              </ul>
            </div>

            {/* AI & Machine Learning */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">LLMs:</span> GPT-4, Claude, Mistral, Falcon</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">Frameworks:</span> LangChain, AutoGen, LoRAX, SkyPilot, Ludwig</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Predictive Analytics & Time Series Forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Reinforcement Learning for Workflow Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Explainable AI (XAI), Responsible & Ethical AI</span>
                </li>
              </ul>
            </div>

            {/* Cloud & Systems */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cloud & Systems</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">Cloud:</span> AWS, Azure, GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">Tools:</span> Kubernetes, Docker, Terraform</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Event-Driven Architectures</span>
                </li>
              </ul>
            </div>

            {/* Development */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Development</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">Languages:</span> Java, Python, Go, TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">Frameworks:</span> Spring Boot, FastAPI, React</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Microservices & API Design</span>
                </li>
              </ul>
            </div>

            {/* Observability */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Observability</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>OpenTelemetry, Zipkin</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Datadog, Prometheus, Grafana</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>MTTR Optimization</span>
                </li>
              </ul>
            </div>

            {/* Academic & Research */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#00629B] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Academic & Research</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span><span className="font-medium">Research Methods:</span> Ablation Studies, Comparative Analysis, Benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Applied NLP, Computer Vision, OCR in Retail/Healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>AI Governance, Auditability, and Fairness Tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Patent Writing & White Paper Authoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Build Something Amazing
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you!
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}