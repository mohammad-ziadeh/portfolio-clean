import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StaggeredMenu from './components/ui/StaggeredMenu';

const queryClient = new QueryClient();

export default function App() {

  // nav menu items
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Soon', ariaLabel: 'Learn about us', link: '/' },
    { label: 'Soon', ariaLabel: 'View our services', link: '/' },
    { label: 'Soon', ariaLabel: 'Get in touch', link: '/' }
  ];

  //   const menuItems = [
  //   { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  //   { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  //   { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  //   { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  // ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/mohammad-ziadeh' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mohammad-ziadeh-a8400335b/' }
  ];

  return (
    <div>
      <div style={{ height: '100vh', background: 'transparent', zIndex: 999, position: 'fixed', top: 0, left: 0, width: '100%' }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/pfp.png"
          accentColor="#ff6b6b"
        // onMenuOpen={() => console.log('Menu opened')}
        // onMenuClose={() => console.log('Menu closed')}
        />
      </div>
      <main>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
