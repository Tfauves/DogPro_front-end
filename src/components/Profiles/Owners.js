// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import Spinner from "../faCommon/Spinner";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Owner from "./Profiles";

// const Owners = (props) => {
//   const [auth] = useContext(AuthContext);
//   const [owners, setOwners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
//     const _getOwners = async () => {
//       try {
//         const res = await axios.get(`${host}/api/profile`, {
//           headers: {
//             Authorization: `Bearer ${auth.token}`,
//           },
//         });
//         console.log(res.data);
//         setLoading(false);
//         setOwners(res.data);
//       } catch (err) {
//         console.log(err.response.message);
//       }
//     };
//     setLoading(true);
//     _getOwners();
//   }, [auth.token]);

//   const displayProfiles = () => {
//     return owners.map((own) => (
//       <Owner owner={own} key={own.id} onSelect={onSelect} />
//     ));
//   };

//   const displayDogs = () => {};

//   const onSelect = (ownId) => {
//     navigate(`/profile/${ownId}`);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flex: "1",
//         flexDirection: "column",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <h1>Welcome</h1>
//       {loading ? <Spinner /> : displayProfiles()}
//     </div>
//   );
// };

// export default Owners;
