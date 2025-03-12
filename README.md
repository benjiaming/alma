# README for Next.js Lead Management Application

## Overview

This project is a Next.js application designed for managing leads. It includes a public lead submission form and an internal lead management interface. Users can submit their information through the public form, while internal users can view, edit, and delete leads.

## Features

- **Public Lead Submission Form**: Users can submit their details, including name, email, LinkedIn profile, and resume.
- **Internal Lead Management Interface**: Internal users can manage leads, including viewing and editing lead information.
- **API for Lead Submissions**: A dedicated API route to handle incoming lead submissions.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd nextjs-lead-management
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

### Project Structure

```
nextjs-lead-management
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── PublicLeadForm.tsx
│   │   └── InternalLeadManagement.tsx
│   ├── pages
│   │   ├── api
│   │   │   └── leads.ts
│   │   ├── index.tsx
│   │   └── internal.tsx
│   └── styles
│       ├── globals.css
│       └── Home.module.css
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.