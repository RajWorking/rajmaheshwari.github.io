import { Badge } from './ui/badge';

interface TagChipProps {
  label: string;
  variant?: 'default' | 'secondary' | 'outline';
}

export function TagChip({ label, variant = 'secondary' }: TagChipProps) {
  return (
    <Badge variant={variant} className="px-3 py-1 text-xs font-normal">
      {label}
    </Badge>
  );
}
