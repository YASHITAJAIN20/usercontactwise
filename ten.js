export default function Tenants() {
    const tenants = [
      { id: 1, name: 'Tenant A', createdAt: '2023-10-01' },
      { id: 2, name: 'Tenant B', createdAt: '2023-10-02' },
    ];
  
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
            </ul>
          </nav>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Tenants</h1>
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="border-b">
                  <td className="p-4">{tenant.id}</td>
                  <td className="p-4">{tenant.name}</td>
                  <td className="p-4">{tenant.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }