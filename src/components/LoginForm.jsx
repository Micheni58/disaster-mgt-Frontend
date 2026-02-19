import { useState } from "react";
import { showSuccessToast, showErrorToast, showWarningToast } from "../utils/toastNotifications";

function LoginForm({ onSubmit }){
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

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
            // TODO: replace with real auth request
            // Simulating async request
            await new Promise(res => setTimeout(res, 500));
            
            // Simulating authentication check (this would be replaced with real API call)
            // For demo purposes, accept any email with matching password validation
            if(form.email && form.password.length >= 6) {
                showSuccessToast('✓ Login successful! Welcome back');
                if(onSubmit) onSubmit(form);
            } else {
                showErrorToast('✗ Invalid email or password');
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
        </form>
    )
}

export default LoginForm;