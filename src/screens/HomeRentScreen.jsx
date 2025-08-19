import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function HomeRentScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, amount, date, icon } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="cash-outline" size={22} color="black" />
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.value}>{amount}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="calendar-outline" size={22} color="black" />
        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16a34a',
    padding: 14,
    marginTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  row: { flexDirection: 'row', alignItems: 'center', margin: 16 },
  label: { marginLeft: 10, fontSize: 16, flex: 1 },
  value: { fontWeight: 'bold', fontSize: 16 },
});
