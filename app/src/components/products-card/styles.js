import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        flex: 1,
    },
    card: {
        flexDirection: "row",
        height: 200,
        backgroundColor: "#fff",
        borderColor: "#FFBF00",
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        alignItems: "center",
    },
    info: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginLeft: 10,
    },
    quantity: {
        fontSize: 16,
        color: "#000",
    },
    price: {
        fontSize: 16,
        color: "#000",
    },

});