import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/')  // Replace with your FastAPI endpoint URL if different
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <h1>My React App</h1>
      <p>This paragraph is added inside return</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <button onClick={() => alert('Clicked!')}>Click me</button>
      {/* Add images and other components here */}

      {/* New content added */}
      <h1>Welcome to My React App!</h1>
      <p>This is some new content added to your app.</p>

      {/* Display fetched data */}
      {data && (
        <div>
          <h2>Data from FastAPI:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

