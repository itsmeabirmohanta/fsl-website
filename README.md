# Future Shift Labs Website

A modern, responsive website for a global think tank focused on AI governance, democracy, cybersecurity, ethics, and innovation. Built with Next.js, React, and Tailwind CSS. The website is designed to showcase research papers, host webinar registrations, manage events, publish blog posts, all with client-side rendering and mock data.

## Features

- **Clean, Modern Design**: Responsive layout that works on any device
- **Research Publication Showcase**: Display and filter research papers 
- **Event Management**: List upcoming events and handle registrations
- **Blog System**: Share insights and policy discussions
- **Team Profiles**: Highlight your organization's experts and leadership
- **Mobile-Friendly**: Fully responsive design
- **SEO Optimized**: Built with best practices for search engines
- **Client-Side Rendering**: Simplified architecture with no backend dependency
- **Secure Development**: Environment configuration separated from code

## Getting Started

### Prerequisites

- Node.js (version 18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/thinktankwebsite.git
cd thinktankwebsite
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
   - Copy `.env.example` to `.env.local` (for local development)
   - Update the variables as needed

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   │   ├── about/      # About page
│   │   ├── blog/       # Blog posts
│   │   ├── contact/    # Contact page
│   │   ├── events/     # Events and webinar listings
│   │   ├── research/   # Research papers
│   │   ├── team/       # Team member profiles
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # UI components
│   │   ├── FloatingCard.tsx  # Floating card component
│   │   ├── NewsletterSignup.tsx  # Newsletter signup component
│   │   ├── SectionHeader.tsx  # Section header component
│   │   └── ServiceCard.tsx    # Service card component
│   └── lib/            # Utility functions and shared logic
│       ├── data.ts     # Data access functions
│       ├── mock-data.ts # Static mock data
│       └── utils.ts    # Utility functions
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── .env.example        # Example environment variables
```

## Security Considerations

This project follows security best practices:

1. **Environment Variables**: Sensitive information is stored in environment variables
2. **CSP Headers**: Content Security Policy headers can be configured in `next.config.js`
3. **Input Validation**: Form inputs are validated using Zod schemas
4. **Dependencies**: Regular updates of dependencies to patch security vulnerabilities
5. **HTTPS**: Always use HTTPS in production environments

### Environment Variables

- `.env.example` contains non-sensitive examples of required variables
- `.env.local` (not committed to git) should contain your actual values for local development
- Production environments should set these variables through their platform (Vercel, Netlify, etc.)

## Customization

### Branding

1. Update colors in `tailwind.config.js` to match your organization's branding
2. Replace logos and favicon in the `public` directory
3. Update the organization name and contact details in components

### Content

All content is stored as mock data in `src/lib/mock-data.ts`. To update the content:

1. Edit the data objects in the mock data file
2. Add new entries following the same structure for blog posts, research papers, events, etc.

## Adding Real Backend Later

If you want to add a real backend in the future:

1. Implement actual API endpoints that return data in the same structure as the mock data
2. Update the functions in `src/lib/data.ts` to fetch from these real endpoints instead of the mock data
3. No changes would be required in the components themselves

## Deployment

This project can be easily deployed on Vercel, Netlify, or any other hosting provider that supports Next.js.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com/)

## Image Usage Guidelines

### Image Constants
All images are organized in `src/lib/constants/images.ts` and categorized by their usage:

- `HERO_IMAGES`: Hero section images for main pages
- `EVENT_IMAGES`: Images for events and workshops
- `PROFILE_IMAGES`: Team member and avatar images
- `BLOG_IMAGES`: Blog post and insights images
- `ORGANIZATION_IMAGES`: Office and workspace images
- `RESEARCH_IMAGES`: Research and analysis related images

### Image Best Practices

1. **Use Constants**: Always use the image constants from `src/lib/constants/images.ts` instead of hardcoding URLs
2. **Optimization**: All images are automatically optimized using Next.js Image component
3. **Error Handling**: Use `ImageErrorBoundary` component to handle loading failures gracefully
4. **Fallbacks**: Each category has a fallback image defined

### Image Components

1. **OptimizedImage**: Enhanced Next.js Image component with:
   - Blur-up loading effect
   - Error handling
   - Automatic retries
   - Fallback support

2. **ImageErrorBoundary**: Wrapper component that provides:
   - Graceful error states
   - Custom fallback UI
   - Error tracking

### Adding New Images

1. Choose high-quality, relevant images from Unsplash
2. Add the image URL to the appropriate category in `src/lib/constants/images.ts`
3. Include a descriptive comment for the image's purpose
4. Use the `OptimizedImage` component with proper alt text and dimensions

### Image Categories and Usage

1. **Hero Images**
   - High-impact visuals for page headers
   - Technology and innovation focused
   - Abstract or conceptual themes

2. **Event Images**
   - Professional settings
   - Conference and workshop scenes
   - Collaborative environments

3. **Profile Images**
   - Professional headshots
   - Team collaboration scenes
   - Default avatars

4. **Blog Images**
   - Topical illustrations
   - Abstract technology concepts
   - Policy and governance themes

5. **Organization Images**
   - Modern office spaces
   - Meeting rooms
   - Professional environments

6. **Research Images**
   - Data visualization
   - Analysis and research scenes
   - Technology and innovation

### Image Performance

- All images are served through Next.js Image optimization
- Automatic WebP/AVIF format conversion
- Responsive sizing based on viewport
- Lazy loading for off-screen images
- Blur-up loading effect for better UX

### Accessibility

- All images require meaningful alt text
- Decorative images use empty alt text
- SVG icons include ARIA labels
- High contrast ratios maintained

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

### Building
```bash
npm run build
npm start
```

## License
All images are from Unsplash and are properly licensed for use.
