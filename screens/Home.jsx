import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home </Text>
      <Button
        title="About"
        onPress={() =>
          navigation.navigate("About", {
            id: 634,
          })
        }
      />
    </View>
  );
};

export default Home;
