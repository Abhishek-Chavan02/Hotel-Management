import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../app/userApi";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LoginAndSignupInput from "../components/LoginAndSignupInput";

export default function SignUp() {
    const { loading, userInfo, message, error } = useSelector(
        (state) => state.user
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
    });

    useEffect(() => {
        if (error && !loading) {
            alert("error" + error);
        } else if (!error && !loading && userInfo) {
            alert("message" + message);
            navigate("/");
        }
    }, [dispatch, loading, userInfo, message, error, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        setErrors({ firstName: "", lastName: "", email: "", password: "", mobile: "" });

        let hasError = false;
        let newErrors = { firstName: "", lastName: "", email: "", password: "", mobile: "" };

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required.";
            hasError = true;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
            hasError = true;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            hasError = true;
        }

        if (!formData.password.trim() || formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            hasError = true;
        }

        if (!formData.mobile.trim() || formData.mobile.length !== 10) {
            newErrors.mobile = "Mobile should be up to 10 digits.";
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {

            dispatch(registerUser(formData));
        }
    };

    return (
        <div className="container mx-auto flex justify-center items-center min-h-screen">
            <div className="bg-white p-6 shadow-lg rounded-lg" style={{ width: "350px" }}>
                <h3 className="text-center text-xl font-semibold">Sign Up</h3>

                <form onSubmit={submit}>
                    {/* First Name Input */}
                    <LoginAndSignupInput
                        value={formData.firstName}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, firstName: "" });
                        }}
                        placeholder="Enter First Name"
                        name="firstName"
                        error={errors.firstName}
                    />

                    {/* Last Name Input */}
                    <LoginAndSignupInput
                        value={formData.lastName}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, lastName: "" });
                        }}
                        placeholder="Enter Last Name"
                        name="lastName"
                        error={errors.lastName}
                    />

                    {/* Email Input */}
                    <LoginAndSignupInput
                        value={formData.email}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, email: "" });
                        }}
                        placeholder="Enter Email"
                        name="email"
                        error={errors.email}
                        type="email"
                    />

                    {/* Password Input */}
                    <LoginAndSignupInput
                        value={formData.password}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, password: "" });
                        }}
                        placeholder="Enter Password"
                        name="password"
                        error={errors.password}
                        type="password"
                    />

                    {/* Mobile Input */}
                    <LoginAndSignupInput
                        value={formData.mobile}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, mobile: "" });
                        }}
                        placeholder="Enter Mobile"
                        name="mobile"
                        error={errors.mobile}
                        type="tel"
                    />

                    <Button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#5A2360] text-white rounded-md hover:bg-blue-600"
                    >
                        Sign Up
                    </Button>
                </form>

                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <a href="/" className="text-blue-500 hover:text-blue-700">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
