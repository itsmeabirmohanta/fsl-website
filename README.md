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
