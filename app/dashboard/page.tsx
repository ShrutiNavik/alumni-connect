import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">AC</div>
            <span className="text-xl font-bold">AlumniConnect</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
            <Link href="/directory" className="text-gray-600 hover:text-blue-600">Directory</Link>
            <Link href="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
            <Link href="/jobs" className="text-gray-600 hover:text-blue-600">Jobs</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">287</div>
            <div className="text-gray-600">Connections</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-gray-600">Events Attended</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-gray-600">Job Applications</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-yellow-600 mb-2">124</div>
            <div className="text-gray-600">Profile Views</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/directory" className="p-4 border-2 rounded-lg hover:border-blue-600 text-center">
              <i className="fas fa-users text-3xl text-blue-600 mb-2"></i>
              <p className="font-semibold">Browse Alumni</p>
            </Link>
            <Link href="/jobs" className="p-4 border-2 rounded-lg hover:border-green-600 text-center">
              <i className="fas fa-briefcase text-3xl text-green-600 mb-2"></i>
              <p className="font-semibold">Find Jobs</p>
            </Link>
            <Link href="/events" className="p-4 border-2 rounded-lg hover:border-purple-600 text-center">
              <i className="fas fa-calendar text-3xl text-purple-600 mb-2"></i>
              <p className="font-semibold">View Events</p>
            </Link>
            <Link href="/mentorship" className="p-4 border-2 rounded-lg hover:border-yellow-600 text-center">
              <i className="fas fa-user-tie text-3xl text-yellow-600 mb-2"></i>
              <p className="font-semibold">Find Mentor</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
