import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ token, parentGetData }) {

    const navigate = useNavigate();

    // States
    const [errors, setErrors] = useState(undefined);

    useEffect(() => {
        // If token is not undefined then a user is already logged in
        if (token != undefined) {
            navigate('../');
        }
    }, []);

    const returnJWT = (event) => {

        const username = event.target[0].value;
        const password = event.target[1].value;

        // Status code if needed
        let status = undefined;

        // Fetch login
        fetch('http://localhost:3000/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password }),
        })
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then(response => {
                console.log(response);

                if (status != 401) {
                    console.log("Login Succesful");
                    parentGetData(response.token, response.id, response.username, response.account);

                    // Redirect to home page
                    navigate('../');
                } else {
                    console.log("Error");
                    setErrors(response.message);
                }
                
            })
            .catch(error => console.error(error));

        event.preventDefault();
    };

    return (
        <>
            <h1>Log In</h1>

            {errors != undefined ? (
                <span>{errors}</span>
            ): (<></>)}

            <form onSubmit={returnJWT}>
                <div>
                    <label htmlFor="username">
                        Username <input type="text" name="username" id="username" />
                    </label>
                </div>
                
                <div>
                    <label htmlFor="password">
                        Password <input type="password" name="password" id="password" />
                    </label>
                </div>
                
                <button type="submit">Log In</button>
            </form>

            <Link to="../signup">Sign Up</Link>
        </>
    );
}