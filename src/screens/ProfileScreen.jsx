import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    alert(`Saved:\n${firstName} ${lastName}\n${email}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Account Information</Text>

      <View style={styles.avatar}>
        <Ionicons name="person" size={40} color="black" />
      </View>

      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { width: '90%', marginTop: 10 }]}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>SAVE CHANGE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  backButton: { alignSelf: 'flex-start', marginTop: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: 'green', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between', width: '90%' },
  input: { borderBottomWidth: 1, borderColor: '#ccc', flex: 1, marginHorizontal: 5, padding: 8 },
  saveButton: { marginTop: 100, backgroundColor: '#1abc9c', padding: 15, borderRadius: 30, width: '90%', alignItems: 'center' },
  saveText: { color: '#fff', fontWeight: 'bold' },
  footer: { marginTop: 'auto', width: '100%', alignItems: 'center', paddingBottom: 20 },
});
