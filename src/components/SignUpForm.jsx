import { useState } from "react";
import { FaUser, FaAmbulance, FaUserShield, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function SignUpForm(){
    const [selectedRole, setSelectedRole] = useState('Citizen');
    const [form, setForm] = useState({ fullName: '', email: '', phone: '', organization: '', password: '', confirm: '' });
    const [agree, setAgree] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const password = form.password || '';
    const validations = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        numberOrSpecial: /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
    }
    const passwordValid = Object.values(validations).every(v => v === true);
    const passwordsMatch = password && form.confirm === password;
    const formValid = form.fullName && form.email && passwordValid && passwordsMatch && agree;

    return(
        <div className="w-full flex items-center justify-center p-6">
            <form action="" className="bg-white max-w-lg w-full p-6 rounded-lg shadow-md">
                <label className="font-medium block mb-3">Select Your Role</label>
                <div className="flex justify-between gap-4 mb-6">
                    <button type="button" onClick={() => setSelectedRole('Citizen')} className={`flex-1 flex flex-col items-center p-4 rounded-2xl border-2 ${selectedRole==='Citizen' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:bg-green-50'}`}>
                        <FaUser className="text-2xl mb-2" />
                        <h2 className="font-semibold">Citizen</h2>
                        <p className="text-sm text-gray-500">Report Incidents</p>
                    </button>
                    <button type="button" onClick={() => setSelectedRole('Responder')} className={`flex-1 flex flex-col items-center p-4 rounded-2xl border-2 ${selectedRole==='Responder' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:bg-green-50'}`}>
                        <FaAmbulance className="text-2xl mb-2" />
                        <h2 className="font-semibold">Responder</h2>
                        <p className="text-sm text-gray-500">Emergency Personnel</p>
                    </button>
                    <button type="button" onClick={() => setSelectedRole('Officer')} className={`flex-1 flex flex-col items-center p-4 rounded-2xl border-2 ${selectedRole==='Officer' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:bg-green-50'}`}>
                        <FaUserShield className="text-2xl mb-2" />
                        <h2 className="font-semibold">Officer</h2>
                        <p className="text-sm text-gray-500">System Admin</p>
                    </button>
                </div>

                <label className="block">Full Name</label>
                <input 
                    type="text" 
                    name="fullName" 
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={handleChange}
                    className="p-2 border border-gray-600 focus-within:outline-2 focus-within:outline-green-600 w-full rounded-lg mb-4"
                 />

                <label className="block">Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="p-2 border border-gray-600 focus-within:outline-2 focus-within:outline-green-600 w-full rounded-lg mb-4"
                    />

                <label className="block">Phone Number</label>
                <input 
                    type="tel"
                    name="phone" 
                    placeholder="+254 000 000"
                    value={form.phone}
                    onChange={handleChange}
                    className="p-2 border border-gray-600 focus-within:outline-2 focus-within:outline-green-600 w-full rounded-lg mb-4"
                    />

                {selectedRole !== 'Citizen' && (
                    <>
                        <label className="block">Organization</label>
                        <input 
                            type="text"
                            name="organization" 
                            placeholder="Fire Department"
                            value={form.organization}
                            onChange={handleChange}
                            className="p-2 border border-gray-600 focus-within:outline-2 focus-within:outline-green-600 w-full rounded-lg mb-4"
                        />
                    </>
                )}

                <label className="block">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Min. 8 characters"
                    value={form.password}
                    onChange={handleChange}
                    className="p-2 border border-gray-600 focus-within:outline-2 focus-within:outline-green-600 w-full rounded-lg mb-4"
                    />

                <label className="block">Confirm Password</label>
                <input 
                    type="password" 
                    name="confirm" 
                    placeholder="Confirm password"
                    value={form.confirm}
                    onChange={handleChange}
                    className="p-2 border border-gray-600 focus-within:outline-2 focus-within:outline-green-600 w-full rounded-lg mb-4"
                    />

                <div className="bg-gray-50 mt-2 border border-gray-100 rounded-sm p-3 mb-3">
                    <h3 className="font-medium mb-2">Password Requirements:</h3>
                    <div className="flex items-center gap-2 text-sm">
                        {validations.length ? <FaCheckCircle className="text-green-600" /> : <FaTimesCircle className="text-red-500" />}
                        <span>At least 8 characters</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        {validations.uppercase ? <FaCheckCircle className="text-green-600" /> : <FaTimesCircle className="text-red-500" />}
                        <span>One uppercase letter</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        {validations.numberOrSpecial ? <FaCheckCircle className="text-green-600" /> : <FaTimesCircle className="text-red-500" />}
                        <span>One number or special character</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2">
                        {passwordsMatch ? <FaCheckCircle className="text-green-600" /> : <FaTimesCircle className="text-red-500" />}
                        <span>Passwords match</span>
                    </div>
                </div>

                <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                    <span className="text-sm">I agree to the terms of service and privacy policy</span>
                </label>

                <button disabled={!formValid} className={`w-full px-2 py-2 rounded-sm mt-2 text-white font-medium ${formValid ? 'bg-green-700 hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'}`}>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;