import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function ProfileCategoryLine(props: any) {
    return (
        <TouchableOpacity style={styles.item}>

            <Icon style={styles.icon} name={props.icon} />
            <Text style={styles.content}> {props.content}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        width: Dimensions.get("window").width,
        height: 60,
        backgroundColor: "#F7F7F7",
        textAlign: "left",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        marginTop: -1
    },
    icon: {
        marginLeft: 10
    },
    content: {
        fontSize: 20,
        fontWeight: "500",
    }
});