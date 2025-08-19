import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <View style={styles.statusBarPlaceholder} />
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.description}>
            To reset your password, please enter the email address that is
            associated with the account. You'll get the link in your e-mail.
          </Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="consultme@gmail.com"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => navigation.navigate('NewPassword')}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  backArrow: { fontSize: 40, color: '#000', fontWeight: '300' },
  statusBarPlaceholder: { width: '40%' },
  contentSection: { marginBottom: 40 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', lineHeight: 24 },
  formSection: { width: '100%' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: { marginTop: 30, width: '100%' },
  sendButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default ForgotPasswordScreen;
