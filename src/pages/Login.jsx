import { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../app/userApi";
import { replace, useNavigate } from "react-router-dom";
import { Alert, Button } from "@material-tailwind/react";
import LoginAndSignupInput from "../components/LoginAndSignupInput";


const Login = () => {
  const { loading, userInfo, message, error } = useSelector((state) => state.user);
  const userData = localStorage.getItem("user");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("green");

  useEffect(() => {
    if (userData) {

      navigate("/home", { replace: true });
    }
  }, [userData]);
  console.log('userData: ', userData);

  useEffect(() => {
    if (error && !loading) {
      setTimeout(() => {
        setAlertMessage(error);
        setAlertColor("red");
        setAlertOpen(true);

        setTimeout(() => {
          setAlertOpen(false);
        }, 1000);
      }, 1000);
    } else if (!error && !loading && userInfo) {
      setAlertMessage(message);
      setAlertColor("green");
      setAlertOpen(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [dispatch, loading, userInfo, message, error, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    let hasError = false;
    let newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required.";
      hasError = true;
    }

    if (!password.trim() || password.length < 4) {
      newErrors.password = "Password must be at least 6 characters.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      const payload = { email, password };
      dispatch(loginUser(payload));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white p-5 shadow-lg rounded-lg"
        style={{ width: "400px" }}
      >
        <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>

          <LoginAndSignupInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            placeholder="Enter email"
            name="email"
            error={errors.email}
            type="email"
          />


          <LoginAndSignupInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            placeholder="Enter password"
            name="password"
            error={errors.password}
            type="password"
          />

          <Button
            variant="contained"
            type="submit"
            className="w-full py-2 px-4 bg-[#5A2360] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Login
          </Button>
        </form>
        <p className="text-center mt-4 text-sm">
          Create account{" "}
          <a href="/signup" className="text-blue-500 hover:text-blue-700">
            SignUp
          </a>
        </p>
      </div>


      {alertOpen && (
        <div className="fixed inset-70 flex items-center text-center top-0">
          <Alert color={alertColor} dismissible={false}>
            {alertMessage}
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Login;
