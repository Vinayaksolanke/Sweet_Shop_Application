import { useState } from "react";
import "./register.css";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="reg-container">
      <div className="reg-box">
        <h2 className="reg-title">Create Account</h2>

        <form onSubmit={handleSubmit} className="reg-form">

          {/* Row 1 */}
          <div className="reg-row">
            <div className="reg-field">
              <label>First Name</label>
              <input 
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reg-field">
              <label>Last Name</label>
              <input 
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="reg-row">
            <div className="reg-field">
              <label>Email</label>
              <input 
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reg-field">
              <label>Mobile</label>
              <input 
                type="text"
                name="mobile"
                placeholder="Enter mobile"
                value={form.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="reg-row">
            <div className="reg-field">
              <label>Password</label>
              <input 
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reg-field">
              <label>Confirm Password</label>
              <input 
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
       <div className="btn-center">
          <button className="reg-btn" type="submit">Register</button>
</div>
          <p className="reg-login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
