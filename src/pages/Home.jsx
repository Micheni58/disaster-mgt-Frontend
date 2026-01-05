import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
        <div className="min-h-screen">
            <div>
                <Navbar />
            </div>

            <div className="text-center py-16 px-6 bg-slate-50">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    Saving Lives Through Timely Information
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    A smart disaster management platform designed to inform, guide, and support
                    communities before, during, and after disasters.
                </p>

                <img
                    src="https://cdn.pixabay.com/photo/2017/09/06/13/56/armageddon-2721568_1280.jpg"
                    alt="Disaster awareness illustration"
                    className="mx-auto mt-8 max-w-md"
                />
            </div>

            <section className="py-16 px-6 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-10">
                Understanding Disasters
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-xl mb-3">What is a Disaster?</h3>
                <p className="text-slate-600">
                    A disaster is a sudden event that causes serious disruption to people,
                    property, or the environment, often exceeding the affected community’s
                    ability to cope.
                </p>
                </div>

                <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Types of Disasters</h3>
                <ul className="text-slate-600 list-disc pl-5 space-y-2">
                    <li>Floods</li>
                    <li>Earthquakes</li>
                    <li>Fires</li>
                    <li>Droughts</li>
                    <li>Road & Industrial Accidents</li>
                </ul>
                </div>

                <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-xl mb-3">When to Use This App</h3>
                <p className="text-slate-600">
                    Use this platform when you are affected by or aware of a disaster,
                    need guidance, want to report an incident, or seek real-time alerts.
                </p>
                </div>
            </div>
            </section>

           <section className="py-16 px-6 bg-red-50 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-red-700">
                Are You Currently Affected by a Disaster?
            </h2>

            <p className="text-slate-700 max-w-xl mx-auto mb-8">
                If you are experiencing a disaster or witnessing one, report it immediately
                to receive guidance and help authorities respond faster.
            </p>

            <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Yes, I Need Help
                </button>

                <button className="px-6 py-3 bg-slate-200 rounded-lg hover:bg-slate-300">
                View Ongoing Disasters
                </button>
            </div>

            {/* Later: Live disaster data from APIs */}
            </section>

           <section className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-semibold text-center mb-12">
    How Disaster Management Works
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
    <div>
      <h3 className="font-bold text-lg mb-2">1. Preparedness</h3>
      <p className="text-slate-600">
        Educating communities and sharing early warnings before disasters occur.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">2. Response</h3>
      <p className="text-slate-600">
        Immediate reporting, emergency alerts, and guidance during disasters.
      </p>
        </div>

            <div>
            <h3 className="font-bold text-lg mb-2">3. Recovery</h3>
            <p className="text-slate-600">
                Supporting victims and restoring affected areas after disasters.
            </p>
            </div>

            <div>
            <h3 className="font-bold text-lg mb-2">4. Mitigation</h3>
            <p className="text-slate-600">
                Reducing future risks through data analysis and planning.
            </p>
            </div>
        </div>
        </section>

          <section className="py-16 px-6 bg-slate-900 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">
                Stay Informed. Stay Safe.
            </h2>

            <p className="max-w-xl mx-auto mb-8 text-slate-300">
                Join thousands of users receiving real-time alerts, safety guidance, and
                disaster updates in their area.
            </p>

            <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700">
                Get Started
                </button>

                <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-slate-900">
                Learn More
                </button>
            </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
        </>
    )
}
export default Home;