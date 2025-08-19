import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const expenseCategories = [
  { id: 1, icon: 'home-outline', label: '$500' },
  { id: 2, icon: 'restaurant-outline', label: '$450' },
  { id: 3, icon: 'car-outline', label: '$350' },
  { id: 4, icon: 'flower-outline', label: '$0' },
  { id: 5, icon: 'heart-outline', label: '$0' },
  { id: 6, icon: 'happy-outline', label: '$0' },
  { id: 7, icon: 'school-outline', label: '$0' },
  { id: 8, icon: 'gift-outline', label: '$0' },
  { id: 9, icon: 'cart-outline', label: '$0' },
  { id: 10, icon: 'airplane-outline', label: '$0' },
];

const incomeCategories = [
  { id: 1, icon: 'home-outline', label: '$1500' },
  { id: 2, icon: 'cash-outline', label: '$1000' },
  { id: 3, icon: 'flower-outline', label: '$800' },
];

const expenseData = [
  {
    id: 1,
    icon: 'home-outline',
    title: 'Home Rent',
    date: '02 June, 2025',
    amount: '$500',
  },
  {
    id: 2,
    icon: 'car-outline',
    title: 'Car Fuel',
    date: '05 June, 2025',
    amount: '$100',
  },
  {
    id: 3,
    icon: 'restaurant-outline',
    title: 'Food',
    date: '05 June, 2025',
    amount: '$450',
  },
  {
    id: 4,
    icon: 'car-outline',
    title: 'Car Maintaining',
    date: '12 June, 2025',
    amount: '$250',
  },
];

const incomeData = [
  {
    id: 1,
    icon: 'home-outline',
    title: 'Home Rent',
    date: '02 June, 2025',
    amount: '$100',
  },
  {
    id: 2,
    icon: 'cash-outline',
    title: 'Company Salary',
    date: '05 June, 2025',
    amount: '$1000',
  },
  {
    id: 3,
    icon: 'home-outline',
    title: 'Home Rent',
    date: '07 June, 2025',
    amount: '$500',
  },
  {
    id: 4,
    icon: 'flower-outline',
    title: 'Other',
    date: '07 June, 2025',
    amount: '$800',
  },
];

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('expenses');
  const navigation = useNavigation();
  const categories =
    activeTab === 'expenses' ? expenseCategories : incomeCategories;
  const data = activeTab === 'expenses' ? expenseData : incomeData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BUDGET IQ</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>This Month ▼</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={
            activeTab === 'expenses' ? styles.activeBtn : styles.inactiveBtn
          }
          onPress={() => setActiveTab('expenses')}
        >
          <Text
            style={
              activeTab === 'expenses' ? styles.activeText : styles.inactiveText
            }
          >
            EXPENSES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 'income' ? styles.activeBtn : styles.inactiveBtn}
          onPress={() => setActiveTab('income')}
        >
          <Text
            style={
              activeTab === 'income' ? styles.activeText : styles.inactiveText
            }
          >
            INCOME
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        {categories.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryBox}
            onPress={() =>
              navigation.navigate('HomeRent', {
                id: item.id,
                title: item.label,
                icon: item.icon,
                type: activeTab,
              })
            }
          >
            <Icon name={item.icon} size={28} color="#16a34a" />
            <Text style={styles.categoryText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.sectionTitle}>
        {activeTab === 'expenses' ? 'Specific Cost' : 'Specific Earn'}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeRent', {
                title: item.title,
                amount: item.amount,
                date: item.date,
                icon: item.icon,
              })
            }
          >
            <View style={styles.expenseCard}>
              <Icon
                name={item.icon}
                size={26}
                color="#16a34a"
                style={{ marginRight: 12 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.expenseTitle}>{item.title}</Text>
                <Text style={styles.expenseDate}>{item.date}</Text>
              </View>
              <Text style={styles.expenseAmount}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  logo: { fontSize: 18, fontWeight: 'bold', color: '#16a34a' },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    borderRadius: 6,
  },
  dropdownText: { fontSize: 14 },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  activeBtn: {
    backgroundColor: '#16a34a',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  inactiveBtn: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  activeText: { color: 'white', fontWeight: 'bold' },
  inactiveText: { color: 'black', fontWeight: 'bold' },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryBox: { width: '22%', alignItems: 'center', marginVertical: 12 },
  categoryText: { marginTop: 6, fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  expenseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
  },
  expenseTitle: { fontSize: 15, fontWeight: 'bold' },
  expenseDate: { fontSize: 12, color: 'gray' },
  expenseAmount: { fontSize: 16, fontWeight: 'bold' },
});
