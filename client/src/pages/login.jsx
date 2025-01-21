import { Link } from 'react-router-dom';

export default function Login({ parentGetJWT }) {

    const returnJWT = (event) => {

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