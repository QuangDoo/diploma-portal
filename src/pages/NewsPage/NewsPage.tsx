import { Outlet, useMatch } from 'react-router-dom';
import ListOfNews from './ListOfNews';

function NewsPage() {
  const match = useMatch('/tin-tuc');

  return match ? <ListOfNews /> : <Outlet />;
}

export default NewsPage;
