import { useState } from "react";

function LoginForm({ onSubmit }){
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if(!form.email || !form.password){
            setError('Please enter email and password');
            return;
        }
        setLoading(true);
        try{
            // TODO: replace with real auth request
            await new Promise(res => setTimeout(res, 500));
            if(onSubmit) onSubmit(form);
        }catch(err){
            setError('Login failed');
        }finally{
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Sign in to your account</h2>

            {error && <div className="text-sm text-red-600 mb-3">{error}</div>}

            <label className="block text-sm">Email</label>
            <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            type="email" 
            placeholder="you@example.com" 
            className="w-full p-2 border border-gray-500  rounded mb-4  focus-within:outline-2 focus-within:outline-green-600" 
            />

            <label className="block text-sm">Password</label>
            <input 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            type="password" 
            placeholder="Your password" 
            className="w-full p-2 border border-gray-500 rounded mb-4  focus-within:outline-2 focus-within:outline-green-600" 
            />

            <button disabled={loading} className={`w-full py-2 rounded ${loading ? 'bg-gray-400' : 'bg-green-600 text-white'}`}>
                {loading ? 'Signing in...' : 'Sign in'}
            </button>
        </form>
    )
}

export default LoginForm;