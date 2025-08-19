import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen'; 
import SettingsScreen from './screens/SettingsScreen'; 
import DashboardScreen from './screens/DashboardScreen'; 
import HomeRentScreen from './screens/HomeRentScreen';
import ProfileScreen from './screens/ProfileScreen'; 
import CurrencyScreen from './screens/CurrencyScreen'; 
import ExpensesCategoriesScreen from './screens/ExpansesCategoriesScreen'; 
import IncomeCatagoriesScreen from './screens/IncomeCatagoriesScreen'; 
import TermsPoliciesScreen from './screens/Terms&PoliciesScreen';
import SignupScreen from './screens/SignupScreen'; 
import AccountVerificationScreen from './screens/AccountVerificationScreen'; 
import ForgetPasswordScreen from './screens/ForgetPasswordScreen'; 
import NewPasswordScreen from './screens/NewPasswordScreen'; 
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, animation: 'slide_from_left' }} 
      />
      <Stack.Screen
        name="Home"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeRent"
        component={HomeRentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpensesCategories"
        component={ExpensesCategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IncomeCategories"
        component={IncomeCatagoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsPolicies"
        component={TermsPoliciesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountVerification"
        component={AccountVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
