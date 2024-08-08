import { createContext, FC, ReactNode, useContext } from 'react';

const NavigationContext = createContext<any>(undefined);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }

  return context;
};

export const NavigationProvider: FC<{ navigation: any, children: ReactNode }> = ({ navigation, children }) => {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
};
