import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StaggeredMenu from './components/ui/StaggeredMenu';
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

const queryClient = new QueryClient();

export default function App() {

  // {{-- smooth scroll setup --}} //
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  // {{--nav menu items--}} //
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/About' },
    { label: 'Projects', ariaLabel: 'View our services', link: '/Projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/Contact' }
  ];


  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/mohammad-ziadeh' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mohammad-ziadeh-a8400335b/' }
  ];

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <div>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#1E201E', '#3D0000']}
          logoUrl="images/pfp.png"
          accentColor="#8E1616"
        // onMenuOpen={() => console.log('Menu opened')}
        // onMenuClose={() => console.log('Menu closed')}
        />
        <main>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
