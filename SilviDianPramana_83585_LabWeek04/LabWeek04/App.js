import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import userData from "./data.json";
import styles from "./App.styles";

// Mapping gambar lokal
const imageMapping = {
  "foto_Silvi.jpg": require("./assets/foto_Silvi.jpg"),
  "Shella.jpg": require("./assets/Shella.jpg"),
  "bungaku.jpg": require("./assets/bungaku.jpg"),
  "logo_s.jpg": require("./assets/logo_s.jpeg"),
  "Ellipsis.gif": require("./assets/Ellipsis.gif"),
  "download.jpeg": require("./assets/download.jpeg"),
};

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSmallImage, setIsSmallImage] = useState(false);

  // Filter data berdasarkan pencarian
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Cari nama..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView>
        {filteredUsers.map((user) => (
          <Pressable key={user.id} onPress={() => setSelectedUser(user)}>
            <View style={styles.card}>
              <Pressable onPress={() => setIsSmallImage(!isSmallImage)}>
                <Image
                  source={imageMapping[user.photo_url] || require("./assets/foto_Silvi.jpg")}
                  style={isSmallImage ? styles.smallAvatar : styles.avatar}
                />
              </Pressable>
              <View style={styles.textContainer}>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text>{user.info}</Text>
                <Text>{user.email || "Email tidak tersedia"}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Modal untuk menampilkan detail user */}
      <Modal
        visible={!!selectedUser}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedUser(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedUser && (
              <>
                <Pressable onPress={() => setIsSmallImage(!isSmallImage)}>
                  <Image
                    source={imageMapping[selectedUser.photo_url] || require("./assets/foto_Silvi.jpg")}
                    style={isSmallImage ? styles.smallAvatar : styles.modalAvatar}
                  />
                </Pressable>
                <Text style={styles.modalTitle}>{selectedUser.name}</Text>
                <Text>{selectedUser.info}</Text>
                <Text>{selectedUser.email || "Email tidak tersedia"}</Text>
                <Pressable onPress={() => setSelectedUser(null)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Tutup</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
