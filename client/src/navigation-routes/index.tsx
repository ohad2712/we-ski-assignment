import { Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes = () => [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/404',
        element: <NotFound />,
    },
    {
        path: '/*',
        element: <Navigate to='/' />,
    }
];

export default routes;
