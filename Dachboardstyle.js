import { StyleSheet } from "react-native";

export const eventStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7fffb",
    padding: 20,
  },
 header: {
  fontSize: 26,
  fontWeight: "600",
  color: "#2a9d8f",
  textAlign: "center",
  marginBottom: 25,
  textTransform: "uppercase",
  letterSpacing: 1,
},
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#4CD4A9",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
  alignSelf: "flex-start",
  marginLeft: 15,
  marginTop: 20,
  backgroundColor: "#2a9d8f",
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 20,
},

backText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

noEvents: {
  fontSize: 18,
  textAlign: "center",
  marginTop: 40,
  color: "#777",
},
myEventsButton: {
  alignSelf: "flex-end",
  marginRight: 15,
  marginTop: 50,
  backgroundColor: "#4CD4A9",
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 20,
},

myEventsText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},
registerButton: {
  backgroundColor: "#4CD4A9",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 10,
  alignItems: "center",
},

registerText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},

detailsButton: {
  backgroundColor: "#eee",
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 10,
},

detailsText: {
  color: "#333",
  fontSize: 15,
  fontWeight: "600",
},

logoutText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
},
logoutButton: {
  position: "absolute",
  top: 10,
  right: 20,
  backgroundColor: "#4CD4A9",
  padding: 10,
  borderRadius: 30,
  zIndex: 10,
  elevation: 5,
},

});
