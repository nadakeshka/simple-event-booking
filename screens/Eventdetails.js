import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { eventDetailsStyles } from "../EventDetailsStyle";

export default function EventDetails({ route, navigation }) {
  const { event } = route.params; 

  return (
    <ScrollView style={eventDetailsStyles.container}>
    
      <TouchableOpacity
        style={eventDetailsStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Image source={{ uri: event.imageUrl }} style={eventDetailsStyles.image} />
      <View style={eventDetailsStyles.infoContainer}>
        <Text style={eventDetailsStyles.title}>{event.title}</Text>
        <Text style={eventDetailsStyles.text}>📅 {event.date}</Text>
        <Text style={eventDetailsStyles.text}>📍 {event.location}</Text>
        <Text style={eventDetailsStyles.text}>🎫 Type: {event.type}</Text>
        <Text style={eventDetailsStyles.text}>👥 Capacity: {event.capacity}</Text>
        <Text style={eventDetailsStyles.description}>{event.description}</Text>
      </View>
    </ScrollView>
  );
}
