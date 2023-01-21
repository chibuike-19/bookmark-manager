import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate, NavLink } from "react-router-dom"
import { auth } from "../firebase"
import { useState } from "react"
import { async } from "@firebase/util"

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async(e: any) => {
        e.preventDefault();
        await createUserWithEmailAndPassword (auth, email, password).then(
            userCredentials => {
                const user = userCredentials.user
                console.log(user)
                navigate('/login')
            }
        ).catch((error) => {
            setError(error.message)
            console.log(error)
        })
    }
return (
  <div>
    <section>
      <div>
        <div>
          <h1> Welcome to BOOKER-IT </h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <button type="submit" onClick={onSubmit}>
              Sign up
            </button>
          </form>

          <p>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </div>
      </div>
    </section>
  </div>
);
}
export default SignUp