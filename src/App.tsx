import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { MaxWidthWrapper, RootLayout } from './components';
import { IntroducePage, NewsPage } from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      retry: 0,
    },
  },
});

function App() {
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
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
