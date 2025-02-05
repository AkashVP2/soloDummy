import axios from 'axios';

const baseUrl = "https://testapi.thesolo.network/api/auth";

//sign-in
export const signInUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, {
      email: email,
      loginType: "email",
      password: password
    },
  
  );
    console.log("Response received:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Sign-in error:", error.response?.data || error.message);
    throw error.response ? error.response.data : error.message;
  }
};

//sign-up
export const signUpUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      email: email,
      password: password
    });
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
