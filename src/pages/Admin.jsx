import React, { useState } from 'react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', date: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', date: '2024-01-14' },
  ]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    // Replace with your API endpoint
    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setLoading(false);
    if (res.ok) {
      setSuccess('Blog added successfully!');
      setForm({ title: '', description: '', date: '', image: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex-1 py-4 px-6 text-center font-medium text-sm focus:outline-none transition-colors
                ${activeTab === 'blogs' 
                  ? 'text-green-600 border-b-2 border-green-500 bg-green-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
            >
              Manage Blogs
            </button>
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`flex-1 py-4 px-6 text-center font-medium text-sm focus:outline-none transition-colors
                ${activeTab === 'volunteers' 
                  ? 'text-green-600 border-b-2 border-green-500 bg-green-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
            >
              Volunteer Submissions
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'blogs' ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Add New Blog</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="url"
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all"
                  >
                    {loading ? 'Adding...' : 'Add Blog'}
                  </button>
                  {success && <div className="text-green-600 text-center mt-2">{success}</div>}
                </form>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Volunteer Submissions</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {volunteers.map((volunteer) => (
                        <tr key={volunteer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{volunteer.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.phone}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
