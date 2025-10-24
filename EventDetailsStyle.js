import { StyleSheet } from "react-native";

export const eventDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#4CD4A9",
    padding: 8,
    borderRadius: 25,
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: 230,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginVertical: 4,
  },
  description: {
    marginTop: 15,
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
});
