// Modified from tutorial: https://mobisoftinfotech.com/resources/blog/app-development/supabase-react-typescript-tutorial

import { FormEvent, useState } from "react";
import "../../App.css";
import { Client } from "../supabase/Client";
import "./Profile.css";

const LoginPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [logInLoading, setLogInLoading] = useState(false);

  const handleLogIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setError(null);
      setLogInLoading(true);
      const { error } = await Client.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign in"
      );
    } finally {
      setLogInLoading(false);
    }
  };

  return (
    <form className="login-panel-form" onSubmit={handleLogIn}>
      {error && <div className="error-message">{error}</div>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={logInLoading}
        className="login-signup-input"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        disabled={logInLoading}
        className="login-signup-input"
      />
      <br></br>
      <button
        type="submit"
        disabled={logInLoading || email == "" || password == ""}
        className="login-signup-panel-button"
      >
        {logInLoading ? "Loading..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginPanel;
