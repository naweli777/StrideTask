import "./App.css";
import { useState, useEffect } from "react";
import Profile from "./Components/Profile/Profile";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((e) => setLoading(false));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data.map((user, index) => (
          <Profile
            key={index.toString()}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))
      )}
    </div>
  );
}

export default App;
