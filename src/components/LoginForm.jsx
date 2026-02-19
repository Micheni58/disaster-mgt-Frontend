import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { showSuccessToast, showErrorToast, showWarningToast } from "../utils/toastNotifications";

function LoginForm({ onSubmit }){
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!form.email || !form.password){
            showWarningToast('Please enter email and password');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            showErrorToast('Please enter a valid email address');
            return;
        }

        setLoading(true);
        try{
            const result = await login(form.email, form.password);
            
            if(result.success) {
                showSuccessToast(`✓ Login successful! Welcome ${result.user.fullName}`);
                
                // Redirect to appropriate dashboard
                setTimeout(() => {
                    if(result.user.role === 'Citizen') {
                        navigate('/dashboard/citizen');
                    } else if(result.user.role === 'Responder') {
                        navigate('/dashboard/responder');
                    } else if(result.user.role === 'Officer') {
                        navigate('/dashboard/admin');
                    }
                }, 1000);
                
                if(onSubmit) onSubmit(form);
            } else {
                showErrorToast(`✗ ${result.error}`);
            }
        }catch(err){
            showErrorToast('Login failed. Please try again');
        }finally{
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Sign in to your account</h2>

            <label className="block text-sm">Email</label>
            <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            type="email" 
            placeholder="you@example.com" 
            className="w-full p-2 border border-gray-500 rounded mb-4 focus-within:outline-2 focus-within:outline-green-600" 
            />

            <label className="block text-sm">Password</label>
            <input 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            type="password" 
            placeholder="Your password" 
            className="w-full p-2 border border-gray-500 rounded mb-4 focus-within:outline-2 focus-within:outline-green-600" 
            />

            <button disabled={loading} className={`w-full py-2 rounded ${loading ? 'bg-gray-400' : 'bg-green-600 text-white'}`}>
                {loading ? 'Signing in...' : 'Sign in'}
            </button>

            {/* Demo users info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-sm">
                <p className="font-semibold text-blue-900 mb-2">Demo Accounts:</p>
                <div className="space-y-1 text-blue-800">
                    <p><strong>Citizen:</strong> citizen@disaster.com / Citizen@123</p>
                    <p><strong>Responder:</strong> responder@disaster.com / Responder@123</p>
                    <p><strong>Officer:</strong> officer@disaster.com / Officer@123</p>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;