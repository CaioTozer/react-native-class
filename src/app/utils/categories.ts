import { MaterialIcons } from "@expo/vector-icons";

type Category = {
    name: string;
    id: string;
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    {
        name: 'Curso',
        id: '1',
        icon: "code",
    },
    {
        name: 'Projeto',
        id: '2',
        icon: "folder",
    },
    {
        name: 'Vídeo',
        id: '3',
        icon: "movie",
    }
]