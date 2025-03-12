# Objective

1. Collect lead information from users: personal details, visa, and a resume.
2. Provide an admin UI for creating, retrieving, and updating leads.

## Requirements

* Use React + Next.js, optional TypeScript
* Use css-in-js
* Collect the following information:
  * First Name, Last Name, Email, LinkedIn Profile, Visas of Interest (multi-select), Resume/CV Upload (file upload), Additional Information (long text input)
* Validate all inputs
* UI should match provided screenshots

## Proposed Architecture

* TypeScript, React, Next.js
* styled-components
* react-select-country-list to provide a list of countries
* react-data-table-component to display the leads

## Major Components

### 1. PublicLeadForm
* Render individual fields
* Validate inputs
* Submit to backend

### 2. InternalLeadManagement
* Load leads
* Display in a table that allows managing state (Pending <--> ReachedOut)

## API Endpoints

### Create Lead: `/api/leads`
* **Method:** POST
* **Description:** Creates a new lead with the provided data.
* **Request Body:**
  ```json
  {
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "linkedInProfile": "string",
      "visasOfInterest": ["string"],
      "resume": "string (base64 encoded file)",
      "additionalInfo": "string",
      "countryOfCitizenship": "string"
  }
  ```
* **Response:**
  * **Success:** 201 Created
  * **Error:** 400 Bad Request

### Get Leads: `/api/leads`
* **Method:** GET
* **Description:** Retrieves a list of all leads.
* **Response:**
  ```json
  [
      {
          "id": "number",
          "firstName": "string",
          "lastName": "string",
          "email": "string",
          "linkedInProfile": "string",
          "submitted": "string (ISO 8601 date)",
          "status": "string",
          "country": "string"
      }
  ]
  ```
  * **Success:** 200 OK
  * **Error:** 500 Internal Server Error

### Update Lead: `/api/leads/:id`
* **Method:** PUT
* **Description:** Updates the lead data for the specified ID.
* **Request Body:**
  ```json
  {
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "linkedInProfile": "string",
      "visasOfInterest": ["string"],
      "resume": "string (base64 encoded file)",
      "additionalInfo": "string",
      "countryOfCitizenship": "string",
      "status": "number"
  }
  ```
* **Response:**
  * **Success:** 200 OK
  * **Error:** 400 Bad Request

## Potential Improvements

* Use a form handling library (Formik or react-hook-form)
* Add i18n and translations (since the target audience is international applicants)
* Use a state management solution (e.g., Redux) for maintaining state
* Implement API routes
* Use a persistent storage (e.g., MongoDB)
* Implement pagination in API
* Add Cypress tests for each top-level component
* Add Storybook for documentation

