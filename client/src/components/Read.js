import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import { baseURL } from "../API/api";
import Loading from "../loading/Loading";

const Read = () => {
  const [user, setUser] = useState([]); // user state
  const [isLoaded, setIsLoaded] = useState(false); // loading state

  // fetching Users from API
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(baseURL);
        setUser(data);
        setIsLoaded(true);
      } catch (e) {
        console.log(e);
        setIsLoaded(true);
      }
    };
    getUser();
  }, []);




  // Delete
  const deleteUser = async (id) => {
    await axios.delete(`${baseURL}${id}`)
    const newUserList = user.filter((users) => {
      return users.id !== id;
    });

    setUser(newUserList);
  };

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Mail</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>

          {isLoaded ? (
            user.map((users, i) => {
              return (
                <tr key={i}>
                  <td>{users.id}</td>
                  <td>{users.firstname}</td>
                  <td>{users.lastname}</td>
                  <td>{users.email}</td>
                  <td>
                    <Link className="button-green" to={`/${users.id}`}>
                      Update
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="button-danger"
                      onClick={() => deleteUser(users.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Read;
