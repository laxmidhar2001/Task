import  { useState } from 'react';
import Image1 from "../assets/i1.jpg";
import Image2 from "../assets/i3.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    let navigate=useNavigate()

    const formHandle = (e) => {
        e.preventDefault(); // Prevent the default form submission

        const userData = {
            email: input1,
            password: input2,
        };

        if (input1 === "" || input2 === "") {
            alert("Please fill in all fields");
        } else {
            axios.post("http://localhost:3000/register", userData)
                .then(() => { console.log("Data sent");
                    navigate("/")
                })
                .catch((error) => { 
                    console.error("Failed to send data:", error);
                    alert(`Error: ${error.message}`);
                });
            setInput1("");
            setInput2("");
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-background">
            <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
                <img src={Image2} alt="Logo" className="mb-4 max-w-full max-h-full" />
                <h2 className="text-lg text-center text-muted mb-6">Welcome</h2>
                <form className="w-full" onSubmit={formHandle}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-muted" htmlFor="email">
                            Email ID
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email ID"
                            className="mt-1 block w-full p-2 shadow-md rounded-md focus:outline-none focus:ring focus:ring-ring border-0"
                            required
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-muted" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                            className="mt-1 block w-full p-2 shadow-md border-0 rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 mt-4 bg-pink-700 text-white rounded-md hover:bg-primary/80"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="hidden md:block w-1/2 h-full bg-cover bg-center">
                <img src={Image1} alt="Background" className="h-full w-full object-cover" />
            </div>
        </div>
    );
}

export default Register;
