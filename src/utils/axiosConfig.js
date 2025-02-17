import axios from 'axios';
import CryptoJS from 'crypto-js';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_USER,
});

// ✅ ถอดรหัส Token ก่อนใช้งาน
axiosInstance.interceptors.request.use((config) => {
  let token = localStorage.getItem('token');
  if (token) {
    try {
      const bytes = CryptoJS.AES.decrypt(
        token,
        import.meta.env.VITE_REACT_APP_API_KEY
      );
      const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

      if (decryptedToken) {
        config.headers.Authorization = `Bearer ${decryptedToken}`;
      } else {
        console.error('🔴 Token decryption failed');
      }
    } catch (error) {
      console.error('🔴 Error decrypting token:', error);
    }
  }
  return config;
});

export default axiosInstance;
