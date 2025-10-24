import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { url } from "../config";
import { eventStyles } from "../Dachboardstyle";

export default function Dashboard({ navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${url}/events`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "Failed to fetch events.");
      }
    };

    fetchEvents();
  }, []);


  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userId");
      await AsyncStorage.removeItem("userEmail");
      navigation.replace("Auth"); 
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong while logging out.");
    }
  };

  const handleRegister = async (eventId) => {
    try {
      const userId = await AsyncStorage.getItem("userId");

      if (!userId) {
        Alert.alert("Error", "User not found. Please log in again.");
        return;
      }

      const eventRes = await fetch(`${url}/events/${eventId}`);
      const eventData = await eventRes.json();

      const alreadyRegistered = eventData.registrations.some(
        (r) => r.userId === userId
      );

      if (alreadyRegistered) {
        Alert.alert("Info", "You are already registered for this event.");
        return;
      }

      const updatedRegistrations = [
        ...eventData.registrations,
        { userId, status: "confirmed" },
      ];

      await fetch(`${url}/events/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...eventData, registrations: updatedRegistrations }),
      });

      Alert.alert("Success", "You have registered for this event!");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong while registering.");
    }
  };

  const renderEvent = ({ item }) => (
    <View style={eventStyles.card}>
      <Image source={{ uri: item.imageUrl }} style={eventStyles.image} />
      <View style={eventStyles.info}>
        <Text style={eventStyles.title}>{item.title}</Text>
        <Text style={eventStyles.details}>📅 {item.date}</Text>
        <Text style={eventStyles.details}>📍 {item.location}</Text>

      <TouchableOpacity
        style={eventStyles.detailsButton}
        onPress={() => navigation.navigate("EventDetails", { event: item })} 
      >
        <Text style={eventStyles.detailsText}>View Details</Text>
    </TouchableOpacity>


        <TouchableOpacity
          style={eventStyles.registerButton}
          onPress={() => handleRegister(item.id)}
        >
          <Text style={eventStyles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={eventStyles.container}>
     
      <TouchableOpacity style={eventStyles.logoutButton} onPress={handleLogout}>
        <Icon name="logout" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={eventStyles.myEventsButton}
        onPress={() => navigation.navigate("UserDashboard")}
      >
        <Text style={eventStyles.myEventsText}>🎟 My Events</Text>
      </TouchableOpacity>

      <Text style={eventStyles.header}>📅 Available Events</Text>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
