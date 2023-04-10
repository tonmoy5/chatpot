import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}`)
        console.log(`Password: ${password}`)
    }

    const handleGoogleSubmit = () => {
        const handleGoogleLogin = () => {
            console.log("Google login successful!");
        }
        handleGoogleLogin();
    }

    const handleFacebookSubmit = () => {
        const handleFacebookLogin = () => {
            console.log("Facebook login successful!");
        }
        handleFacebookLogin();
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white mx-auto shadow-lg">
                <div className="py-10 px-5">

                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#00ACED] text-center">
                        LOGIN
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col pt-8">

                        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} placeholder="E-mail Address"
                            className="mt-4 text-slate-600 md:text-lg text-sm outline-none border-b-2" />

                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password"
                            className="mt-4 text-slate-600 md:text-lg text-sm outline-none border-b-2" />

                        <button type="submit"
                            className="mt-4 w-full lg:text-xl md:text-xl text-lg font-bold text-white bg-slate-400 hover:scale-105 transition-all rounded-lg p-3 mx-auto">
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={handleGoogleSubmit}
                            className="mt-4 w-full bg-slate-400 hover:scale-105 transition-all rounded-lg p-3 mx-auto">
                            <span className="flex items-center justify-center lg:text-xl md:text-xl text-lg font-bold text-white">
                                <FcGoogle className="inline-block mr-4"/> Login With Google
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={handleFacebookSubmit}
                            className="mt-4 w-full bg-slate-400 hover:scale-105 transition-all rounded-lg p-3 mx-auto">
                            <span className="flex items-center justify-center lg:text-xl md:text-xl text-lg font-bold text-white">
                                <BsFacebook className="inline-block text-[#00ACED] mr-4"/> Login With Facebook
                            </span>
                        </button>

                        <p className="mt-4 md:text-lg text-sm text-center text-bold">
                            Don't have an account?
                            <a href="#" className="pl-2 lg:text-lg md:text-lg text-sm text-[#00ACED] hover:underline">
                                Register Here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
