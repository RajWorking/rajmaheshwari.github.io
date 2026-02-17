import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { TagChip } from './tag-chip';
import { Button } from './ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface ProjectProps {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectCard({ title, period, description, highlights, tags, githubUrl, liveUrl }: ProjectProps) {
  return (
    <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="space-y-4 flex-1">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-semibold group-hover:text-[var(--link-color)] transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80">{description}</p>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-foreground/70">
              <span className="text-[var(--link-color)] mt-1 shrink-0">•</span>
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

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-6 border-t border-border mt-6">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Read More
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  const projects: ProjectProps[] = [
    {
      title: 'TaskWeaver',
      period: 'Aug 2025 – Nov 2025',
      description: 'Hypernetwork-based instance-level model adaptation using dynamic LoRA weight generation',
      highlights: [
        'Developed hypernetwork architecture that generates per-input LoRA weights for instance-level adaptation',
        'Trained across mixed datasets (GSM8K, MMLU, BoolQ, HellaSwag) to handle diverse task distributions',
        'Evaluated on held-out test sets; compared performance against static and mixed LoRA baselines',
        'Benchmarked across multiple model families: Pythia, Gemma, and Qwen',
      ],
      tags: ['PyTorch', 'LoRA', 'Hypernetworks', 'Model Adaptation', 'Multi-Task Learning'],
      githubUrl: 'https://github.com/RajWorking/taskweaver',
    },
    {
      title: 'All Hands AI',
      period: 'Aug 2024 – Dec 2024',
      description: 'Enhanced OpenHands AI coding agent with comprehensive benchmarking and visualization tools',
      highlights: [
        'Integrated Aider editing benchmark into OpenHands evaluation framework',
        'Built visualization tools for cost and action histograms to analyze agent behavior',
        'Contributed to open-source autonomous AI coding agent used by thousands of developers',
      ],
      tags: ['Python', 'AI Agents', 'Benchmarking', 'Open Source', 'Data Visualization'],
      githubUrl: 'https://github.com/OpenHands/OpenHands',
    },
    {
      title: 'SIFT Image Stitching',
      period: 'Sep 2021 – Nov 2021',
      description: 'From-scratch implementation of SIFT algorithm for robust image feature detection',
      highlights: [
        'Implemented complete SIFT pipeline: keypoint detection, descriptor extraction, and matching',
        'Applied homography estimation for seamless image stitching and panorama creation',
        'Achieved robust feature matching across varying scales, rotations, and lighting conditions',
      ],
      tags: ['Computer Vision', 'C++', 'Image Processing', 'Feature Detection', 'Homography'],
      githubUrl: 'https://github.com/RajWorking/SIFT',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Projects" 
          subtitle="Research and engineering projects across ML, NLP, and systems"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}