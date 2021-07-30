import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
const Home = () => {
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
        <>
          <Header/>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data.map((user, index) => (
          <Profile
            key={index.toString()}
            name={user.name}
            email={user.email}
            phone={user.phone}
            id={user.id}
          />
        ))
      )}  
        </>
    )
}

export default Home
