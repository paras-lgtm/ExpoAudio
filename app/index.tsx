import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import Slider from "@react-native-community/slider";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextTicker from "react-native-text-ticker";
const audioSource = "https://backend.nanistori.com/audio/1772025024926.mp3";

export default function App() {
  const player = useAudioPlayer({ uri: audioSource });
  const [isPlaying, setIsPlaying] = useState(false);
  const status = useAudioPlayerStatus(player);

  const handlePress = () => {
    if (isPlaying) {
      player.play();
    } else {
      player.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <LinearGradient colors={["#5b0202", "black"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ height: 50, width: "100%", overflow: "hidden" }}>
          <TextTicker
            style={styles.ticker}
            loop
            bounce={false}
            animationType="scroll"
            marqueeDelay={0}
            scrollSpeed={120}
          >
            Welcome to the App • Welcome to the App • Welcome to the App
          </TextTicker>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.img}
            source={require("/Users/yash/Desktop/Expo audio/expo-audio/assets/images/1900x1900-000000-80-0-0.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Text style={styles.text}>{Math.floor(status.currentTime)}</Text>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={status.duration || 1}
            value={status.currentTime}
            minimumTrackTintColor="white"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="white"
            onSlidingComplete={(value) => {
              player.seekTo(value);
            }}
          />
          <Text style={styles.text}> {Math.floor(status.duration)}</Text>
        </View>
        <View style={styles.playBox}>
          <Foundation name="previous" size={38} color="white" />
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text>
              {isPlaying ? (
                <FontAwesome name="play" size={24} color="white" />
              ) : (
                <FontAwesome name="pause" size={24} color="white" />
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              player.seekTo(0);
              player.play();
              setIsPlaying(false);
            }}
          >
            <Text>
              <Foundation name="next" size={38} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          player.seekTo(0);
          player.play();
          setIsPlaying(false);
        }}
      >
        <Text>Reset</Text>
      </TouchableOpacity> */}
        <TouchableOpacity onPress={() => router.push("/welcomeScreen")}>
          <Text style={{ color: "white" }}>Go to Welcome Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 10,
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  img: {
    width: 300,
    height: 300,
  },
  box: {
    margin: 20,
  },
  playBox: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  ticker: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    gap: 10,
  },
  bar: {
    width: 300,
    height: 2,
    backgroundColor: "white",
  },
  text: {
    color: "white",
  },
});
