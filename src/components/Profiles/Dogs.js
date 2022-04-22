import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dog from "./Dog";
import Breed from "./Breed";



const Dogs = () => {
  const [dogs, setDogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [auth] =  useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    const getDogs = async () => {
      try {
        const host = "http://localhost:8080";
        const res = await axios.get(`${host}/api/dogs/mydog`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        console.log(res.data);
        setDogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    setLoading(true);
    getDogs();
  }, []);

  const displayDogs = () => {
    
    return dogs.map((dog, i) => <Dog dog={dog} key={dog.id} onSelect={onSelect} />, <Breed/>);
  };

  const onSelect = (dogId) => {
    navigate(`/dogs/${dogId}`)
  }

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      {loading ? <p>Loading...</p> : displayDogs()}
    </div>
  );
};

export default Dogs;
