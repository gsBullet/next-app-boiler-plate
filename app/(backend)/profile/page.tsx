import baseURL from "@/app/url/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    user_id?: number;
    createdAt?: string;
  }
const page = () => {
    const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(`${baseURL}/users/all`);
      console.log(response.data);
      setUsers(response.data);
    };
    getProfile();
  }, []);
  const deleteHandler = async (id: number) => {
    try {
      const response = await axios.get(`${baseURL}/users/delete/${id}`);
      if (response.status === 200) {
        console.log("Profile deleted successfully!");
        setUsers(users.filter((user) => user.id !== id));
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
      console.log(
        "Failed to delete profile. Please check console for details."
      );
    }
  };
  return (
    <div>
        profile
      <div className="container">
        <div className="card">
          <div className="card-actions">
            <Link className="btn btn-outline-primary" href="./pages/profile">
              create profile
            </Link>
          </div>
          <div className="card-body">
            <div className=" ">
              <div className="col-lg-8 m-auto overflow-auto">
                <h1>Welcome to My Profile</h1>
                <div className="card">
                  <div className="card-header">
                    <h3>Basic Information</h3>
                    <div className="card-actions ">
                      <button type="button" className="btn btn-primary">
                        Print
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-hover table-responsive table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>password</th>
                          <th>user_id</th>
                          <th>created_at</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((user, index) => (
                          <tr key={index}>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.password}</td>
                            <td>{user?.user_id ?? ""}</td>
                            <td>{user?.createdAt}</td>
                            <td>
                              <Link
                                href={`./pages/profile/[id]`}
                                as={`/pages/profile/${user?.id}`}
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </button>
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                  user?.id && deleteHandler(user.id)
                                }
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
