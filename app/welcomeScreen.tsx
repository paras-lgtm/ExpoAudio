import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const welcomeScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPlaying, setIsPlaying] = useState(false);

  const PlayList = [
    {
      index: "1",
      title: "Softly",
      img: "https://i.scdn.co/image/ab67616d0000b273softly",
      uri: "https://example.com/audio/softly.mp3",
    },
    {
      index: "2",
      title: "On Top",
      img: "https://i.scdn.co/image/ab67616d0000b273ontop",
      uri: "https://example.com/audio/ontop.mp3",
    },
    {
      index: "3",
      title: "52 Bars",
      img: "https://i.scdn.co/image/ab67616d0000b27352bars",
      uri: "https://example.com/audio/52bars.mp3",
    },
    {
      index: "4",
      title: "Players",
      img: "https://i.scdn.co/image/ab67616d0000b273players",
      uri: "https://example.com/audio/players.mp3",
    },
    {
      index: "5",
      title: "Chitta Kurta",
      img: "https://i.scdn.co/image/ab67616d0000b273chittakurta",
      uri: "https://example.com/audio/chittakurta.mp3",
    },
    {
      index: "6",
      title: "Don't Look",
      img: "https://i.scdn.co/image/ab67616d0000b273dontlook",
      uri: "https://example.com/audio/dontlook.mp3",
    },
    {
      index: "7",
      title: "Mexico",
      img: "https://i.scdn.co/image/ab67616d0000b273mexico",
      uri: "https://example.com/audio/mexico.mp3",
    },
    {
      index: "8",
      title: "No Need",
      img: "https://i.scdn.co/image/ab67616d0000b273noneed",
      uri: "https://example.com/audio/noneed.mp3",
    },
    {
      index: "9",
      title: "Hint",
      img: "https://i.scdn.co/image/ab67616d0000b273hint",
      uri: "https://example.com/audio/hint.mp3",
    },
    {
      index: "10",
      title: "Try Me",
      img: "https://i.scdn.co/image/ab67616d0000b273tryme",
      uri: "https://example.com/audio/tryme.mp3",
    },
  ];

  return (
    <SafeAreaView style={styles.box}>
      <FlatList
        data={PlayList}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.container}>
              <Image source={{ uri: item.img }} style={styles.img} />
              <View
                style={{
                  width: 250,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.text}>{item.title}</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text>
                    {isPlaying ? (
                      <MaterialIcons name="pause" size={24} color="black" />
                    ) : (
                      <FontAwesome6 name="play" size={24} color="black" />
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.index}
      />
    </SafeAreaView>
  );
};

export default welcomeScreen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    gap: 5,
    backgroundColor: "white",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  img: {
    height: 50,
    width: 50,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 100,
  },
});
