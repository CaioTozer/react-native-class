import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
        justifyContent: "flex-start",
        alignContent: "flex-end"
    },

    title: {
        color: colors.green[900],
        fontSize: 22,
    },

    header: {
        paddingHorizontal: 24,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 32,
    },

    logo: {
        height: 48,
        width: 48,
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600]
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end",

    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 32,
        padding: 24,
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    modalCategory: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200]
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400]
    },
    modalFooter: {
        flexDirection: 'row',
        width: "100%",
        marginTop: 32,
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        justifyContent: "space-between",
        paddingVertical: 14,
    }
})