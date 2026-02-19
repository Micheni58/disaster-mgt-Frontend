import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { FaChartLine, FaUsers, FaFileAlt, FaMapMarkedAlt } from 'react-icons/fa';

function AdminDashboard() {
  const { user } = useAuth();

  const systemStats = [
    { id: 1, title: 'Total Citizens', count: 2540, change: '+12%' },
    { id: 2, title: 'Active Responders', count: 156, change: '+5%' },
    { id: 3, title: 'Total Incidents', count: 890, change: '+8%' },
    { id: 4, title: 'System Health', count: '99.8%', change: 'Excellent' },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Reported flood incident', time: '10 mins ago', type: 'report' },
    { id: 2, user: 'Jane Smith', action: 'Completed response', time: '25 mins ago', type: 'response' },
    { id: 3, user: 'Fire Department', action: 'Deployed to incident', time: '1 hour ago', type: 'dispatch' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-64 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System Overview & Analytics - {user?.organization}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {systemStats.map(stat => (
            <div key={stat.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">{stat.count}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <FaChartLine className="text-4xl text-green-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activities */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 border-l-4 border-green-600 bg-gray-50 rounded">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full capitalize">
                    {activity.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Tools</h2>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                <FaUsers /> Manage Users
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <FaChartLine /> View Analytics
              </button>
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2">
                <FaFileAlt /> Export Reports
              </button>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
                <FaMapMarkedAlt /> System Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
