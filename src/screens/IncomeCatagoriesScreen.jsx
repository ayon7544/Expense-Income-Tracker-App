import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const listItems = [
  { id: '1', name: 'Home', icon: 'home' },
  { id: '2', name: 'Company Salary', icon: 'briefcase' },
  { id: '3', name: 'Shop', icon: 'store' },
  { id: '4', name: 'Gift', icon: 'gift' },
  { id: '5', name: 'Car', icon: 'car' },
  { id: '6', name: 'Other', icon: 'dots-horizontal' },
];

const ListItem = ({ item, isSelected, onToggle }) => (
  <View style={styles.listItemContainer}>
    <View style={styles.leftContent}>
      <View style={styles.iconBackground}>
        <MaterialCommunityIcons name={item.icon} size={24} color="#00cc66" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
    <TouchableOpacity style={styles.checkboxContainer} onPress={() => onToggle(item.id)}>
      <View style={isSelected ? styles.checkboxSelected : styles.checkboxUnselected}>
        {isSelected && <MaterialCommunityIcons name="check" size={20} color="#fff" />}
      </View>
    </TouchableOpacity>
  </View>
);

const IncomeCatagoriesScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleToggle = id => {
    setSelectedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Income Categories</Text>
      </View>
      <View style={styles.container}>
        {listItems.map(item => (
          <ListItem key={item.id} item={item} isSelected={!!selectedItems[item.id]} onToggle={handleToggle} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default IncomeCatagoriesScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  header: { height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  backButton: { padding: 10, marginRight: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 40 },
  listItemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  leftContent: { flexDirection: 'row', alignItems: 'center' },
  iconBackground: { width: 48, height: 48, backgroundColor: '#eee', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  itemText: { color: '#000', fontSize: 18, fontWeight: 'bold' },
  checkboxContainer: { padding: 5 },
  checkboxUnselected: { width: 24, height: 24, borderRadius: 8, borderWidth: 2, borderColor: '#00cc66' },
  checkboxSelected: { width: 24, height: 24, borderRadius: 8, backgroundColor: '#00cc66', justifyContent: 'center', alignItems: 'center' },
});
