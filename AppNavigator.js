import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen';

const AppNavigator = createStackNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        DetailScreen: { screen: DetailScreen },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#336699',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
          },
    }
);

export default createAppContainer(AppNavigator)