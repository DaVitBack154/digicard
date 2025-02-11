import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import Login from './Page/Login/login';
import Homepage from './Page/Homepage/homepage';
import { useEffect } from 'react';
import { clearCredentials, selectAuth } from './store/AccoutReducer';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from './utils/axiosConfig';
import swal from 'sweetalert2';

function PrivateRoute() {
  const { token } = useSelector(selectAuth);
  return token ? <Outlet /> : <Navigate to="/" />;
}

export default function App() {
  const { token } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate(); // ✅ เพิ่ม useNavigate()

  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        try {
          await axiosInstance.get('/getprofile');
        } catch (error) {
          console.error('Session expired:', error);
          localStorage.removeItem('token');

          await swal.fire({
            title: '',
            text: 'User-Password หมดอายุ กรุณา Login ใหม่อีกครั้ง',
            icon: 'error',
            confirmButtonText: 'Close',
          });

          dispatch(clearCredentials());

          // ✅ ใช้ navigate แทน Navigate Component
          navigate('/');
        }
      }
    };

    if (location.pathname !== '/') {
      checkToken();
    }
  }, [token, dispatch, location.pathname, navigate]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/homepage" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
