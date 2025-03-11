"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "@/app/authContext/authContext";
import { useRouter } from "next/navigation";
import api from "@/app/url/baseUrl";


const Login = () => {
  const router = useRouter();
  const { user } = useAuth();

  const loginHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await api.post("users/login", formData);

      if (response.status === 200) {
        window.localStorage.setItem("authToken", response?.data?.token);
        console.log("Logged in successfully!");
        router.push("/dashboard");
      } else {
        return console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      return console.error("Login failed:", error);
    }
  };

  return (
    <>
      {!user ? (
        <div className="continer mt-5">
          <main className="min-vh-100 container">
            <div className="col-lg-6 m-auto">
              <div className="card">
                <div className="card-header">
                  <h2 className="text-center">Login</h2>
                  <div className="card-body">
                    <form onSubmit={loginHandler}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
