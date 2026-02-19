import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { FaAmbulance, FaMapMarkedAlt, FaUsers, FaClock } from 'react-icons/fa';

function ResponderDash() {
  const { user } = useAuth();

  const activeIncidents = [
    { id: 1, title: 'Fire in District 5', priority: 'High', responders: 12, distance: '2.5 km' },
    { id: 2, title: 'Medical Emergency', priority: 'Medium', responders: 5, distance: '1.2 km' },
    { id: 3, title: 'Road Accident', priority: 'High', responders: 8, distance: '3.1 km' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-64 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.fullName}</h1>
          <p className="text-gray-600 mt-2">Responder Dashboard - {user?.organization}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Incidents</p>
                <p className="text-3xl font-bold text-red-600">5</p>
              </div>
              <FaAmbulance className="text-4xl text-red-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Team Members</p>
                <p className="text-3xl font-bold text-blue-600">24</p>
              </div>
              <FaUsers className="text-4xl text-blue-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Response Time</p>
                <p className="text-3xl font-bold text-green-600">8:42</p>
              </div>
              <FaClock className="text-4xl text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Responses Today</p>
                <p className="text-3xl font-bold text-orange-600">18</p>
              </div>
              <FaMapMarkedAlt className="text-4xl text-orange-200" />
            </div>
          </div>
        </div>

        {/* Active Incidents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Active Incidents</h2>
            <div className="space-y-4">
              {activeIncidents.map(incident => (
                <div key={incident.id} className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      incident.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {incident.priority}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>👥 {incident.responders} responders</span>
                    <span>📍 {incident.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                Emergency Response
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Response Map
              </button>
              <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                Team Communication
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResponderDash;
