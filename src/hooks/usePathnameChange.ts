import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const usePathnameChange = (onChange: VoidFunction) => {
  const location = useLocation();
  const initialPathname = useRef(location);

  useEffect(() => {
    if (initialPathname.current !== location) {
      onChange();
    }
  }, [location, onChange]);
};
