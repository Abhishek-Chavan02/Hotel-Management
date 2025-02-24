import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../app/userApi";

const Login = () => {
  const { loading,  userInfo, message, error } = useSelector(
    (state) => state.user
  );
//   const userState = useSelector((state) => state.user);
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // dispatch(fetchUsers());
    if (error && !loading) {
      alert(message);
    } else if (!error && !loading && userInfo) {
      alert("Success");
    }
  }, [dispatch, loading, userInfo, message, error]);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      email &&
      password &&
      email?.trim().length > 0 &&
      password?.trim().length > 5
    ) {
      const payload = {
        email: email,
        password: password,
      };
      //     const payload1={
      //         email,
      //        password
      //    }
      dispatch(loginUser(payload));
    } else {
      setErrorMessage("Validation Error");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="bg-white p-5 shadow-lg rounded-lg"
          style={{ width: "400px" }}
        >
          <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <label>Invalid email format</label>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {errorMessage && (
              <p className="text-center text-red-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#5A2360] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Create account{" "}
            <a href="/signup" className="text-blue-500 hover:text-blue-700">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
