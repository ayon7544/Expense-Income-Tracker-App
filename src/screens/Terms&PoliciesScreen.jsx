import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const termsData = [
  {
    title: '1. Use of the App',
    content:
      'By using Budget IQ, you confirm you are at least 18 years old and agree to these Terms.',
  },
  {
    title: '2. Accounts',
    content:
      "You may need to create an account. You're responsible for keeping your login details secure.",
  },
  {
    title: '3. Features & Advice',
    content:
      "Our tools help you manage your finances, but we don't offer financial, legal, or tax advice.",
  },
  {
    title: '4. Privacy',
    content:
      "We respect your privacy and handle your data per our Privacy Policy. We don't share or sell your information without consent, unless required by law.",
  },
  {
    title: '5. Subscriptions',
    content:
      'Some features require a paid plan. Fees may change with notice. You can cancel anytime via account settings.',
  },
  {
    title: '6. Refunds',
    content:
      "We don't offer refunds for partial billing periods unless legally required.",
  },
  {
    title: '7. Acceptable Use',
    content: "Don't misuse the app, break laws, or provide false info.",
  },
  {
    title: '8. Ownership',
    content:
      'All content and software in Budget IQ belong to us or our partners.',
  },
  {
    title: '9. No Guarantees',
    content:
      'We provide the app "as-is." We cannot guarantee it will always work perfectly.',
  },
  {
    title: '10. Liability',
    content:
      "We're not liable for any damages resulting from your use of the app, as allowed by law.",
  },
  {
    title: '11. Changes',
    content:
      'We may update these Terms at any time. Continued use means you accept the changes.',
  },
  {
    title: '12. Governing Law',
    content: 'These Terms are governed by the laws of [Your Jurisdiction].',
  },
  {
    title: '13. Contact',
    content: 'Questions? Email us at support@budgetiq.com.',
  },
];

const TermsPoliciesScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={28} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Terms & Conditions</Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.intro}>
        Welcome to Budget IQ, your personal finance tool for budgeting, saving,
        and tracking goals. By using Budget IQ, you agree to the terms below and
        our Privacy Policy.
      </Text>
      {termsData.map((term, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{term.title}</Text>
          <Text style={styles.sectionText}>{term.content}</Text>
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default TermsPoliciesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  backButton: { marginRight: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  content: { padding: 20 },
  intro: { fontSize: 16, color: '#444', marginBottom: 20, lineHeight: 22 },
  section: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  sectionText: { fontSize: 16, color: '#555', lineHeight: 22 },
});
