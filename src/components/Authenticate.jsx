import {useState} from 'react'

export default function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setErrror] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }});
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch (error) {
            setErrror(error.message);   
        }
    }
  return (
    <div>
      <h2 className="text-dark">Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button className="btn btn-danger" onClick={handleClick}>
        <p>Authenticate Token</p>
      </button>
    </div>
  )
}
