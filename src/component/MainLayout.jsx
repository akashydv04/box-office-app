import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <h2>This is shared Markup</h2>
      <Navs />
      <AppTitle />
      <Outlet />
    </div>
  );
};

export default MainLayout;
