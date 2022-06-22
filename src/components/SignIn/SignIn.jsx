import React from "react";
import { useNavigate } from 'react-router-dom';
import { userInfo } from "../../common/constants";


export function SignIn(props) {
  const navigate = useNavigate();
  const formDataInitial = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  };

  const [formData, setFormData] = React.useState(formDataInitial);

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: { value: e.target.value, error: "" } });
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: { value: e.target.value, error: "" },
    });
  };

  const validate = () => {
    if (!formData.email.value) {
      setFormData({ ...formData, email: { value: formData.email.value, error: "Please enter the email" } })
      return false;
    }
    if (!formData.password.value) {
      setFormData({ ...formData, password: { value: formData.password.value, error: "Please enter the password" } });
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(userInfo));
      navigate("/analysis");
    }
  }

  return (
    <div className="container">
      <div className="analysis">
        <h3 style={{ marginBottom: "30px" }}>Sign In</h3>
        <div className="form">
          <div className="form-control">
            <input
              type="email"
              value={formData.email.value}
              className={formData.email.error ? "input error" : "input"}
              placeholder="Email"
              onChange={handleEmailChange}
            />
            {formData.email.error && (
              <span className="error-text">{formData.email.error}</span>
            )}
          </div>
          <div className="form-control">
            <input
              type="password"
              value={formData.password.value}
              className={formData.password.error ? "input error" : "input"}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {formData.password.error && (
              <span className="error-text">{formData.password.error}</span>
            )}
          </div>
        </div>
        <div className="button-bar">
          <button className="btn" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
