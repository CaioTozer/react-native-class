import { View, Image, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from 'react-native'
import { styles } from './styles'

import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Categories } from '../components/categories'
import { Link } from '../components/Link'
import { Option } from '../components/option'
import { router, useFocusEffect } from 'expo-router'
import { useCallback, useState } from 'react'
import { categories } from '../utils/categories'
import { LinkStorage, linkStorage } from '../storage/link-storage'

export default function Index() {
    const [showModal, setShowModal] = useState(false)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [link, setLink] = useState<LinkStorage | null>(null)
    const [category, setCategory] = useState(categories[0].name);

    async function getLinks() {
        try {
            const response = await linkStorage.get()

            const filtered = response.filter((link) => link.category === category)

            setLinks(filtered)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar os links")
        }
    }

    async function handleRemove() {
        try {
            Alert.alert("Excluir", "Deseja realmente excluir o link?", [
                { style: "cancel", text: "Não" },
                {
                    text: "Sim", onPress: async () => {
                        await linkStorage.remove(link?.id || "")
                        setShowModal(false)
                    }
                }
            ])
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o link")
        }
    }

    async function handleOpen() {
        try {
            await Linking.openURL(link?.url || "")
        } catch (error) {
            Alert.alert("Erro", "Não foi possível abrir o link")
        }
    }

    const handleDetails = (selected: LinkStorage) => {
        setShowModal(true)
        setLink(selected)
    }

    useFocusEffect(
        useCallback(() => {
            getLinks()
        }, [links]))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/app/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name='add' size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Categories onChange={setCategory} selected={category} />
            <FlatList
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link
                        name={item.name}
                        url={item.url}
                        onDetails={() => handleDetails(item)}
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={showModal} transparent animationType='slide'>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                Curso
                            </Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons name='close' size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            {link?.name}
                        </Text>

                        <Text style={styles.modalUrl}>
                            {link?.url}
                        </Text>
                        <View style={styles.modalFooter}>
                            <Option
                                name='Excluir'
                                icon='delete'
                                variant='secundary'
                                onPress={handleRemove}
                            />
                            <Option
                                name='Abrir'
                                icon='language'
                                onPress={handleOpen}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}