import { Alert, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { router } from "expo-router";
import { Categories } from "../components/categories";
import { Input } from "../components/input";
import { Button } from "../components/Button";
import { useState } from "react";
import { linkStorage } from "../storage/link-storage";

export default function Add() {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const handleAdd = async () => {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione a categoria")
            }

            if (!name.trim()) {
                return Alert.alert("Nome", "Insira um nome")
            }

            if (!url.trim()) {
                return Alert.alert("URL", "Insira uma URL")
            }

            await linkStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            })

            Alert.alert("Sucesso", "Novo link adicionado", [
                { text: "ok", onPress: () => router.back() }
            ])

        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o link")
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>
                Selecione uma categoria
            </Text>
            <Categories onChange={setCategory} selected={category} />
            <View style={styles.form}>
                <Input
                    placeholder="Nome"
                    onChangeText={setName}
                />
                <Input
                    placeholder="URL"
                    onChangeText={setUrl}
                />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}