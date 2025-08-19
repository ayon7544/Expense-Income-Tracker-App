import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
    navigation.replace("Home"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="consultme@gmail.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 100 },
  title: { fontSize: 22, fontWeight: "700", color: "#28a745", textAlign: "center", marginBottom: 20 },
  logoContainer: { alignItems: "center", marginBottom: 20 },
  logoImage: { width: 400, height: 200 },
  label: { fontSize: 14, fontWeight: "500", color: "#28a745", marginBottom: 6 },
  input: { borderWidth: 1, borderColor: "#28a745", borderRadius: 8, paddingVertical: 12, paddingHorizontal: 12, marginBottom: 15, fontSize: 14, color: "#000" },
  forgotPassword: { alignSelf: "flex-end", color: "#28a745", marginBottom: 25 },
  loginButton: { backgroundColor: "#28a745", paddingVertical: 15, borderRadius: 10, alignItems: "center", marginBottom: 20 },
  loginText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  signupContainer: { flexDirection: "row", justifyContent: "center" },
  signupText: { fontSize: 14, color: "#000" },
  signupLink: { fontSize: 14, color: "#28a745", fontWeight: "600" },
});
