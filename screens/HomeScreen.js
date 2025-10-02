import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/Styles';
import Timer from '../assets/icons/timer.svg';
import TimerLogo from '../assets/andNext-timers-green00bf63';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TimerLogo width={280} height={350} />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.timerButton} onPress={() => navigation.navigate('Timers')}>
          <Timer width={70} height={70} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.trafficButton} onPress={() => navigation.navigate('TrafficLights')}>
          <View style={{ flex: 1, backgroundColor: "#7dbf7d" }} />
          <View style={{ flex: 1, backgroundColor: "#e0a958" }} />
          <View style={{ flex: 1, backgroundColor: "#d96c6c" }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.countdownButton} onPress={() => navigation.navigate('Countdown')}>
          <Text style={styles.ten}>10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
