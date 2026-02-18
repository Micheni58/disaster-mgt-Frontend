import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function Login(){
    const handleLogin = (data) => {
        console.log('Login data:', data);
        // TODO: redirect or set auth state
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-green-900 to-green-400  items-center">
            <Navbar />
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="px-4">
                        <div className="max-w-md mx-auto">
                            <LoginForm onSubmit={handleLogin} />
                        </div>
                    </div>

                    <div className="text-white px-4">
                        <div className="sticky top-24 self-start">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-white/20 rounded-full p-3">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                        <path d="M12 2L15 8H9L12 2Z" fill="white" opacity="0.9"/>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Welcome Back</h2>
                                    <p className="text-sm opacity-90">Access your dashboard and manage incidents</p>
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold mb-4">Welcome back</h1>
                            <p className="mb-6 text-lg opacity-90">Sign in to continue coordinating and responding to incidents quickly.</p>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="bg-white/20 rounded-full p-2 mt-1">✓</span>
                                    <span className="opacity-95">Quick access to reports</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-white/20 rounded-full p-2 mt-1">✓</span>
                                    <span className="opacity-95">Secure responder channels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-white/20 rounded-full p-2 mt-1">✓</span>
                                    <span className="opacity-95">Real-time alerts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;