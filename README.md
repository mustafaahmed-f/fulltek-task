# Zendesk-like Ticket Page

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue?logo=tailwindcss)

A modern ticket management interface built with React, TypeScript, shadcn-ui, Tailwind CSS, and Jotai for state management.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [Technologies](#technologies)
- [Problems I faced](#problems-i-faced)
- [Deployment](#deployment)

## Project Overview

This is a Fulltek task project that recreates a Zendesk-like ticket page interface. The application features a responsive ticket management system with chat functionality, built using modern React patterns and styling frameworks.

## Setup Instructions

Follow these steps to get the project running locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (or the port displayed in your terminal).

## How to Use

- **View Tickets**: Browse through the ticket list with mock data
- **Add Messages**: Type a message in the text input and click the "Send" button to add it to the chat container
- **Drag Support**: Drag functionality is fully operational for ticket interactions
- **Expand/Collapse**: Use the expand/collapse sections to view ticket details

## Technologies

This project is built with:

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **shadcn-ui** - Component library
- **Tailwind CSS** - Styling
- **Jotai** - State management

## Problems I faced

The following issues are currently present:

1. **Expand/Collapse Icons**: The expand/collapse icons don't function properly, though dragging works as expected.
2. **Fast Replies Scrollbar**: The vertical scrollbar in the fast replies section of the text editor is not working. Horizontal scroll functions normally.
3. **Text Editor**: Initially attempted to integrate Plate.js as the text editor but encountered installation errors. As a workaround, a simple textarea is currently used. This is acceptable for the current static implementation with mock data. Full message functionality is still operational.

## Deployment

This project is deployed on **Netlify**:

🚀 **Live Demo**: [https://fulltektask.netlify.app/](https://fulltektask.netlify.app/)

Replace the URL above with your actual Netlify deployment link.
