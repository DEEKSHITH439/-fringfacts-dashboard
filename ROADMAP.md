# FringFacts Intelligence - Roadmap to Real-Time

## Current Status
- **Frontend:** Complete. High-fidelity React "Creator Action Engine" with simulated live data.
- **Features:** 
  - **War Room:** Tracking 15+ competitors with "Live" view simulation.
  - **Trend Radar:** Google Trends & Reddit signal simulation.
  - **Topic Alchemist:** 1-Click Pinterest Search & Copy Name workflow.
- **Deployment:** Live on Vercel.

## Next Phase: The "Real Engine" Integration
To move from simulation to real-time automated intelligence, the following architecture is required:

### 1. Data Sources (APIs)
- **YouTube Data API v3:** Essentials for tracking competitor view counts, momentum, and detecting "Just Uploaded" videos.
- **Reddit API:** For sourcing viral hooks from r/NatureIsMetal, etc.
- **Google Trends:** For validating search volume spikes.

### 2. Backend Infrastructure
- **Server:** Node.js or Next.js API routes to securely handle API keys.
- **Database:** Supabase or Firebase (Free tiers likely sufficient) to store historical data. This is crucial for calculating "Views per Hour" velocity.
- **Automation:** An hourly script (Cron Job) that checks all 15 channels and updates the database.

### Decision Point (Phase 1)
The immediate next step upon resuming is **"Proof of Action"**:
1. Obtain a Google Cloud **YouTube Data API Key**.
2. Write a single script to fetch *real* live stats for `@CasualGeographic`.
3. Connect that real number to the dashboard to replace the simulation.
