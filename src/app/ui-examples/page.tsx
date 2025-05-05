import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const metadata: Metadata = {
  title: 'UI Examples | PolicyLab',
  description: 'Example UI components used in the PolicyLab website',
};

export default function UIExamplesPage() {
  return (
    <>
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">UI Examples</h1>
          <p className="text-xl max-w-3xl">
            A showcase of the Shadcn UI components used throughout the PolicyLab website.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-16">
          {/* Buttons Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg">Large Button</Button>
              <Button>Default Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="icon" className="h-10 w-10">🔍</Button>
            </div>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content area of the card. You can put any content here.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <Badge className="mt-2">New</Badge>
                </CardHeader>
                <CardContent>
                  <p>Cards can be used for a variety of purposes including features, blog posts, and products.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pricing Plan</CardTitle>
                  <CardDescription>Professional</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$49/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">✅</span> Feature one
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✅</span> Feature two
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✅</span> Feature three
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Badges Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge>Default Badge</Badge>
              <Badge variant="secondary">Secondary Badge</Badge>
              <Badge variant="outline">Outline Badge</Badge>
              <Badge variant="destructive">Destructive Badge</Badge>
            </div>
          </section>

          {/* Form Elements Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Form Elements</h2>
            <div className="max-w-md space-y-6">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here" />
              </div>
              
              <Button className="w-full">Submit</Button>
            </div>
          </section>

          {/* Dialog Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Dialog</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmation</DialogTitle>
                  <DialogDescription>
                    This is a dialog component used for confirmations, alerts, or small forms.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>Are you sure you want to continue with this action?</p>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          {/* Pagination Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Pagination</h2>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </div>
      </div>
    </>
  );
} 