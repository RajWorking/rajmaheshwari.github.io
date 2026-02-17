import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { TagChip } from './tag-chip';
import { Building2, Calendar, MapPin } from 'lucide-react';
import sobLogo from 'figma:asset/42f6d116f54ac85dab0d1155c9737f66e98e62f4.png';

interface ExperienceItemProps {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: (string | React.ReactNode)[];
  tags: string[];
  companyLink?: string;
  companyLogo?: string;
}

function ExperienceItem({ company, title, location, period, highlights, tags, companyLink, companyLogo }: ExperienceItemProps) {
  return (
    <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl font-semibold group-hover:text-[var(--link-color)] transition-colors flex items-center gap-3">
                {company}
                {companyLogo && companyLink && (
                  <a 
                    href={companyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={companyLogo} 
                      alt={`${company} Logo`} 
                      className="w-6 h-6"
                    />
                  </a>
                )}
              </h3>
              <p className="text-lg text-muted-foreground mt-1">{title}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground/80">
              <span className="text-[var(--link-color)] mt-1.5 shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      company: 'Google',
      title: 'Software Engineer, Search Verticals — Sports',
      location: 'Bengaluru, India',
      period: 'Jul 2023 – Jul 2025',
      highlights: [
        'Shipped Samsung Galaxy S25 “NowBar” by infusing real-time 1P/3P data streams into LLM-generated outputs to deliver fresh, glanceable, context-rich sports updates for hundreds of millions of fans worldwide; iterated on prompt design and quality evaluation loops to improve freshness and usefulness.',
        'Improved engagement in the Google Sports MiniApp by enabling discovery and follow of teams & leagues through new search functionality; designed backend pipelines with Knowledge Graph queries to maintain active datasets across 50+ locales with strong consistency and data quality.',
        'Owned backend + ML-adjacent components for high-traffic sports features that must stay reliable during event-scale traffic spikes.',
        'Led an automation-heavy migration of 1500+ server platform nodes to a new integration testing framework — reducing manual effort, improving onboarding efficiency and saving an estimated several SWE decades in cumulative engineering effort.',        
      ],
      tags: [
        'Java',
        'Python',
        'C++',
        'Knowledge Graphs',
        'Search Engines',
        'Protocol Buffers',
        'Engineering',
        'LLM Productionization',
        'Realtime Systems',
        'Knowledge Graph',
        'Data Quality',
        'Testing Infrastructure',
      ],
    },
    {
      company: 'Summer of Bitcoin',
      title: 'Open Source Contributor (bcoin)',
      location: 'Remote',
      period: 'Jul 2022 – Sep 2022',
      companyLink: 'https://www.summerofbitcoin.org/',
      companyLogo: sobLogo,
      highlights: [
        'Contributed to bcoin (a production-grade Bitcoin full node + wallet in JavaScript), focusing on scalability, reliability, and protocol feature maturity for real-world deployments.',
        <>
          Implemented feature upgrades aligned with modern Bitcoin standards, including{' '}
          <a 
            href="https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--link-color)] underline hover:text-[var(--link-color)]/80"
          >
            Bech32m
          </a>
          {' '}address support, BIP49/BIP84 flows, pruned node services, and{' '}
          <a 
            href="https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--link-color)] underline hover:text-[var(--link-color)]/80"
          >
            Taproot
          </a>
          -adjacent functionality.
        </>,
        'Expanded automated test coverage to protect backward compatibility and harden the node against edge cases encountered in production.',
        'Mentored contributors on Bitcoin architecture, consensus mechanics, and protocol fundamentals—raising project velocity and code quality.',
      ],
      tags: [
        'Blockchain',
        'Bitcoin',
        'Cryptography',
        'Cryptocurrency',
        'Open-Source Development',
        'Git',
        'JavaScript',
      ],
    },
  ];


  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Experience" 
          subtitle="Building large-scale systems and LLM-powered experiences"
        />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}