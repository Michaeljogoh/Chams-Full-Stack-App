import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../API/api";

const Update = () => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  let navigate = useNavigate();
  let { id } = useParams();


  // Fetch User By Id 
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`${baseURL}${id}`);
        setNewUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  });

  const handleChange = (event) => {
    setNewUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // sumbit user post function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseURL}${id}`, newUser);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="form-section">
      <h1 className="form-heading">Update User</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname" />
            <input
              className="form-input"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="firstname"
              value={newUser.firstname}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="lastname" />
            <input
              className="form-input"
              type="text"
              id="lastname"
              name="lastname"
              value={newUser.lastname}
              placeholder="lastname"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="mail" />
            <input
              className="form-input"
              type="text"
              id="mail"
              name="email"
              value={newUser.email}
              placeholder="mail"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-submit-container">
            <button className="submit-btn" required>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
