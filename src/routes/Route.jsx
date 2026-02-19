import Home from "../pages/Home";
import About from "../pages/About";
import RegisterPage from "../pages/Signup";
import Login from "../pages/Login";
import CitizenDashboard from "../pages/Citizen/CitizenDashboard";
import Report from "../pages/Citizen/Report";
import Reports from "../pages/Citizen/Reports";
import ResponderDash from "../pages/Responder/ResponderDash";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
    { path: "/signup", element: <RegisterPage /> },
    {
        path: "/dashboard/citizen",
        element: (
            <ProtectedRoute allowedRoles={['Citizen']}>
                <CitizenDashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: "/citizen/report",
        element: (
            <ProtectedRoute allowedRoles={['Citizen']}>
                <Report />
            </ProtectedRoute>
        ),
    },
    {
        path: "/citizen/reports",
        element: (
            <ProtectedRoute allowedRoles={['Citizen']}>
                <Reports />
            </ProtectedRoute>
        ),
    },
    {
        path: "/dashboard/responder",
        element: (
            <ProtectedRoute allowedRoles={['Responder']}>
                <ResponderDash />
            </ProtectedRoute>
        ),
    },
    {
        path: "/dashboard/admin",
        element: (
            <ProtectedRoute allowedRoles={['Officer']}>
                <AdminDashboard />
            </ProtectedRoute>
        ),
    },
];

export default routes;