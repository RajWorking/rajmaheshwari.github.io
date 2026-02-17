import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { TagChip } from './tag-chip';
import { Code, Database, Cpu } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[var(--link-color)]/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TagChip key={skill} label={skill} variant="outline" />
        ))}
      </div>
    </Card>
  );
}

export function SkillsSection() {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Languages & Databases',
      icon: <Code className="w-5 h-5 text-[var(--link-color)]" />,
      skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'Go', 'Bash', 'Git', 'MySQL', 'Solidity'],
    },
    {
      title: 'ML/AI Frameworks',
      icon: <Cpu className="w-5 h-5 text-[var(--link-color)]" />,
      skills: ['PyTorch', 'NumPy', 'Pandas', 'JAX', 'Hugging Face (Transformers, Datasets, Tokenizers)', 'PyTorch Lightning', 'scikit-learn', 'vLLM', 'DeepSpeed', 'Accelerate', 'TensorRT'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Database className="w-5 h-5 text-[var(--link-color)]" />,
      skills: ['React', 'Flutter', 'MongoDB', 'Docker', 'Kubernetes', 'GCP', 'REST APIs'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Skills" 
          subtitle="Technical expertise across the ML/NLP stack"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}