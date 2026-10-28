import { useLocation } from 'react-router-dom';

function TopLoader() {
  const location = useLocation();
  return <div key={location.pathname} className="top-loader" />;
}

export default TopLoader;
