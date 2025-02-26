import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 p-6 shadow-md">
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/tenants" className="text-gray-700 hover:text-blue-500">
                Tenants
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/users" className="text-gray-700 hover:text-blue-500">
                Users
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/settings" className="text-gray-700 hover:text-blue-500">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h1>
        <p className="text-gray-700">
          This is the main content area. You can add charts, tables, or other components here.
        </p>
      </div>
    </div>
  );
}