# README for Next.js Lead Management Application

## Overview

This project is a Next.js application designed for managing leads. It includes a public lead submission form and an internal lead management interface. Users can submit their information through the public form, while internal users can view, edit, and delete leads.

## Features

- **Public Lead Submission Form**: Users can submit their details, including name, email, LinkedIn profile, and resume.
- **Internal Lead Management Interface**: Internal users can manage leads, including viewing and editing lead information.
- **API for Lead Submissions**: A dedicated API route to handle incoming lead submissions.


## Prerequisites

- Node.js (version 12 or later)
- npm (Node Package Manager)

## Installation

   ```
   npm install

   ```

## Running the Application

To start the development server, run:

```
npm run dev
```

The Leads form will be available at `http://localhost:3000`.

The Leads admin interface will be available at `http://localhost:3000/internal`




## Generating Leads

To generate leads run:
```
node tools/generate-leads.js 150
```

## See Also

* [docs/architecture.txt](docs/architecture.txt)