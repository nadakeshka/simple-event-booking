import { Platform, StyleSheet } from "react-native";


export default StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#4CD4A9",
    margin: 0,
    padding: 0,
    width: Platform.OS === "web" ? 800 : 380, 
  },
leftSide: {
  flex: 1,
  backgroundColor: "#4CD4A9",
  justifyContent: "center",  
  alignItems: "flex-start",
  paddingLeft: 0,               
  marginLeft: 0,                
},

  rightSide: {
    flex: 1.1,
    backgroundColor: "#f1e3e3ff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 8,
  },

  image: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    fontFamily:"sans-serif",
  },

  input: {
    width: "80%",
    borderBottomWidth: 2,
    borderBottomColor: "#4CD4A9",
    paddingVertical: 8,
    marginBottom: 20,
    fontSize: 16,
    color: "#b4b0b0ff",
  },

  button: {
    backgroundColor: "#4CD4A9",
    paddingVertical: 12,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#f1e3e3ff",
    fontWeight: "bold",
    fontSize: 18,
  },

  toggleText: {
    color: "#4CD4A9",
    marginTop: 20,
    fontSize: 12,
  },

  alertBox: {
    marginTop: 15,
    backgroundColor: "#F3FDF8",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
});
