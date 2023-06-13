import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const About = ({ route }) => {
  const { id } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About {id}</Text>
    </View>
  );
};

export default About;
