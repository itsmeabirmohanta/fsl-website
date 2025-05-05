# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to security@futureshiftlabs.org. All security vulnerabilities will be promptly addressed.

Please include the following information in your report:

- Type of issue
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

## Security Measures

This project implements several security measures:

### Environment Variables
- Sensitive information is stored in environment variables
- Production credentials are never committed to the repository
- Local development uses `.env.local` files which are not committed

### Content Security Policy
- A strict Content Security Policy is implemented to mitigate XSS attacks
- Scripts, styles, and other resources are restricted to trusted sources

### Input Validation
- All user inputs are validated using Zod schemas
- Form data is sanitized before processing

### Dependency Management
- Dependencies are regularly updated to patch security vulnerabilities
- GitHub Dependabot alerts are monitored and addressed promptly

### HTTPS Enforcement
- The production site is configured to always use HTTPS
- HTTP to HTTPS redirects are enforced

## Best Practices for Contributors

When contributing to this project, please follow these security best practices:

1. **Never commit sensitive information** such as API keys, passwords, or private credentials
2. **Keep dependencies updated** to minimize vulnerability exposure
3. **Validate and sanitize all user inputs** to prevent injection attacks
4. **Use parameterized queries** if implementing database functionality
5. **Follow the principle of least privilege** when implementing new features

## Security Headers

This application implements the following security headers:

- **Strict-Transport-Security**: Enforces secure connections to the server
- **X-Content-Type-Options**: Prevents browsers from interpreting files as a different MIME type
- **X-Frame-Options**: Provides protection against clickjacking
- **X-XSS-Protection**: Enables cross-site scripting filters in browsers
- **Content-Security-Policy**: Restricts resources that can be loaded
- **Referrer-Policy**: Controls how much referrer information should be included with requests

## Version Policy

We maintain security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                | 