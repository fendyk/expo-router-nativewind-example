import {Text, View} from "react-native";
import { Link, Stack } from "expo-router";

export default function Customers() {

    return (
        <View>
            <Stack.Screen options={{ title: "Klanten" }} />
            <Link href="/">Go to Details</Link>
        </View>
    )
}