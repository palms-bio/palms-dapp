import React from "react";
import field from "../assets/field.png";

const Signup = () => {
    return (
        <div className="flex">
            <img src={field} alt="" className="block" />
            <div className="flex flex-col">
                <div>
                    <h1>Start Saving Energy</h1>
                    <p>Earn rewards on the blockchain</p>
                </div>
                <form action="">
                    <p>Sign up with Email</p>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Register</button>
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
