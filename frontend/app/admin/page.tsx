'use client'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-frsc-primary mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-medium mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-frsc-primary">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-medium mb-2">Total Appointments</h3>
            <p className="text-3xl font-bold text-frsc-primary">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-medium mb-2">Total Payments</h3>
            <p className="text-3xl font-bold text-frsc-primary">₦8.9M</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-medium mb-2">Open Tickets</h3>
            <p className="text-3xl font-bold text-frsc-primary">23</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-frsc-primary mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-frsc-primary text-white py-2 px-4 rounded hover:bg-frsc-primary/90">
                Post Announcement
              </button>
              <button className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded hover:bg-gray-300">
                View All Appointments
              </button>
              <button className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded hover:bg-gray-300">
                Manage Users
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-frsc-primary mb-4">Recent Activity</h2>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">• 45 new users registered today</p>
              <p className="text-gray-600">• 12 appointments scheduled</p>
              <p className="text-gray-600">• 8 support tickets created</p>
              <p className="text-gray-600">• 5 payments processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
