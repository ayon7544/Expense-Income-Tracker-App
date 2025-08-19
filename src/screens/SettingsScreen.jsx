import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen({ navigation }) {
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const menuItems = [
    { id: 1, icon: 'cash-outline', label: 'Currency', screen: 'Currency' },
    {
      id: 2,
      icon: 'stats-chart-outline',
      label: 'Expenses Categories',
      screen: 'ExpensesCategories',
    },
    {
      id: 3,
      icon: 'bar-chart-outline',
      label: 'Income Categories',
      screen: 'IncomeCategories',
    },
    {
      id: 4,
      icon: 'shield-checkmark-outline',
      label: 'Terms & Policies',
      screen: 'TermsPolicies',
    },
    {
      id: 5,
      icon: 'thumbs-up-outline',
      label: 'Review The App',
      action: () => {
        setDeleteModalVisible(false);
        setReviewModalVisible(true);
      },
    },
    {
      id: 6,
      icon: 'trash-outline',
      label: 'Delete Account',
      action: () => {
        setReviewModalVisible(false);
        setDeleteModalVisible(true);
      },
    },
  ];

  const handleMenuItemPress = item => {
    if (item.action) item.action();
    else navigation.navigate(item.screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.header}>Account</Text>

        <TouchableOpacity
          style={styles.profileCard}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="person-circle-outline" size={40} color="#16a34a" />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={styles.profileName}>Himel Mahmud</Text>
            <Text style={styles.profileEmail}>abchimel@gmail.com</Text>
          </View>
          <Icon name="chevron-forward-outline" size={22} color="black" />
        </TouchableOpacity>

        {menuItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item)}
          >
            <Icon name={item.icon} size={24} color="#16a34a" />
            <Text style={styles.menuText}>{item.label}</Text>
            <Icon
              name="chevron-forward-outline"
              size={20}
              color="black"
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => alert('Logged out!')}
        >
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={reviewModalVisible}
        onRequestClose={() => setReviewModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Please Review The App</Text>
            <Text style={styles.modalDescription}>
              Insert your thoughts about the app
            </Text>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="star-outline"
                  size={30}
                  color="#16a34a"
                  style={{ marginHorizontal: 5 }}
                />
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setReviewModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={() => {
                  alert('Review Submitted!');
                  setReviewModalVisible(false);
                }}
              >
                <Text style={styles.submitButtonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Icon
              name="trash-bin-outline"
              size={50}
              color="#ef4444"
              style={styles.trashIcon}
            />
            <Text style={styles.modalTitle}>
              Are you sure you want to delete your Budget IQ account?
            </Text>
            <Text style={styles.modalDescription}>
              This will permanently remove all your data and cannot be undone.
              Please confirm to proceed.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.deleteButton]}
                onPress={() => {
                  alert('Account Deleted!');
                  setDeleteModalVisible(false);
                }}
              >
                <Text style={styles.deleteButtonText}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  profileName: { fontSize: 16, fontWeight: 'bold' },
  profileEmail: { fontSize: 14, color: 'gray' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  menuText: { fontSize: 15, marginLeft: 12, fontWeight: '500' },
  logoutBtn: {
    backgroundColor: '#16a34a',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '85%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  starsContainer: { flexDirection: 'row', marginBottom: 20 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: { backgroundColor: '#e5e7eb' },
  cancelButtonText: { color: '#6b7280', fontWeight: 'bold' },
  submitButton: { backgroundColor: '#16a34a' },
  submitButtonText: { color: 'white', fontWeight: 'bold' },
  deleteButton: { backgroundColor: '#ef4444' },
  deleteButtonText: { color: 'white', fontWeight: 'bold' },
  trashIcon: { marginBottom: 10 },
});
