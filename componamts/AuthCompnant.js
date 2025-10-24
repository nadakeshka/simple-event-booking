import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import AuthStyle from "../AuthStyle";

export default function AuthComp({
  LoginOrSignUP,
  email,
  setEmail,
  password,
  setPassword,
  onComfirm,
  switchMode,
  message,
}) {
  return (
    <View style={AuthStyle.container}>
 
      <View style={AuthStyle.leftSide}>
        <Image
          source={require("../assets/images/login.jpg")}
          style={AuthStyle.image}
        />
      </View>


      <View style={AuthStyle.rightSide}>
        <Text style={AuthStyle.title}>
          {LoginOrSignUP ? "WELCOME" : "Create Account"}
        </Text>

        <TextInput
          style={AuthStyle.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={AuthStyle.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={AuthStyle.button} onPress={onComfirm}>
          <Text style={AuthStyle.buttonText}>
            {LoginOrSignUP ? "LOGIN" : "SIGN UP"}
          </Text>
        </TouchableOpacity>

        <Text style={AuthStyle.toggleText} onPress={switchMode}>
          {LoginOrSignUP
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </Text>

        {message ? (
          <View style={AuthStyle.alertBox}>
            <Text style={{ color: message.startsWith("Error") ? "red" : "green" }}>
              {message}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
