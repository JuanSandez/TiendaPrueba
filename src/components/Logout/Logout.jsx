import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase';

const Logout = () => {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try{
            await signOut(auth);
            navigate('/');
        }catch (error){
            console.error('cerrando sesión: ', error)
        }
    };
  return (
    <div className="container d-flex flex-column align-items-center">
        <h2>Cerrar sesión </h2>
        <button onClick={handleSignOut} className="btn btn-primary mt-2">Cerrar sesión</button>
    </div>
  )
}

export default Logout