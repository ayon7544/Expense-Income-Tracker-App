import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from './DashboardScreen';
import SettingsScreen from './SettingsScreen';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require('../assets/HomeScreenLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/Profile.png')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          “Skipping one coffee = $5 closer to your goal”
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <Image
          source={require('../assets/Chart.png')}
          style={styles.chart}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Dashboard') iconName = 'grid';
          else if (route.name === 'Settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#28a745',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 15 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { width: 130, height: 40 },
  profile: { width: 100, height: 50 },
  banner: {
    backgroundColor: '#7fef9bff',
    padding: 10,
    borderRadius: 20,
    marginVertical: 100,
    alignItems: 'center',
  },
  bannerText: { margin: 10, fontSize: 15, fontWeight: '700' },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  chart: { width: 400, height: 400 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
