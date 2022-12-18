import { Outlet } from 'react-router-dom';
import { Header } from '../components/elements/Header';

export function Vote() {
  return (
    <>
      <Header />
      <Outlet />
      <div>hiu</div>
    </>
  );
}
