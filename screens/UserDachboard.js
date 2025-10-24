import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { url } from "../config";
import { eventStyles } from "../Dachboardstyle";

export default function UserDashboard({ navigation }) {
  const [userEvents, setUserEvents] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const id = await AsyncStorage.getItem("userId");
        setUserId(id);

        const res = await fetch(`${url}/events`);
        const data = await res.json();
        const registeredEvents = data.filter((event) =>
          event.registrations?.some((r) => r.userId === id)
        );

        setUserEvents(registeredEvents);
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "Failed to load user events.");
      }
    };

    fetchUserEvents();
  }, []);

  const renderEvent = ({ item }) => (
    <View style={eventStyles.card}>
      <Image source={{ uri: item.imageUrl }} style={eventStyles.image} />
      <View style={eventStyles.info}>
        <Text style={eventStyles.title}>{item.title}</Text>
        <Text style={eventStyles.details}>📅 {item.date}</Text>
        <Text style={eventStyles.details}>📍 {item.location}</Text>
        <Text style={eventStyles.details}>🟢 Registered</Text>
      </View>
    </View>
  );

  return (
    <View style={eventStyles.container}>
      
      <TouchableOpacity
        style={eventStyles.backButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={eventStyles.backText}>← Back to Events</Text>
      </TouchableOpacity>

      <Text style={eventStyles.header}>🎟 My Registered Events</Text>

      {userEvents.length > 0 ? (
        <FlatList
          data={userEvents}
          keyExtractor={(item) => item.id}
          renderItem={renderEvent}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <Text style={eventStyles.noEvents}>You haven’t registered for any events yet.</Text>
      )}
    </View>
  );
}
