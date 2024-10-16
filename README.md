# GoNow

GoNow is a full-stack web application built with **Next.js** and **TypeScript**, designed to help users optimize their holiday plans by tracking real-time prices, managing loyalty points, and sending booking alerts. The project integrates **Google Cloud Provider** to enhance the booking experience.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm, Yarn, pnpm, or Bun (for package management)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/gonow.git
cd gonow
npm install
# or
yarn install
# or
pnpm install
# or
bun install


npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Before running the project, make sure to create a .env or .env.local file in the root directory and add the following environment variables:

GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
NEXTAUTH_SECRET=<your-nextauth-secret>
