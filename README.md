# Secure Flow React Application
https://secure-flow-app.vercel.app/


This is a sample React application designed to demonstrate a secure user authentication and configuration workflow. It includes pages for Sign-In/Sign-Up, a mandatory configuration step, and a protected dashboard accessible only to authenticated and configured users. The application is built with modern web technologies including React, TypeScript, and Tailwind CSS.

## Features

- **Authentication:** Users can either sign up for a new account or sign in with existing credentials.
- **Form Validation:** All input fields have client-side validation to ensure data integrity.
- **Protected Routes:** The configuration and dashboard pages are protected and can only be accessed after successful login.
- **State Management:** Uses React Context API for managing authentication state across the application.
- **Responsive Design:** The UI is built with Tailwind CSS and is responsive across various screen sizes.
- **Component-Based Architecture:** The application is structured with reusable components for better code organization and maintainability.

## Tech Stack

- **Frontend:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Module Bundler:** Vite (inferred from the project setup)

## Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable UI components (Button, Input, Card, etc.)
│   │   └── icons/        # SVG icon components
│   ├── context/          # React Context for state management (AuthContext)
│   ├── hooks/            # Custom React hooks (useAuth)
│   ├── pages/            # Page components for different routes (Auth, Configure, Dashboard)
│   ├── App.tsx           # Main application component with routing logic
│   └── index.tsx         # Application entry point
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Authentication Flow

The application enforces a specific workflow to ensure security and proper setup:

1.  **Authentication:** A new user first lands on the `AuthPage`, where they can either sign up or sign in.
2.  **Configuration:** Upon successful authentication, the user is redirected to the `ConfigurePage`. Access to the main application dashboard is blocked until they complete this step.
3.  **Verification:** The user must enter a valid public key (simulated by specific length requirements in this demo).
4.  **Dashboard Access:** After successfully submitting the configuration, the user is granted access to the `DashboardPage`.
5.  **Session Persistence:** If the user revisits the app, their session is checked. If they are logged in and configured, they are taken directly to the dashboard. If they are logged in but not configured, they are redirected to the `ConfigurePage`.
6.  **Logout:** Users can log out from the dashboard, which clears their session and redirects them back to the `AuthPage`.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://your-repository-url.com
    ```
2.  Navigate to the project directory:
    ```sh
    cd secure-flow-app
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view it in the browser.

### Building for Production

To create a production-ready build, run:

```sh
npm run build
```

This will create a `dist` folder with the optimized and minified application files.
"# secure-flow-app" 
