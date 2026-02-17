import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { GraduationCap, Users, ExternalLink } from 'lucide-react';
import certificateIcon from '../../assets/certificate.png';

interface CourseInfo {
  name: string;
  url: string;
  professors: string;
  courseCode: string;
}

interface TeachingItemProps {
  title: string;
  role: string;
  organization: string;
  icon: 'teaching' | 'coaching';
  description?: string;
  courses?: CourseInfo[];
  certificateUrl?: string;
}

function TeachingItem({ title, role, organization, icon, description, courses, certificateUrl }: TeachingItemProps) {
  const Icon = icon === 'teaching' ? GraduationCap : Users;
  
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[var(--link-color)]/10 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-[var(--link-color)]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            {certificateUrl && (
              <a 
                href={certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="View Certificate"
              >
                <img 
                  src={certificateIcon} 
                  alt="Certificate" 
                  className="w-6 h-6"
                />
              </a>
            )}
          </div>
          <p className="text-sm text-[var(--link-color)] font-mono mb-2">
            {role} • {organization}
          </p>
          {description && <p className="text-foreground/70">{description}</p>}
          {courses && (
            <div className="space-y-4 mt-4">
              {courses.map((course, index) => (
                <div key={index} className="border-l-2 border-[var(--link-color)]/30 pl-4 py-2">
                  <div className="flex items-start gap-2 mb-1">
                    <a 
                      href={course.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-[var(--link-color)] transition-colors flex items-center gap-1.5"
                    >
                      {course.name}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-foreground/70 mb-1">{course.professors}</p>
                  <p className="text-xs text-muted-foreground font-mono">{course.courseCode}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export function TeachingSection() {
  const teachingActivities: TeachingItemProps[] = [
    {
      title: 'Teaching Assistant',
      role: 'Graduate TA',
      organization: 'Carnegie Mellon University',
      icon: 'teaching',
      courses: [
        {
          name: 'Probability & Computing',
          url: 'https://www.cs.cmu.edu/~fsaad/teaching/15259-f25/#home',
          professors: 'Prof. Feras Saad and Prof. Weina Wang',
          courseCode: 'CMU 15-259 / 15-559, Fall 2025',
        },
        {
          name: 'Generative AI',
          url: 'https://www.cs.cmu.edu/~mgormley/courses/10423/',
          professors: 'Prof. Aran Nayebi and Matt Gormley',
          courseCode: 'CMU 10-423 / 10-623 / 10-723, Spring 2026',
        },
      ],
    },
    {
      title: 'GTI (Google Technical Immersion) Coach',
      role: 'Mentor & Coach',
      organization: 'Google',
      icon: 'coaching',
      description: 'Recognized for mentoring and onboarding Nooglers (new employees), fostering confidence, productivity, and a stronger engineering culture across teams.',
      certificateUrl: 'https://drive.google.com/file/d/1xanZVKPnlqiUXM5UAAhJ9C8KHbm3-fOe/view',
    },
  ];

  return (
    <section id="teaching" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Teaching & Leadership" 
          subtitle="Mentoring the next generation of engineers and researchers"
        />
        
        <div className="max-w-4xl space-y-6">
          {teachingActivities.map((item, index) => (
            <TeachingItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}