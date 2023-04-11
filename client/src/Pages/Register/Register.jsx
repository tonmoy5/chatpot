import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    console.log(JSON.stringify(userData))
  }

  const handleGoogleSubmit = () => {
    const handleGoogleSignup = () => {
      const userData = {
        userName: "Google user",
        email: "googleuser@gmail.com"
      }
      console.log(JSON.stringify(userData))
    }
    handleGoogleSignup()
  }

  const handleFacebookSubmit = () => {
    const handleFacebookSignup = () => {
      const userData = {
        userName: "Facebook user",
        email: "facebookuser@gmail.com"
      }
      console.log(JSON.stringify(userData))
    }
    handleFacebookSignup()
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white mx-auto shadow-lg md:w-[500px] rounded-lg">
        <div className="py-8 px-8">

          <h1 className="md:text-4xl text-3xl font-bold text-center">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col mt-8">

            <input type="text" id="firstname" name="firstname" value={firstName} onChange={handleFirstNameChange} placeholder="First Name"
              className="mb-4 text-slate-600 md:text-lg text-sm outline-none border-2 p-2 rounded-lg" />

            <input type="text" id="lastname" name="lastname" value={lastName} onChange={handleLastNameChange} placeholder="Last Name"
              className="mb-4 text-slate-600 md:text-lg text-sm outline-none border-2 p-2 rounded-lg" />

            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="E-mail Address"
              className="mb-4 text-slate-600 md:text-lg text-sm outline-none border-2 p-2 rounded-lg" />

            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password"
              className="mb-4 text-slate-600 md:text-lg text-sm outline-none border-2 p-2 rounded-lg" />

            <input type="password" id="confirmpassword" name="Confirmpassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password"
              className="mb-4 text-slate-600 md:text-lg text-sm outline-none border-2 p-2 rounded-lg" />

            <button
              type="submit"
              className="mb-4 w-full md:text-lg text-sm font-semibold text-white bg-[#0171D3] hover:scale-105 transition-all rounded-lg p-2">
              Sign Up
            </button>

            <p className="md:text-lg text-sm text-center">
              Already have an account?
              <a href="/" className="pl-2 text-[#0171D3] hover:underline">
                Login
              </a>
            </p>

            <div className="flex items-center gap-2 my-4">
              <div class="border-b-2 border-slate-400 w-2/4"></div>
              <div className="md:text-lg text-sm text-slate-400">OR</div>
              <div class="border-b-2 border-slate-400 w-2/4"></div>
            </div>
            
            <button
              type="button" onClick={handleGoogleSubmit}
              className="mb-4 w-full text-slate-400 hover:text-white hover:bg-[#31974D] hover:scale-105 transition-all rounded-lg p-2 border-2">
              <p className="flex items-center justify-center gap-3">
                <FcGoogle className="md:text-xl text-lg" />
                <span className="md:text-lg text-sm font-semibold">
                  Sign Up With Google
                </span>
              </p>
            </button>

            <button
              type="button" onClick={handleFacebookSubmit}
              className="mb-4 w-full text-slate-400 hover:text-white hover:bg-[#4268B3] hover:scale-105 transition-all rounded-lg p-2 border-2">
              <p className="flex items-center justify-center gap-3">
                <BsFacebook className="md:text-xl text-lg" />
                <span className="md:text-lg text-sm font-semibold">
                  Sign Up With Facebook
                </span>
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
