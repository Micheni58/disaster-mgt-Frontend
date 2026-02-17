import SignUpForm from "../components/SignUpForm";

function RegisterPage(){
    return (
        <div className="min-h-screen bg-linear-to-br from-green-600 to-green-500 flex items-center">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-white px-4">
                        <div className="sticky top-24 self-start">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-white/20 rounded-full p-3">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M12 2L15 8H9L12 2Z" fill="white" opacity="0.9"/>
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Crisis Manager</h2>
                                <p className="text-sm opacity-90">Secure incident reporting & response</p>
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold mb-4">Create your account</h1>
                        <p className="mb-6 text-lg opacity-90">Join the community to report incidents, coordinate responders and manage emergencies effectively.</p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="bg-white/20 rounded-full p-2 mt-1">
                                    ✓
                                </span>
                                <span className="opacity-95">Fast incident reporting</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-white/20 rounded-full p-2 mt-1">✓</span>
                                <span className="opacity-95">Verified responders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-white/20 rounded-full p-2 mt-1">✓</span>
                                <span className="opacity-95">Secure data handling</span>
                            </li>
                        </ul>
                        </div>
                    </div>

                    <div className="px-4">
                        <div className="max-w-xl mx-auto">
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;