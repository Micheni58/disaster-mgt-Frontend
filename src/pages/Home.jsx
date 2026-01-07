import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
        <div>
            <div>
                <Navbar />
            </div>
        <main className="bg-green-50 border-gray-50 mt-10 p-4 ">
            <section className="flex w-full gap-10">
                <div className="w-1/2">
                    <span className="border rounded-3xl py-2 px-2 border-green-200 bg-green-50 text-green-700 font-medium">
                        <span className="text-green-500 ml-1 animate-ping ">.</span>Real-time Emergency Response
                    </span>
                    <div className="mt-5 text-5xl font-bold">
                        <h1><span className="">Saving Lives Through</span><br />
                        <span className="text-green-700">Rapid Response</span></h1>
                    </div>
                    <div className="mt-10 text-lg">
                        <p>Advanced disaster crisis management platform connecting citizens, 
                            responders, and officials for coordinated emergency response and 
                            community resilience.
                        </p>
                    </div>
                    <div className="mt-10 flex gap-6  ">
                        <a href="" className="bg-green-700 py-4 px-8 shadow-lg text-white font-medium rounded-2xl hover:shadow-2xl">Report Incident</a>
                        <a href="" className="bg-white py-4 px-8 border border-gray-100 rounded-2xl hover:bg-gray-50">Join as Responder</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-white rounded-2xl py-4 px-6">
                        <span>Icon</span>
                        <span>23</span>
                        <p>Active Incidents</p>
                        <p>-12% from Yesterday</p>
                    </div>
                    <div className="bg-white rounded-2xl py-4 px-6">
                        <span>Icon</span>
                        <span>23</span>
                        <p>Active Incidents</p>
                        <p>-12% from yesyerday</p>
                    </div>
                    <div className="bg-white rounded-2xl py-4 px-6">
                        <span>Icon</span>
                        <span>23</span>
                        <p>Active Incidents</p>
                        <p>-12% from yesyerday</p>
                    </div>
                    <div className="bg-white rounded-2xl py-4 px-6">
                        <span>Icon</span>
                        <span>23</span>
                        <p>Active Incidents</p>
                        <p>-12% from yesyerday</p>
                    </div>
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