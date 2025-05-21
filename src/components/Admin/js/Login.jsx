import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCredentials } from '../../../slices/authSlice';
import { useLoginMutation } from '../../../slices/usersApiSlice';
import logo from '../../../asstes/logo.png';

function LoginScreen() {
  // Set default email here:
  const [email, setEmail] = useState('phuntsho@gmail.com');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

 useEffect(() => {
  if (userInfo) {
    const authorities = userInfo?.user?.authorities?.map(a => a.authority) || [];

    if (authorities.includes('Admin')) {
      navigate('/admindashboard');
    } else if (authorities.includes('Vendor')) {
      navigate('/vendordashboard');
    } else {
      navigate(redirect);
    }
  }
}, [userInfo, redirect, navigate]);

 const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const res = await login({ email, password }).unwrap();
    dispatch(setCredentials(res));

    if (res.user.authorities.some(auth => auth.authority === 'Vendor')) {
      navigate('/vendordashboard');
    } else if (res.user.authorities.some(auth => auth.authority === 'Admin')) {
      navigate('/admindashboard');
    } else {
      navigate('/');
    }
  } catch (err) {
    toast.error(err?.data?.message || err.error);
  }
};

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f5f3',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '400px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <h2
            style={{
              marginBottom: '20px',
              fontSize: '22px',
              color: '#744f41',
              fontWeight: 'bold',
            }}
          >
            LOG IN
          </h2>
          <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '2px solid #d4a6a6',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '16px',
                }}
              />
            </div>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '2px solid #d4a6a6',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '16px',
                }}
              />
            </div>

            <p
              style={{
                fontSize: '12px',
                color: '#744f41',
                marginTop: '10px',
                cursor: 'pointer',
                marginLeft: '200px',
                textDecoration: 'underline',
              }}
              onClick={() => navigate('/forgot-password')}
            >
              Forgot password?
            </p>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: '20px',
                backgroundColor: '#d4a6a6',
                border: 'none',
                padding: '10px 20px',
                color: 'white',
                fontSize: '14px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

        {/* Right Side - Logo */}
        <div
          style={{
            flex: 1,
            background: '#f3dedb',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <img
            src={logo}
            alt="FloraMart Logo"
            style={{ width: '120px', marginBottom: '10px' }}
          />
          <h2
            style={{
              fontSize: '18px',
              color: '#744f41',
              fontWeight: 'bold',
            }}
          >
            Welcome to FloraMart
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
