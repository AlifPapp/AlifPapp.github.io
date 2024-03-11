import { useEffect, useState } from 'react';

const useTheme = () => {
  const [enabledTheme, setEnabled] = useState(null);

  useEffect(() => {
    // Get local storage theme preference
    let storedTheme = localStorage.getItem('darkMode');

    // There is no existing theme preference
    if (storedTheme === null) {
      // Get the device's preferred theme
      const devicePreferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // set the theme preference in local storage
      localStorage.setItem('darkMode', devicePreferredTheme);
      storedTheme = localStorage.getItem('darkMode');
    }

    // Add a class to the body
    if (storedTheme === 'true') {
      window.document.body.classList.add('dark');
    }

    // set enabledTheme
    setEnabled(storedTheme === 'true');
  }, []);

  // Function to set theme
  const setTheme = (set) => {
    // Add a class to the body
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    set ? bodyClass.add(className) : bodyClass.remove(className);

    // set local storage
    localStorage.setItem('darkMode', set);

    // set enabledTheme
    setEnabled(set);
  };

  return [enabledTheme, setTheme];
};

export default useTheme;
