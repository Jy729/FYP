import React, { useState } from 'react';

const Register = () => {
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  // Destructure user
  const { name, email, password, password2 } = user;

  // onChange function
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit function
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch ('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, password2 })
      });

      const data = await response.json();
      console.log(data);

      }catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            name="username"
            placeholder='Username'
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type="password"
            name="password2"
            placeholder="Password"
            value={password2}
            onChange={onChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );

};

export default Register;