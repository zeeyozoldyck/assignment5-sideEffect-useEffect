import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const FetchOnMount: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data.slice(0, 5)); // Get first 5 users
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="component-card">
      <h2>Fetch Data on Mount</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div>
          <h3>Users:</h3>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>Data fetched once when component mounts</p>
    </div>
  );
};

export default FetchOnMount;