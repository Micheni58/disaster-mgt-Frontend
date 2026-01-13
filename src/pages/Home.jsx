import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
    FaFire,
    FaWater, 
    FaHospital, 
    FaBolt, 
    FaUserFriends,
    FaShieldAlt,
    FaBell,
    FaChartLine,
    FaMapMarkedAlt,
    FaClock,
    FaCheckCircle,
    FaWind,
    FaAmbulance,
    FaIndustry,
    FaThermometerHalf
 } from "react-icons/fa";
import { MdCrisisAlert } from "react-icons/md";

function Home(){
    return(
        <>
        <div>
            <div>
                <Navbar />
            </div>
            <main>
            <section className="bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="flex w-full gap-10 ">
                        <div className="w-1/2">
                            <span className="border rounded-3xl py-2 px-2 border-green-200 bg-green-50 text-green-700 font-medium">
                                <span className="text-green-500 ml-1 animate-ping">.</span>Real-time Emergency Response
                            </span>
                            <div className="mt-5 text-5xl font-bold">
                                <h1><span>Saving Lives Through</span><br />
                                <span className="text-green-700">Rapid Response</span></h1>
                            </div>
                            <div className="mt-10 text-lg">
                                <p>Advanced disaster crisis management platform connecting citizens, responders, and officials for coordinated emergency response and community resilience.</p>
                            </div>
                            <div className="mt-10 flex gap-6">
                                <a href="" className="bg-green-700 py-4 px-8 shadow-lg text-white font-medium rounded-2xl hover:shadow-2xl">Report Incident</a>
                                <a href="" className="bg-white py-4 px-8 border border-gray-100 rounded-2xl hover:bg-gray-50">Join as Responder</a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10 w-1/2">
                          <div className="bg-white rounded-2xl py-6 px-6 hover:shadow-lg border border-gray-100  grid gap-3">
                            <FaFire className="text-red-500 w-8 h-8" />
                            <span className="font-bold text-3xl">23</span>
                            <p className="text-gray-700">Active Incidents</p>
                            <p className="text-green-600 text-sm">-12% from Yesterday</p>
                            </div>

                            <div className="bg-white rounded-2xl py-4 px-6 hover:shadow-lg border border-gray-100 grid">
                                <span>
                                    <FaCheckCircle className="mx-auto text-emerald-500 w-8 h-8" />
                                </span>
                                <span className="font-bold text-3xl">147</span>
                                <p>Resolved today</p>
                                <p className="text-green-600">+8% from yesterday</p>
                            </div>
                            <div className="bg-white rounded-2xl py-4 px-6 hover:shadow-lg border border-gray-100 grid">
                                <span>
                                    <FaUserFriends className="mx-auto text-sky-600 w-8 h-8" />
                                </span>
                                <span className="font-bold text-3xl">89</span>
                                <p>Active Responders</p>
                                <p className="text-green-600">Available Now</p>
                            </div>
                            <div className="bg-white rounded-2xl py-4 px-6 hover:shadow-lg border border-gray-100 grid">
                                <span>
                                    <FaClock className="mx-auto text-indigo-600 w-8 h-8" />
                                </span>
                                <span className="font-bold text-3xl">4.2 min</span>
                                <p>Avg Response Time</p>
                                <p className="text-green-600">-30% Faster</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center">
                        <h1 className="font-bold text-4xl">Comprehensive Crisis Management</h1>
                        <p className="mt-8">Everything you need to manage disasters effectively and protect communities</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-7 gap-10">
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-green-50">
                            <span>
                                <FaMapMarkedAlt className="mx-auto text-red-500 w-8 h-8" />
                            </span>
                            <h2 className="text-center font-bold mt-2">Real-time tracking</h2>
                            <p>Live incident mapping with GPS coordinates, severity levels, and automatic responder dispatch.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-green-50">
                            <span>
                                <FaBell className="mx-auto text-orange-500 w-8 h-8" />
                            </span>
                            <h2 className="text-center font-bold mt-2">Instant alerts</h2>
                            <p>Push notifications and SMS alerts for critical incidents, ensuring rapid response times.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-green-50">
                            <span>
                                <FaChartLine className="mx-auto text-indigo-600 w-8 h-8" />
                            </span>
                            <h2 className="text-center font-bold mt-2">Analytics Dashboard</h2>
                            <p>Comprehensive reporting and insights to improve emergency response strategies.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-green-50">
                            <span>
                                <FaUserFriends className="mx-auto text-sky-600 w-8 h-8" />
                            </span>
                            <h2 className="text-center font-bold mt-2">Team Coordination</h2>
                            <p>Seamless collaboration between responders, officials, and emergency services.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-green-50">
                            <span>
                                <FaShieldAlt className="mx-auto text-gray-700 w-8 h-8" />
                            </span>
                            <h2 className="text-center font-bold mt-2">Secure Platform</h2>
                            <p>Enterprise-grade security ensuring data protection and privacy compliance.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-green-50">
                            <span>
                                <MdCrisisAlert className="mx-auto text-yellow-500 w-8 h-8" />
                            </span>
                            <h2 className="text-center font-bold mt-2">Multi-hazard Support</h2>
                            <p>Handle floods, fires, earthquakes, medical emergencies, and more from one platform.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-green-50">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center font-bold text-2xl">
                        <h1>Supported Emergency Types</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaFire className="mx-auto text-red-500 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Fire Emergencies</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaWater className="mx-auto text-blue-500 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Flood Warning</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaHospital className="mx-auto text-teal-600 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Medical Crisis</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaWind className="mx-auto text-gray-700 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Natural Disaster</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaAmbulance className="mx-auto text-red-600 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Security Alert</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaBolt className="mx-auto text-yellow-500 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Power Outage</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaIndustry className="mx-auto text-gray-600 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Infrastructure</h2>
                        </div>
                        <div className="border border-gray-200 bg-white p-4 text-center rounded-2xl hover:shadow-lg h-30">
                            <span>
                                <FaThermometerHalf className="mx-auto text-pink-500 w-8 h-8" />
                            </span>
                            <h2 className="font-semibold">Climate Event</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid sm:grid-cols-1 lg:grid-cols-4 gap-10 text-center border-t border-b border-green-200 mt-10 p-10 bg-green-100 ">
                <div>
                    <p className="font-bold text-green-800 text-4xl">50K+</p>
                    <p>Users Protected</p>
                </div>
                <div>
                    <p className="font-bold text-green-800 text-4xl">99.9%</p>
                    <p>Uptime Reliability</p>
                </div>
                <div>
                    <p className="font-bold text-green-800 text-4xl">2.5min</p>
                    <p>Avg Response Time</p>
                </div>
                <div>
                    <p className="font-bold text-green-800 text-4xl">24/7</p>
                    <p>Support Available</p>
                </div>
            </section>
        </main>
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
}
export default Home;