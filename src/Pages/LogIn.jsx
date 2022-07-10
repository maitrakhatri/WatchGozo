import { Link } from "react-router-dom";
import { Navbar } from "../Components";
import "./CSS/auth.css";
import { useAuth } from "../Context";

export function LogIn() {
  const { dispatch, logInHandler, state, guestCred, errorInLogin } = useAuth();

  return (
    <div className="login auth">
      <Navbar />
      <main>
        <div className="log-in-container">
          <form action="" method="post">
            <div className="card shadow">
              <h3 className="title">Log In</h3>
              <div className="input-group ">
                <label for="email">Email address</label>
                <input
                  className={errorInLogin.status && "outline-red"}
                  type="email"
                  name="email"
                  id="emailid"
                  placeholder="maitrakhatri@gozo.com"
                  value={state.email}
                  required
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label for="password">Password</label>
                <input
                  className={errorInLogin.status && "outline-red"}
                  type="password"
                  name="password"
                  id="password"
                  value={state.password}
                  required
                  onChange={(e) =>
                    dispatch({ type: "PASS", payload: e.target.value })
                  }
                />
              </div>

              {errorInLogin.status && (
                <div className="error-message text-red">
                  <b>
                    <p>{errorInLogin.message}</p>
                  </b>
                  <br />
                </div>
              )}

              <button
                type="submit"
                className="btn btn-lightblue login"
                onClick={(e) => logInHandler(e)}
              >
                Login
              </button>
              <button
                className="btn btn-green"
                onClick={(e) => {
                  guestCred(e);
                  dispatch({ type: "GUEST-CRED" });
                }}
              >
                Use guest credentials
              </button>
              <Link to="/signup"> Create New account </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
