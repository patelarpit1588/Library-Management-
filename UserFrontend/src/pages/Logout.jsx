import {logout} from '../store/authSlice'
import {useDispatch} from "react-redux"
import { Navigate } from 'react-router-dom';

function Logout() {

    const dispatch = useDispatch();
    dispatch(logout())
  return  <Navigate to="/" />
}

export default Logout