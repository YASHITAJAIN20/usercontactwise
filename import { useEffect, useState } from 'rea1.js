import { useEffect, useState } from 'react';

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    fetch('/api/tenants')
      .then((res) => res.json())
      .then((data) => setTenants(data));
  }, []);

  return (
    <div>
      <h1>Tenants</h1>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>{tenant.name}</li>
        ))}
      </ul>
    </div>
  );
}