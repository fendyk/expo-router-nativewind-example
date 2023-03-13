import {Text, View} from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
    return (
    <View>
        <Stack.Screen options={{ title: "Home" }} />
        <View className={" m-4"}>
            <Text className={"text-3xl font-bold"}>Welkom Raul Fernandez</Text>
        </View>
    </View>
    )
}