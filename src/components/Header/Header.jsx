export function Header(props) {
  console.log(props.userInfo)
  return (
    <header id="header">
      <div className="container">
        <h1 className="logo">
          <a href="#">DermaLab</a>
        </h1>
        <nav className="nav">
          <ul>
            <a href="/" className={props.location.pathname == "/" ? "current" : ""}>
              Products
            </a>
            <a href="/analysis" className={props.location.pathname == "/analysis" ? "current" : ""}>Analysis</a>
            {props.userInfo && (
              <a
                href="#"
                className="username"
              >{`${props.userInfo.name} ${props.userInfo.surname}`}</a>
            )}
            {!props.userInfo && (
              <>
                <a href="#">Sign Up</a>
                <a href="/login" className={props.location.pathname == "/login" ? "current" : ""}>Sign In</a>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
