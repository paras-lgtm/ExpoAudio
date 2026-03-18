import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const audioSource = "https://backend.nanistori.com/audio/1772025024926.mp3";

export default function App() {
  const player = useAudioPlayer({ uri: audioSource });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [Duration, setDuration] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(player.currentTime);
      setDuration(player.duration);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handlePress = () => {
    if (isPlaying) {
      player.play();
    } else {
      player.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {formatTime(currentTime)}/{formatTime(Duration)}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text>
          {isPlaying ? (
            <FontAwesome name="play" size={24} color="red" />
          ) : (
            <FontAwesome name="pause" size={24} color="black" />
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          player.seekTo(0);
          player.play();
          setIsPlaying(false);
        }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 10,
    backgroundColor: "white",
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
