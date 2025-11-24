import { useState } from "react";
import "./register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", form);
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(form.firstName)) {
      newErrors.firstName = "Only letters allowed";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(form.lastName)) {
      newErrors.lastName = "Only letters allowed";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="reg-container">
      <div className="reg-box">
        <h2 className="reg-title">Create Account</h2>

        <form onSubmit={handleSubmit} className="reg-form">
          <div className="reg-row">
            <div className="reg-field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
              )}
            </div>

            <div className="reg-field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="reg-row">
            <div className="reg-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="reg-field">
              <label>Mobile</label>
              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile"
                value={form.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p className="error-text">{errors.mobile}</p>}
            </div>
          </div>

          <div className="reg-row">
            <div className="reg-field">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="reg-field">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="btn-center">
            <button className="reg-btn" type="submit">
              Register
            </button>
          </div>

          <p className="reg-login-text">
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
