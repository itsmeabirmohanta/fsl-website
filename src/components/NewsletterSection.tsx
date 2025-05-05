import { NewsletterSignup } from './NewsletterSignup';
import { cn } from '@/lib/utils';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  bgColor?: string;
  showNameField?: boolean;
}

export default function NewsletterSection({
  title = 'Stay Updated with PolicyLab',
  description = 'Subscribe to our newsletter to receive the latest research, policy briefings, and event announcements.',
  bgColor = 'bg-secondary/20',
  showNameField = false
}: NewsletterSectionProps) {
  return (
    <section className={cn("py-16 border-y", bgColor)}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8">
            {description}
          </p>
          <NewsletterSignup showNameField={showNameField} />
        </div>
      </div>
    </section>
  );
} 