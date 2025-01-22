import { Link, redirect, useNavigate } from 'react-router-dom';

export default function Login({ parentGetData }) {

    const navigate = useNavigate();

    const returnJWT = (event) => {

        const username = event.target[0].value;
        const password = event.target[1].value;

        // Fetch login
        fetch('http://localhost:3000/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password }),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                parentGetData(response.token, response.id, response.username, response.account);

                // Redirect to home page
                navigate('../');
            })
            .catch(error => console.error(error));

        event.preventDefault();
    };

    return (
        <>
            <h1>Log In</h1>

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