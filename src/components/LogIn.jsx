import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase'
import '../App.css'

const UserLogin = () => {

  const [userLgh, setUserLgh] = useState('');  // User login (user_lgh)
  const [password, setPassword] = useState(''); // User password
  const [error, setError] = useState(null);    // Error state
  const [userData, setUserData] = useState(null); // Store the fetched user data

  // useEffect to run the query when userLgh and password change
  useEffect(() => {
    const fetchUserData = async () => {
      if (!userLgh || !password) return;  // Don't run if inputs are empty

      try {
        // Perform the query
        const { data, error } = await supabase
          .from('Users')
          .select('*')
          .eq('user_lgh', userLgh)
          .eq('password', password)  // Ensure password matches
          .single();  // Expect only one result

        if (error) {
          setError(error.message);
          setUserData(null);
        } else {
          setUserData(data); // Store the retrieved user data
          setError(null);
        }
      } catch (err) {
        setError('Error fetching user data');
        setUserData(null);
      }
    };

    fetchUserData();  // Run the fetch function
  }, [userLgh, password]);  // Dependency array: rerun when userLgh or password changes

  return (
    <div className='center-screen'>
      <input 
        type="text" 
        placeholder="User Appartment" 
        value={userLgh} 
        onChange={(e) => setUserLgh(e.target.value)} 
      />
      <input 
        type="password"
        placeholder="Pin Code (4 digits)" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p style={{ color: 'red' }}>Wrong appartment number or pin code. Please try again</p>}
      {userData && <p>Welcome {userData.user_lgh}!</p>}
    </div>
  );
};

export default UserLogin;
