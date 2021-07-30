import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";


const ToDo = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  const history =useHistory()
  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((response) => response.json())
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Button onClick ={()=>history.push("/")}variant='contained'>Back</Button>
    </div>
  );
};

export default ToDo;
