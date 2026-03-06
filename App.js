import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.name}>Dani Martinez</Text>
            </View>
          </View>

          {/* search */}
          <View style={styles.searchBox}>
            <TextInput placeholder="Search doctor" />
            <Ionicons name="search" size={20} color="#555" />
          </View>
        </View>

        {/* categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>

          <View style={styles.grid}>
            {["Consultation", "Dentist", "Cardiologist", "Hospital", "Emergency", "Laboratory"].map((item, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <FontAwesome5 name="stethoscope" size={24} color="#6C63FF" />
                <Text style={styles.cardText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* top doctors */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top doctors</Text>

          <View style={styles.doctorCard}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
              style={styles.doctorImage}
            />
            <View>
              <Text style={styles.doctorName}>dr. Olivia Wilson</Text>
              <Text style={styles.specialty}>
                Consultant - Physiotherapy
              </Text>
              <Text style={styles.rating}> 4.9 (37 Reviews)</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* botão Navigation */}
      <View style={styles.navBar}>
        <Ionicons name="home" size={24} color="#fff" />
        <Ionicons name="medkit" size={24} color="#fff" />
        <Ionicons name="calendar" size={24} color="#fff" />
        <Ionicons name="person" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    backgroundColor: "#6C63FF",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcome: {
    color: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "30%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  cardText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },
  doctorCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  doctorName: {
    fontWeight: "bold",
  },
  specialty: {
    fontSize: 12,
    color: "#555",
  },
  rating: {
    fontSize: 12,
    color: "#888",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#6C63FF",
    padding: 15,
  },
});