import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AccountVerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const email = 'co***ty@gmail.com';
  const navigation = useNavigation();

  const handleTextChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (code[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newCode = [...code];
        newCode[index - 1] = '';
        setCode(newCode);
      }
    }
  };

  const handleSendPress = () => {
    const fullCode = code.join('');
    console.log('Sending code:', fullCode);
    Keyboard.dismiss();
    navigation.navigate('Home');
  };

  const handleSendAgainPress = () => {
    console.log('Resending code...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Account Verification</Text>
        <Text style={styles.subtitle}>
          To verify your account, please enter the verification code that you
          have received in your email
          <Text style={styles.emailText}> {email}</Text>
        </Text>
        <View style={styles.inputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={digit}
              onChangeText={text => handleTextChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              ref={el => (inputRefs.current[index] = el)}
              textAlign="center"
            />
          ))}
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Didn't get a code?</Text>
          <TouchableOpacity onPress={handleSendAgainPress}>
            <Text style={styles.sendAgainLink}> Send Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { paddingHorizontal: 20, marginTop: 50 },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#000' },
  subtitle: { fontSize: 16, color: '#333', lineHeight: 24 },
  emailText: { fontWeight: 'bold' },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: '#1EAE66',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: { fontSize: 14, color: '#666' },
  sendAgainLink: { fontSize: 14, color: '#1EAE66', fontWeight: 'bold' },
});

export default AccountVerificationScreen;
