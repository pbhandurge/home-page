import React, { useState } from 'react';
import Contact from './Contact';
import './home.css';

const Home = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [AllEntry, setAllEntry] = useState('[]');
  const [LoggedIn, setLoggedIn] = useState(false);
    
const handleSubmit = (e) => {
e.preventDefault();

const newentry = { username: username, password: password };
setAllEntry([...AllEntry, newentry]);

console.log(newentry.username);
console.log(newentry.password)
}

const handleLogin = () => {

  if (username !== '' && password !== '') {
    setLoggedIn(true);
  }else{
    alert('please enter username and password');
  }
};

  return (
    <>
    {LoggedIn ?<Contact password={password}/>:<div className='login-container'>
     

      <form>
        <h2>Login</h2>
        <div className='input-group'>
          <input value={username} onChange={(e) => { setusername(e.target.value) }} placeholder='Enter username' type='text' id='username' name='username' required></input>
        </div>

        <div className='input-group'>
          <input value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter password' type='text' id='password' name='password' required></input>
        </div>

        <button type="submit" onClick={handleLogin}>Login</button>
      </form>

      </div>
      }

    </>
    )
    }

export default Home
