import React from "react";

export function SendToEmailPopup(props) {
  const dataInitial = { value: "", error: "" };
  const [data, setData] = React.useState(dataInitial);
  const handleClose = (e) => {
    console.log(e);
    if (e.target === e.currentTarget) {
      props.setIsOpen(false);
    }
  };

  const handleEmailChange = (e) => {
    setData({ value: e.target.value, error: "" });
  };

  const validate = () => {
    if (!data.value) {
      setData({ value: data.value, error: "Please enter the email" });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    if (validate()) {
      props.setIsSuccess(true);
      props.setIsOpen(false);
    }
  };

  return (
    <div className={props.isOpen ? "popup open" : "popup"}>
      <div className="popup-wrapper" onClick={handleClose}>
        <div className="popup-content">
          <h5>Send to email</h5>
          <div className="form">
            <div className="form-control">
              <input
                type="email"
                className={data.error ? "input error" : "input"}
                placeholder="Email"
                onChange={handleEmailChange}
              />
              {data.error && <span className="error-text">{data.error}</span>}
            </div>
            <div className="button-bar">
              <button className="btn" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
