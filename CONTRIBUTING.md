# Contributing to Future Shift Labs Website

Thank you for considering contributing to the Future Shift Labs website! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in our [Issues](https://github.com/yourusername/thinktankwebsite/issues)
- If not, create a new issue with a clear title and description
- Include as much relevant information as possible
- Add steps to reproduce the issue
- Add screenshots if applicable

### Suggesting Enhancements

- Check if the enhancement has already been suggested in our [Issues](https://github.com/yourusername/thinktankwebsite/issues)
- If not, create a new issue with a clear title and description
- Provide a clear and detailed explanation of the feature you want to see
- Explain why this enhancement would be useful to most users

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run the tests and linting (`npm run lint`)
5. Commit your changes with a meaningful commit message
6. Push to your branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

## Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/yourusername/thinktankwebsite.git
cd thinktankwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env.local`
- Update the variables as needed

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the website

## Code Style and Guidelines

- Follow the existing code style
- Write clean, maintainable, and testable code
- Keep accessibility in mind when building UI components
- Comment your code when necessary
- Update documentation if you're changing functionality

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes (formatting, etc.)
- `refactor:` for code changes that neither fix bugs nor add features
- `test:` for adding or fixing tests
- `chore:` for routine tasks, dependency updates, etc.

Example: `feat: add newsletter signup component`

## Security Best Practices

- Never commit API keys, credentials, or sensitive information
- Follow the security guidelines in our [SECURITY.md](SECURITY.md) file
- Validate all user inputs
- Use environment variables for configuration
- Regularly update dependencies to fix vulnerabilities

## License

By contributing, you agree that your contributions will be licensed under the same license as the project. 