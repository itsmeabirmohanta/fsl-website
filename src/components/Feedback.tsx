'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ThumbsUp, ThumbsDown, MessageSquare, X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simulated API endpoint - replace with your actual API endpoint
const submitFeedback = async (data: FeedbackData): Promise<{ success: boolean }> => {
  // In production, replace with actual API call
  console.log('Feedback submitted:', data);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1000);
  });
};

interface FeedbackData {
  rating: 'positive' | 'negative';
  comment: string;
  page: string;
  timestamp: string;
  userAgent: string;
  screenSize: string;
}

export function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<'positive' | 'negative' | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async () => {
    if (!rating) return;
    
    setIsSubmitting(true);
    
    try {
      // Gather metadata
      const feedbackData: FeedbackData = {
        rating,
        comment: comment.trim(),
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
      };
      
      await submitFeedback(feedbackData);
      setIsSubmitted(true);
      
      // Reset after some time
      setTimeout(() => {
        setRating(null);
        setComment('');
        setIsSubmitted(false);
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setRating(null);
    setComment('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 print:hidden">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            size="sm" 
            variant="outline" 
            className="rounded-full bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-background shadow-lg flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Feedback</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">
              {isSubmitted ? "Thanks for your feedback!" : "Share your feedback"}
            </DialogTitle>
          </DialogHeader>
          
          {!isSubmitted ? (
            <>
              <div className="py-3">
                <p className="text-sm text-muted-foreground mb-4">How would you rate your experience?</p>
                
                <RadioGroup 
                  value={rating || ''} 
                  onValueChange={(value: string) => setRating(value as 'positive' | 'negative')}
                >
                  <div className="flex justify-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <div className={cn(
                        "flex items-center justify-center h-12 w-12 rounded-full border-2",
                        rating === "positive" 
                          ? "border-green-500 bg-green-50 dark:bg-green-950/50" 
                          : "border-muted hover:border-green-500/50"
                      )}>
                        <RadioGroupItem 
                          value="positive" 
                          id="positive" 
                          className="sr-only" 
                        />
                        <Label htmlFor="positive" className="cursor-pointer flex items-center justify-center w-full h-full">
                          <ThumbsUp className={cn(
                            "h-6 w-6",
                            rating === "positive" ? "text-green-500" : "text-muted-foreground"
                          )} />
                        </Label>
                      </div>
                      <Label htmlFor="positive" className="text-xs">Positive</Label>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className={cn(
                        "flex items-center justify-center h-12 w-12 rounded-full border-2",
                        rating === "negative" 
                          ? "border-red-500 bg-red-50 dark:bg-red-950/50" 
                          : "border-muted hover:border-red-500/50"
                      )}>
                        <RadioGroupItem 
                          value="negative" 
                          id="negative" 
                          className="sr-only"
                        />
                        <Label htmlFor="negative" className="cursor-pointer flex items-center justify-center w-full h-full">
                          <ThumbsDown className={cn(
                            "h-6 w-6",
                            rating === "negative" ? "text-red-500" : "text-muted-foreground"
                          )} />
                        </Label>
                      </div>
                      <Label htmlFor="negative" className="text-xs">Negative</Label>
                    </div>
                  </div>
                </RadioGroup>
                
                <div className="mt-4">
                  <Label htmlFor="comment" className="text-sm mb-2 block">
                    Share your thoughts (optional)
                  </Label>
                  <Textarea 
                    id="comment"
                    placeholder="Please tell us what went well or could be improved..."
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>
              
              <DialogFooter className="flex justify-between sm:justify-between">
                <Button type="button" variant="ghost" size="sm" onClick={resetForm} disabled={isSubmitting}>
                  Reset
                </Button>
                <Button type="button" onClick={handleSubmit} disabled={!rating || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit
                    </>
                  )}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-6 text-center">
              <p className="text-sm text-muted-foreground">
                We appreciate your feedback and will use it to improve our website.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 