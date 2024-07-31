import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ReactElement, ReactNode } from 'react';

interface RequireType {
  children: ReactNode,
}

// Every single screen in Reminders++ must [BaseScreen] as it's root parent
export default function BaseScreen({ children }: RequireType) {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle='dark-content' />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EDE6D6',
  },
});