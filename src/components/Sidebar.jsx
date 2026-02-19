import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaFileAlt, FaUsers, FaMapMarkedAlt, FaCog, FaSignOutAlt, FaBars, FaTimes, FaUser, FaAmbulance, FaUserShield, FaBell, FaChartLine } from 'react-icons/fa';
import { showWarningToast } from '../utils/toastNotifications';

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    showWarningToast('Logged out successfully');
    navigate('/');
  };

  const menuItems = {
    Citizen: [
      { icon: FaHome, label: 'Dashboard', path: '/dashboard/citizen' },
      { icon: FaFileAlt, label: 'Report Incident', path: '/citizen/report' },
      { icon: FaMapMarkedAlt, label: 'Incidents Map', path: '/dashboard/citizen/map' },
      { icon: FaBell, label: 'My Reports', path: '/dashboard/citizen/reports' },
      { icon: FaCog, label: 'Settings', path: '/dashboard/citizen/settings' }
    ],
    Responder: [
      { icon: FaHome, label: 'Dashboard', path: '/dashboard/responder' },
      { icon: FaAmbulance, label: 'Active Incidents', path: '/dashboard/responder/incidents' },
      { icon: FaMapMarkedAlt, label: 'Response Map', path: '/dashboard/responder/map' },
      { icon: FaUsers, label: 'Team', path: '/dashboard/responder/team' },
      { icon: FaCog, label: 'Settings', path: '/dashboard/responder/settings' }
    ],
    Officer: [
      { icon: FaHome, label: 'Dashboard', path: '/dashboard/admin' },
      { icon: FaChartLine, label: 'Analytics', path: '/dashboard/admin/analytics' },
      { icon: FaUsers, label: 'Users', path: '/dashboard/admin/users' },
      { icon: FaFileAlt, label: 'Reports', path: '/dashboard/admin/reports' },
      { icon: FaCog, label: 'Settings', path: '/dashboard/admin/settings' }
    ]
  };

  const currentMenuItems = menuItems[user?.role] || [];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-green-700 text-white p-2 rounded-lg hover:bg-green-800 transition"
      >
        {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 md:hidden z-10"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-green-800 text-white shadow-lg transform transition-transform duration-300 md:translate-x-0 z-40 pt-20 md:pt-0 flex flex-col ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-green-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 rounded-full p-3">
              {user?.role === 'Citizen' && <FaUser size={20} />}
              {user?.role === 'Responder' && <FaAmbulance size={20} />}
              {user?.role === 'Officer' && <FaUserShield size={20} />}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{user?.fullName}</h3>
              <p className="text-sm text-green-200">{user?.role}</p>
            </div>
          </div>
          {user?.organization && (
            <p className="text-xs text-green-200 mt-2">{user.organization}</p>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {currentMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-700 transition-colors group"
            >
              <item.icon className="text-green-200 group-hover:text-white" />
              <span className="group-hover:text-white">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-green-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg  hover:text-red-500 hover:bg-green-100 "
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
