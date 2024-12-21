import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export function Button({ title, ...rest }: TouchableOpacityProps & { title: string; }) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}