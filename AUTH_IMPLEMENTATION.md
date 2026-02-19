# Authentication & Dashboard Implementation Guide

## Overview
This document outlines the implemented authentication system and dashboard routing for the Disaster Management Frontend.

## Demo User Accounts

Use these credentials to test the different user roles:

### Citizen Account
- **Email:** citizen@disaster.com
- **Password:** Citizen@123
- **Dashboard:** /dashboard/citizen

### Responder Account
- **Email:** responder@disaster.com
- **Password:** Responder@123
- **Dashboard:** /dashboard/responder
- **Organization:** Fire Department

### Officer (Admin) Account
- **Email:** officer@disaster.com
- **Password:** Officer@123
- **Dashboard:** /dashboard/admin
- **Organization:** Disaster Management Authority

---

## Features Implemented

### 1. AuthContext (`src/context/AuthContext.jsx`)
- Manages global authentication state
- Provides `useAuth()` hook for accessing user data and auth methods
- Includes `login()`, `logout()`, and `signup()` methods
- Simulates server responses with 1-second delays
- Currently uses hardcoded users (can be replaced with real API calls)

### 2. Protected Routes (`src/components/ProtectedRoute.jsx`)
- Checks if user is authenticated before accessing protected pages
- Redirects unauthenticated users to login page
- Validates user role for dashboard access

### 3. Dashboards
Each user role has a dedicated dashboard with role-specific features:

#### Citizen Dashboard (`src/pages/Citizen/CitizenDashboard.jsx`)
- Report incidents
- Track personal reports
- View recent incidents
- Statistics on reports and response times

#### Responder Dashboard (`src/pages/Responder/ResponderDash.jsx`)
- View active incidents
- Manage response teams
- Track response metrics
- Emergency response tools

#### Admin/Officer Dashboard (`src/pages/Admin/AdminDashboard.jsx`)
- System analytics and statistics
- User management
- Report management
- System configuration

### 4. Sidebar Navigation (`src/components/Sidebar.jsx`)
- Role-based navigation menu
- Mobile-responsive with toggle
- Quick logout feature
- User profile display
- Different menu items per role

### 5. Updated Components
- **Navbar:** Shows user info when logged in, displays logout button, dashboard link
- **LoginForm:** Integrates with AuthContext, shows demo credentials
- **SignUpForm:** Creates accounts, redirects to appropriate dashboard
- **App.jsx:** Wraps application with AuthProvider

---

## How It Works

### Login Flow
1. User enters email and password in LoginForm
2. AuthContext validates against hardcoded users
3. On success:
   - User data stored in context
   - Toast notification displayed
   - Redirected to role-specific dashboard
4. ProtectedRoute checks authentication on each protected page

### Signup Flow
1. User selects role and fills form
2. On submission:
   - New user created in context (simulated)
   - Automatically logged in
   - Redirected to appropriate dashboard

### Logout Flow
1. User clicks logout button (Navbar or Sidebar)
2. User data cleared from context
3. Redirected to home page
4. Cannot access protected routes

---

## File Structure
```
src/
├── context/
│   └── AuthContext.jsx          # Auth state & logic
├── components/
│   ├── Sidebar.jsx              # Navigation sidebar
│   ├── ProtectedRoute.jsx       # Route protection
│   ├── Navbar.jsx               # Updated with auth
│   ├── LoginForm.jsx            # Updated with auth
│   └── SignUpForm.jsx           # Updated with auth
├── pages/
│   ├── Citizen/
│   │   └── CitizenDashboard.jsx
│   ├── Responder/
│   │   └── ResponderDash.jsx
│   └── Admin/
│       └── AdminDashboard.jsx
└── routes/
    └── Route.jsx                # Updated with new routes
```

---

## Extending the System

### To Add Real Backend Integration:
1. Replace mock users in `AuthContext.jsx` with real API calls
2. Update `login()` function to call your authentication endpoint
3. Add token management (JWT, etc.)
4. Implement persistent login (localStorage, etc.)

### To Add More Features:
1. Create new pages in respective role folders
2. Update Sidebar menu items in `src/components/Sidebar.jsx`
3. Add routes in `src/routes/Route.jsx`
4. Use `useAuth()` hook to access user data

### To Customize Dashboard:
1. Edit dashboard components in `src/pages/[Role]/[DashboardName].jsx`
2. Update color scheme (currently uses green and blue)
3. Add more widgets and statistics

---

## Toast Notifications

The system integrates with Sonner toast library. Use in any component:

```javascript
import { showSuccessToast, showErrorToast, showWarningToast } from '../utils/toastNotifications';

showSuccessToast('Success message');
showErrorToast('Error message');
showWarningToast('Warning message');
```

---

## Testing the System

1. Start the dev server: `npm run dev`
2. Navigate to `/login` or `/signup`
3. Use demo credentials above to login
4. Verify dashboard loads for correct role
5. Test sidebar navigation
6. Try logging out
7. Verify redirect to login when accessing protected routes without auth

---

## Notes

- All user data is stored in React Context (not persistent between page refreshes)
- Passwords are in plain text in the mock data (not for production)
- API calls are simulated with 1-second delays
- No backend/database currently - using hardcoded demo data
