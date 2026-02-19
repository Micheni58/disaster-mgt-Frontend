import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { FaFileAlt, FaMapMarkedAlt, FaBell, FaClock } from 'react-icons/fa';

function CitizenDashboard() {
  const { user } = useAuth();

  const recentIncidents = [
    { id: 1, title: 'Flooding in downtown', status: 'In Progress', time: '2 hours ago' },
    { id: 2, title: 'Traffic accident', status: 'Resolved', time: '4 hours ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-64 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.fullName}</h1>
          <p className="text-gray-600 mt-2">Citizen Dashboard - Report and track incidents in your area</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Reports</p>
                <p className="text-3xl font-bold text-green-600">12</p>
              </div>
              <FaFileAlt className="text-4xl text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Reports</p>
                <p className="text-3xl font-bold text-blue-600">3</p>
              </div>
              <FaBell className="text-4xl text-blue-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Resolved</p>
                <p className="text-3xl font-bold text-green-600">9</p>
              </div>
              <FaMapMarkedAlt className="text-4xl text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Response Time</p>
                <p className="text-3xl font-bold text-orange-600">2.5h</p>
              </div>
              <FaClock className="text-4xl text-orange-200" />
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Reports</h2>
            <div className="space-y-4">
              {recentIncidents.map(incident => (
                <div key={incident.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{incident.title}</h3>
                    <p className="text-sm text-gray-600">{incident.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    incident.status === 'Resolved' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {incident.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Report New Incident
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Area Map
              </button>
              <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                Help & Resources
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CitizenDashboard;
