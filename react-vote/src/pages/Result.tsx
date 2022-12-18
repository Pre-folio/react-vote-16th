import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/elements/Header';

export function Result() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
