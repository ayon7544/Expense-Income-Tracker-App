import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const currencies = [
  {
    id: '1',
    country: 'United States of America',
    code: 'USD',
    flag: require('../assets/us.png'),
  },
  {
    id: '2',
    country: 'Australia',
    code: 'AUD',
    flag: require('../assets/australia.png'),
  },
  {
    id: '3',
    country: 'England',
    code: 'GBP',
    flag: require('../assets/england.png'),
  },
  {
    id: '4',
    country: 'New Zealand',
    code: 'NZD',
    flag: require('../assets/newzealand.png'),
  },
  {
    id: '5',
    country: 'Bangladesh',
    code: 'BDT',
    flag: require('../assets/bangladesh.png'),
  },
  {
    id: '6',
    country: 'Saudi Arabia',
    code: 'SAR',
    flag: require('../assets/saudi.png'),
  },
];

export default function CurrencyScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.flag} style={styles.flag} />
      <Text style={styles.country}>{item.country}</Text>
      <Text style={styles.code}>{item.code}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Currency</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={currencies}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  flag: { width: 32, height: 20, resizeMode: 'cover', marginRight: 12 },
  country: { flex: 1, fontSize: 16 },
  code: { fontSize: 16, fontWeight: '500' },
});
