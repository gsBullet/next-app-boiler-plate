"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "@/app/url/baseUrl";

const Signup = () => {

  const singUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);

      const response = await api.post("/users/register", formData);

      if (response.status === 200) {

        console.log("Profile created successfully!");
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      console.log(
        "Failed to create profile. Please check console for details."
      );
    }
  };
  return (
    <div className="container">
      <div className="min-vh-100">
        <div className="card col-lg-6 col-md-8 col-sm-10 m-auto mt-5">
          <div className="card-header ">
            <h2 className="text-center">Create a new profile</h2>
          </div>
          <div className="card-body">
            <form encType="multipart/form-data" onSubmit={singUpHandler}>
              <div className="form-group mb-3  ">
                <label htmlFor="user_id">User ID</label>
                <input
                  type="number"
                  name="user_id"
                  id="user_id"
                  className="form-control"
                  placeholder="Enter your user id"
                />
              </div>
              <div className="form-group mb-3 ">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mb-3 ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3 ">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group mb-3 ">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  accept="image/*"
                />
              </div>
              <div className="form-group mb-3 text-end">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
