import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View } from "react-native";
import AuthComp from "../componamts/AuthCompnant";
import { url } from "../config";

export default function AuthScreen({ navigation }) {
  const [LoginOrSignUP, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleAuth = async () => {
    if (!email || !password) {
      setMessage(" Please enter both email and password");
      return;
    }

    const Url = `${url}/users`;

    if (LoginOrSignUP) {

      try {
        const res = await fetch(Url);
        const users = await res.json();
        console.log("Users from API:", users);

        const foundUser = users.find(
          (u) => u.email === email && u.password === password
        );

        if (foundUser) {
          setMessage(" Logged in successfully");

          
          await AsyncStorage.setItem("userId", foundUser.id);
          await AsyncStorage.setItem("userEmail", foundUser.email);

          navigation.replace("Dashboard");
        } else {
          setMessage(" Invalid email or password");
        }
      } catch (err) {
        console.error(err);
        setMessage("Something went wrong while logging in");
      }
    } else {
   
      try {
        const res = await fetch(Url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const newUser = await res.json();
        console.log("New User:", newUser);

        setMessage("Account created successfully! You can now log in.");
        setIsLogin(true);
      } catch (err) {
        console.error(err);
        setMessage("Something went wrong while signing up");
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AuthComp
        LoginOrSignUP={LoginOrSignUP}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onComfirm={handleAuth}
        switchMode={() => {
          setMessage("");
          setIsLogin(!LoginOrSignUP);
        }}
        message={message}
      />
    </View>
  );
}
