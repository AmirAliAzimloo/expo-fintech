// import * as SplashScreen from 'expo-splash-screen';

// import Page from '.';
import { Text, View } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 
  return  (<>
  <View style={{backgroundColor:"green",flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text>hello expo</Text>
  </View>
  </>);
}

// function RootLayoutNav() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Page />
//     </ThemeProvider>
//   );
// }
