import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

export default function AuthForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    (async function userLogin() {
      try {
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBp62gfGdLcr8Nq08w32S5wk67nFHDdT_A',
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        // console.log(response);

        const data = await response.json();
        if (response.ok) {
          // console.log(data);
          authCtx.login(data.idToken, data.email);
          history.replace('/store');
        } else {
          // console.log(data);
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    })(); //Self-invoking function
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required ref={passwordRef} />
      </div>
      <p>By signing, you agree to Regimie’s Privacy Policy.</p>
      <button type="submit">Login</button>
    </form>
  );
}
