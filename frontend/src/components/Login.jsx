import  { useState } from 'react';
import Logo from "../assets/i3.jpg";
import back from "../assets/back.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert("Login successful");
      navigate("/dashboard")

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert(`Error: ${error.response.data}`);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-background bg-black" style={{ backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100vh" }}>
      <div className="bg-white dark:bg-card rounded-lg shadow-lg p-8 w-full max-w-md mr-[20%]">
        <h1 className="text-2xl font-semibold text-primary text-center mb-4">
          <img hidden alt="TableSprint logo" src={Logo} />
        </h1>
        <p className="text-muted-foreground text-center mb-6 text-slate-600">Welcome to TableSprint admin</p>
        <form>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="email" >Email-id</label>
            <input className="w-full p-2 border border-border rounded" type="email" id="email" placeholder="Enter your email" required value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="password" >Password</label>
            <input className="w-full p-2 border border-border rounded" type="password" id="password" placeholder="Enter your password" required  value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex justify-between mb-4">
            <Link to={"/forgotpassword"} className="text-accent hover:underline ml-auto">Forgot Password?</Link>
          </div>
          <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg bg-violet-800 text-white" onClick={handleLogin}>Log In</button>
          <Link to={"/register"} className="block text-center bg-secondary border border-border text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg mt-4 bg-transparent text-violet-800 hover:text-violet-900">Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
