import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
export function AuthenticatedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      navigate('/dashboard/');
    }
  }, []);
  return token ? navigate('/dashboard/') : children;
}


export function PrivateRoute() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/customer/login/');
    }
  }, []);
  return token ? <Outlet /> : navigate('/customer/login/');
}
