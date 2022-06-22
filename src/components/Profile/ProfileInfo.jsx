export function ProfileInfo(props) {
  return (
    <div className="profile-info secondary">
      <div className="form readonly">
        <div className="form-control">
          <label>Name:</label>
          <input type="text" className="input" value="Dina" placeholder="Name" readOnly />
        </div>
        <div className="form-control">
          <label>Surname:</label>
          <input
            type="text"
            className="input"
            value="Iovcheva"
            placeholder="Surname"
            readOnly
          />
        </div>
      </div>
      <div className="btn-bar" style={{textAlign: "left"}}>
        <button className="btn">Update info</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="btn-bar" style={{textAlign: "left"}}>
        <button className="btn">Change password</button>
      </div>
    </div>
  );
}
