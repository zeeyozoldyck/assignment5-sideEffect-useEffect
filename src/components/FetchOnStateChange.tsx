import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const FetchOnStateChange: React.FC = () => {
  const [category, setCategory] = useState<'posts' | 'albums' | 'todos'>('posts');
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/${category}?_limit=3`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="component-card">
      <h2>Fetch Data on State Change</h2>
      
      <div>
        <button 
          onClick={() => setCategory('posts')}
          disabled={category === 'posts'}
        >
          Posts
        </button>
        <button 
          onClick={() => setCategory('albums')}
          disabled={category === 'albums'}
        >
          Albums
        </button>
        <button 
          onClick={() => setCategory('todos')}
          disabled={category === 'todos'}
        >
          Todos
        </button>
      </div>

      {loading ? (
        <p>Loading {category}...</p>
      ) : (
        <div>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}:</h3>
          <ul>
            {data.map(item => (
              <li key={item.id}>
                {item.title || item.body || `Item ${item.id}`}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>Data re-fetches when category changes</p>
    </div>
  );
};

export default FetchOnStateChange;