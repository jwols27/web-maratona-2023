import routerData from './routerData';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import DefaultLayout from './pages/Layout/DefaultLayout.view';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <DefaultLayout>
                <Outlet />
            </DefaultLayout>
        ),
        children: routerData
    }
]);

export default router;
