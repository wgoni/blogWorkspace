import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

function Navbar({user, onLogout}) {
  return (
    <nav>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>로고</Link> |
      <Link to={ROUTES.ABOUT}>about</Link> |
      <Link to={ROUTES.BLOG}> blog</Link>
      {user ? (
        <>
          <span style={{ marginRight: '1rem' }}>{user.username}님</span>
          <button onClick={onLogout}>로그아웃</button>
        </>
      ) : (
        <Link to={ROUTES.LOGIN} style={{ color: 'white' }}>로그인</Link>
      )}
    </nav>
  );
};

export default Navbar;