# CareLoop Healthcare Portal

A modern healthcare member portal with a clean, accessible interface for managing appointments, prescriptions, lab results, and wellness goals.

## Overview

This is a static HTML/CSS healthcare portal application that provides members with:
- Dashboard overview with key health metrics
- Appointment scheduling and management
- Care team directory and messaging
- Lab results and health records
- Prescription management
- Billing and coverage information
- Wellness tracking and goals

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/guptaraghav29/PDD-Hackathon.git
cd PDD-Hackathon
```

2. No build step required - this is a static HTML application.

## Running Locally

### Option 1: Using Python's built-in server
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Using Node.js http-server
```bash
npx http-server -p 8000
# Visit http://localhost:8000
```

### Option 3: Open directly in browser
Simply open `index.html` in your web browser.

## Architecture

This is a single-page static HTML application with:

- **index.html**: Main application file with embedded CSS
- **Styling**: Embedded CSS with custom properties for theming
- **Fonts**: Google Fonts (Archivo, Fraunces)
- **Layout**: CSS Grid and Flexbox for responsive design

### Key Features

- Fully responsive design (mobile, tablet, desktop)
- Accessible semantic HTML structure
- Custom CSS properties for easy theming
- No JavaScript dependencies
- Modern gradient and shadow effects

## Branding

The portal currently features CareLoop branding in the navigation header with:
- CL logo mark
- CareLoop title
- Member Portal subtitle

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License
