import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
    },
    logo: {
        margin: 20,
    },
    btnContainer: {
        flexDirection: "row"
    },
    btn: {
        padding: 15,
        margin: 15,
        borderRadius: 10,
        backgroundColor:  "#dc3545",
        alignItems: "center",
    }
})

export default styles;