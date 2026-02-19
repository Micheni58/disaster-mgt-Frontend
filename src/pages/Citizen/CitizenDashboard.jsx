import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { FaFileAlt, FaMapMarkedAlt, FaBell, FaClock, FaCalendar, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function CitizenDashboard() {
  const { user } = useAuth();

  const recentIncidents = [
    { id: 1, number: 'INC-2026-089', title: 'Flooding in downtown', location: 'Downtown Area', status: 'In Progress', time: '2 hours ago' },
    { id: 2, number: 'INC-2026-088', title: 'Traffic accident', location: 'Highway 101', status: 'Resolved', time: '4 hours ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-64 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back, {user?.fullName}</h1>
          <p className="text-gray-600 mt-2">Stay informed and report emergencies in your community.</p>
        </div>

        {/* Report an Emergency Card */}
        <div className='bg-green-700 p-8 text-white mb-8 rounded-lg flex items-center justify-between relative'>
            <div className='flex-1 z-10'>
                <p className='font-medium text-2xl'>Report an Emergency</p>
                <p className='mt-2'>Help your community by reporting incidents quickly.</p>

                <Link to="/citizen/report" className="bg-white text-green-800 px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 mt-4 inline-block">
                    <span className="text-2xl">+</span> Report Incident
                </Link>
            </div>
            <div className='ml-8'>
                 <FaExclamationTriangle className='text-5xl text-gray-400' />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Reports</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <FaFileAlt className="text-4xl text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Reports</p>
                <p className="text-3xl font-bold ">3</p>
              </div>
              <FaBell className="text-4xl text-blue-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Resolved</p>
                <p className="text-3xl font-bold ">9</p>
              </div>
              <FaMapMarkedAlt className="text-4xl text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Response Time</p>
                <p className="text-3xl font-bold ">2.5h</p>
              </div>
              <FaClock className="text-4xl text-orange-200" />
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* My Recent Reports - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className='flex items-center justify-between mb-4'>
              <h2 className="text-xl font-bold text-gray-800">My Recent Reports</h2>
              <Link to="/citizen/reports" className='text-green-700 font-medium hover:underline'>View All</Link>
            </div>
            
            <div className="space-y-3">
              {recentIncidents.map(incident => (
                <div key={incident.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <div className="flex-1">
                    <div className='grid items-center gap-2'>
                      <span className="font-semibold text-gray-800">{incident.number}</span>
                      <h3 className="font-medium text-gray-800">{incident.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{incident.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4 ${
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

          {/* Right Column - Recent Alerts and Emergency Contacts */}
          <div className='space-y-6'>
            {/* Recent Alerts */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3"><FaBell className='inline mr-2' />Recent Alerts</h2>
              <div className='space-y-3'>
                  <div className='border border-gray-300 p-3 rounded-lg bg-gray-50'>
                      <FaBell className='inline text-blue-500 mr-2' />
                      <p className='font-medium text-sm'>Weather Warning</p>
                      <p className='text-xs text-gray-500'>Heavy rain expected</p>
                      <p className='text-xs text-gray-500'>1 hour ago</p>
                  </div>
                  <div className='border border-gray-300 p-3 rounded-lg bg-gray-50'>
                      <FaBell className='inline text-blue-500 mr-2' />
                      <p className='font-medium text-sm'>Road Closure</p>
                      <p className='text-xs text-gray-500 '>Thika RD closed</p>
                      <p className='text-xs text-gray-500'>3 hours ago</p>
                  </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-green-50 rounded-lg shadow p-6 border border-green-200">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Emergency Contacts</h2>
              <div className='space-y-3'>
                <div>
                    <p className='font-medium text-sm'>Police Emergency</p>
                    <p className='text-green-700 font-semibold'>911</p>
                </div>
                <div>
                    <p className='font-medium text-sm'>Fire Department</p>
                    <p className='text-green-700 font-semibold'>912</p>
                </div>
                <div>
                    <p className='font-medium text-sm'>Crisis Hotline</p>
                    <p className='text-green-700 font-semibold'>913-20330</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Safety Updates */}
        <div className='p-6 bg-white mb-8 rounded-lg shadow'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Community Safety Updates</h2>
          <div className='grid gap-4' >
              <div className='border border-gray-300 rounded-lg p-4 bg-gray-50'>
                  <div className='flex items-start gap-3'>
                      <FaCalendar className='text-green-700 text-xs mt-1 ' />
                      <div className='flex-1'>
                        <p className='font-medium text-gray-800'>Fire Safety Workshop</p>
                        <p className='text-gray-600 text-sm mt-1'>Join our community fire safety training this Saturday at the community center</p>
                        <p className='text-gray-500 text-xs mt-2'>Jan 15, 2026</p>
                      </div>
                  </div>
              </div>
              <div className='border border-gray-300 rounded-lg p-4 bg-gray-50'>
                  <div className='flex items-start gap-3'>
                      <FaCalendar className='text-green-700 text-xs mt-1 ' />
                      <div className='flex-1'>
                        <p className='font-medium text-gray-800'>Emergency Preparedness Week</p>
                        <p className='text-gray-600 text-sm mt-1'>Learn how to prepare your home and family for emergencies. Free kits available</p>
                        <p className='text-gray-500 text-xs mt-2'>Jan 20-28, 2026</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CitizenDashboard;
