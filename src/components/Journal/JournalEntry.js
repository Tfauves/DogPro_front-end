import React, { useState, useContext } from "react";
import axios from "axios";
import JournalForm from "./JournalForm";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "./../../config";
import { useNavigate } from "react-router-dom";

const JournalEntry = (props) => {
  const { journalId } = props;

  const [query, setQuery] = useState({
    activity: "",
  });

  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();
  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  // let navigate = useNavigate();
  const onSubmit = async (token) => {
    const data = query;
    data.type = { id: data.type };
    data.entry = { activity: data.activity };
    console.log(data);
    try {
      console.log(journalId);
      const res = await axios.post(`${apiHost}/api/entry/${journalId}`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      // navigate("/journal");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <JournalForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
  );
};
export default JournalEntry;
