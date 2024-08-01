import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { MaxWidthWrapper, RootLayout } from './components';
import { IntroducePage, NewsPage } from './pages';
import NewsDetailPage from './pages/NewsPage/NewsDetailPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      retry: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RootLayout>
        <MaxWidthWrapper>
          <Outlet />
        </MaxWidthWrapper>
      </RootLayout>
    ),
    // loader: rootLoader,
    children: [
      {
        index: true,
        path: '/',
        element: <IntroducePage />,
      },
      {
        path: '/tin-tuc',
        element: <NewsPage />,
        children: [
          {
            path: '/tin-tuc/:id',
            element: <NewsDetailPage />,
          },
        ],
      },
      {
        index: true,
        path: '/',
        element: <IntroducePage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
