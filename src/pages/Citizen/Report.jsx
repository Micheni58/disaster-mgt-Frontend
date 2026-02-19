import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { FaUpload, FaTimes, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { showSuccessToast, showErrorToast, showWarningToast, showInfoToast } from '../../utils/toastNotifications';

function Report() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    incidentType: '',
    location: '',
    description: '',
    urgency: 'Medium',
    name: user?.fullName || '',
    phoneNumber: '',
    images: [],
    reportAnonymously: false,
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const incidentTypes = [
    'Fire',
    'Flood',
    'Traffic Accident',
    'Medical Emergency',
    'Earthquake',
    'Storm',
    'Landslide',
    'Security',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      return;
    }
    
    // Validate file sizes
    const validFiles = files.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        showErrorToast(`Image "${file.name}" exceeds 10MB limit`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) {
      return;
    }
    
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...validFiles],
    }));

    showInfoToast(`${validFiles.length} image(s) added successfully`);
  };

  const removeImage = (index) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    showInfoToast('Image removed');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.incidentType) {
      showWarningToast('Please select an incident type');
      return;
    }
    if (!formData.location) {
      showWarningToast('Please enter a location');
      return;
    }
    if (!formData.description || formData.description.trim().length < 10) {
      showWarningToast('Please provide a detailed description (at least 10 characters)');
      return;
    }
    if (!formData.name) {
      showWarningToast('Please enter your full name');
      return;
    }
    if (!formData.phoneNumber) {
      showWarningToast('Please enter your phone number');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Report submitted:', formData);
    showSuccessToast('Report submitted successfully!');
    
    // Navigate back to dashboard after a brief delay
    setTimeout(() => {
      navigate('/dashboard/citizen');
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-64 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Report an Incident</h1>
          <p className="text-gray-600 mt-2">Help your community by providing detailed information about the emergency.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Form - Left Side (2 columns on desktop) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
            {/* Incident Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Incident Type <span className="text-red-500">*</span>
              </label>
              <select
                name="incidentType"
                value={formData.incidentType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select incident type</option>
                {incidentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter specific location or address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what happened in detail"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 resize-none"
              ></textarea>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Urgency Level
              </label>
              <div className="flex gap-4">
                {['Low', 'Medium', 'High', 'Critical'].map(level => (
                  <label key={level} className="flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value={level}
                      checked={formData.urgency === level}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-green-700 focus:ring-green-700"
                    />
                    <span className={`text-sm font-medium ${
                      formData.urgency === level ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Upload Images <span className="text-gray-600 text-xs">(Optional)</span>
              </label>
              <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50 cursor-pointer hover:bg-green-100 transition">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="flex flex-col items-center justify-center cursor-pointer">
                  <FaUpload className="text-3xl text-green-700 mb-2" />
                  <p className="text-sm font-medium text-gray-800">Click to upload images</p>
                  <p className="text-xs text-gray-600 mt-1">or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 10MB each</p>
                </label>
              </div>

              {/* Image Previews */}
              {imagePreviews.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-800 mb-2">Uploaded Images ({imagePreviews.length})</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index}`}
                          className="w-full h-32 object-cover rounded-lg border border-gray-300"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                        >
                          <FaTimes className="text-sm" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Report Anonymously Checkbox */}
            <div className="border border-gray-300 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition cursor-pointer">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="reportAnonymously"
                  checked={formData.reportAnonymously}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-green-700 rounded focus:ring-green-600"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">Report anonymously</p>
                  <p className="text-gray-600 text-xs mt-1">Your contact information will not be shared publicly, but may be used by responders</p>
                </div>
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition"
              >
                Submit Report
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard/citizen')}
                className="flex-1 bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
              </form>
            </div>
          </div>

          {/* Right Side - Sticky Cards */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Life-Threatening Emergency Card */}
              <div className="bg-red-50  rounded-lg shadow p-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaExclamationTriangle className="text-red-600 text-2xl mt-1" />
                  <h3 className="text-lg font-bold text-red-800">Life-Threatening Emergency?</h3>
                </div>
                <p className="text-red-700 text-sm leading-relaxed">
                  If this is a life-threatening emergency, please call 911 immediately instead of using this form. This form is for reporting non-emergency incidents and community issues.
                </p>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-blue-50  rounded-lg shadow p-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaInfoCircle className="text-blue-600 text-2xl  mt-1" />
                  <h3 className="text-lg font-bold text-blue-800">What Happens Next?</h3>
                </div>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Your report will be reviewed by our team within 15 minutes. You'll receive updates via SMS and email as responders are assigned and progress is made.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Report;