# CareLoop - Healthcare Concierge Platform

CareLoop is a web-based "Healthcare Concierge" designed to eliminate the administrative burden of patient care. The platform provides a unified React dashboard integrating AI-driven insurance verification, appointment orchestration, and a browser-based "Health XP" gamification system.

## Features

- **Patient Central Hub** - High-fidelity dashboard with "Coastal Aesthetic" design
- **CareBot Agent** - AI chat interface for scheduling and pharmacy requests
- **Treatment Timeline** - Interactive SVG visualization of labs, meds, and appointments
- **Insurance Verification** - Automated coverage checks via rtrvr.ai integration
- **Health XP Gamification** - XP tracking, missions, and streak-based engagement
- **Audio Briefings** - ElevenLabs-powered voice summaries for "Eyes-Free" mode

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Coastal Palette)
- **State Management:** Zustand
- **Backend/Auth:** Firebase (Firestore + Auth)
- **Integrations:** rtrvr.ai, ElevenLabs
- **Validation:** Zod

## Prerequisites

- Node.js 18.17.0 or higher
- npm 9+ or pnpm 8+
- Firebase project with Firestore and Authentication enabled
- ElevenLabs API key
- rtrvr.ai API key

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/guptaraghav29/PDD-Hackathon.git
cd PDD-Hackathon
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `NEXT_PUBLIC_FIREBASE_*` - Firebase configuration
- `ELEVENLABS_API_KEY` - ElevenLabs API key
- `RTRVR_API_KEY` - rtrvr.ai API key

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm test` | Run tests with Vitest |
| `npm run test:coverage` | Run tests with coverage |

## Architecture Overview

The project follows a modular architecture with 17 code modules organized by priority:

### Priority 1-3: Foundational
- **schemas** - Zod schemas for data validation
- **tailwind-config** - Coastal theme configuration
- **firebase-config** - Firebase initialization

### Priority 4-5: Services
- **firebase-auth** - Authentication hooks and utilities
- **firestore-service** - CRUD operations with real-time sync

### Priority 6-8: State & UI Base
- **user-store** - User session state (Zustand)
- **gamification-store** - XP, levels, streaks (Zustand)
- **ui-primitives** - Base components (Button, Card, etc.)

### Priority 9-11: Feature Services
- **layout-components** - Dashboard layout
- **insurance-agent** - rtrvr.ai integration
- **audio-briefing** - ElevenLabs integration

### Priority 12-15: Feature Components
- **carebot-chat** - AI chat interface
- **timeline-view** - SVG timeline
- **mission-center** - Health quests
- **insurance-checker** - Verification UI

### Priority 16-17: Pages
- **root-layout** - App shell with providers
- **dashboard-page** - Main authenticated view

## Data Schema

```typescript
Account: { id, name, email, health_xp, level, current_streak, streak_freeze_count }
CareTask: { id, type: 'MED' | 'LAB' | 'APP', status, xp_value, deadline }
InsuranceVerification: { id, patient_id, provider_id, status, coverage_details }
Mission: { id, title, description, xp_reward, is_completed }
```

## Security Notes

- Firebase Auth is configured for HIPAA compliance considerations
- All API routes validate authentication
- Environment variables are never exposed client-side (except `NEXT_PUBLIC_*`)
- Security headers configured in `next.config.js`

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint && npm run type-check && npm test`
4. Submit a pull request

## License

Private - All rights reserved
