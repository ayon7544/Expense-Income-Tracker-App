import React, { useState } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = ({ navigation }) => {
  const [step, setStep] = useState(0);

  const pages = [
    {
      image: require('../assets/Onboardingimage.png'),
      title: 'Your Trusted Financial Advisor — Always Within Reach',
      subtitle:
        'Connect instantly with savings experts — right from your phone.',
    },
    {
      image: require('../assets/Onboardingimage2.png'),
      title: 'Best Budgeting Tools for Home Finances',
      subtitle:
        'Easily log in or sign up to connect with BUDGET IQ and calculate your daily cost',
    },
  ];

  const handleNext = () => {
    if (step < pages.length - 1) {
      setStep(step + 1);
    } else {
      navigation.replace('Login');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={pages[step].image}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{pages[step].title}</Text>
          <Text style={styles.subtitle}>{pages[step].subtitle}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {step === pages.length - 1 ? 'Next' : 'Next'}
            </Text>
          </TouchableOpacity>
          <View style={styles.dotsContainer}>
            {pages.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, step === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: { width: '100%', height: 250, marginTop: 200 },
  textContainer: { paddingHorizontal: 10, alignItems: 'center' },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomContainer: { alignItems: 'center' },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 100,
    width: 300,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: { backgroundColor: '#28a745', width: 16 },
});
