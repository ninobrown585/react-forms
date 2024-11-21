import { useState } from "react"

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [showUsername, setShowUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowUsername(username);
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
                
            }
            )
            const result = await response.json();
            // console.log(username)
            console.log(result);
            setToken(result.token);
        } catch (error) {
            setError(error);
            
        }
        }

  return (
    <div>
      <h2>Sign Up!</h2>;
      {
            error && <p>{error.message}</p>
      }
      <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
      {
            showUsername && <p>Hi! {showUsername}</p>
      }
    </div>
  )
}
