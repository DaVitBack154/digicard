import { createSlice } from '@reduxjs/toolkit';
import { RESET_STATE } from './actionDispatch';
import CryptoJS from 'crypto-js';

const initialState = {
  token: null,
  profile: null,
};

// ✅ ดึง Token จาก localStorage แล้วถอดรหัสก่อนใช้
const storedToken = localStorage.getItem('token');
if (storedToken) {
  try {
    const bytes = CryptoJS.AES.decrypt(
      storedToken,
      import.meta.env.VITE_REACT_APP_API_KEY
    );
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedToken) {
      initialState.token = decryptedToken;
    }
  } catch (error) {
    console.error('🔴 Error decrypting token:', error);
  }
}

// ✅ ดึง Profile จาก localStorage
const storedProfile = localStorage.getItem('profile');
if (storedProfile) {
  initialState.profile = JSON.parse(storedProfile);
}

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      const { token, profile } = action.payload;

      // ✅ เข้ารหัส Token ก่อนเก็บ
      const encryptedToken = CryptoJS.AES.encrypt(
        token,
        import.meta.env.VITE_REACT_APP_API_KEY
      ).toString();

      state.token = token;
      state.profile = profile;
      localStorage.setItem('token', encryptedToken);
      localStorage.setItem('profile', JSON.stringify(profile));
    },

    clearCredentials: (state) => {
      state.token = null;
      state.profile = null;
      localStorage.removeItem('token');
      localStorage.removeItem('profile'); // ✅ ลบข้อมูลโปรไฟล์
    },
  },
});

const signoutreducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export const { setAccount, clearCredentials } = slice.actions;
export const selectAuth = (state) => state.account;
export default slice.reducer;
export { signoutreducer };
