import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Platform, Image, Modal } from 'react-native'
import { useDispatch } from 'react-redux';
//@ts-ignore
import profilePicture from '../assets/images/profile.png';
import { deleteTask, toggleTaskFinish } from "../redux";

export default function ToDoItem(props: any) {

    const [tags, setTags] = useState(props.tags);

    const dispatch = useDispatch();

    function toggleTaskDone() {
        dispatch(toggleTaskFinish(props.id));
    }

    return (
        <TouchableOpacity style={props.done ? styles.itemDone : styles.item} onPress={toggleTaskDone}>

            <View style={styles.itemProfile}>

                <Image source={profilePicture} style={styles.itemProfilePicture} />

            </View>

            <View style={styles.itemTexts}>

                <View style={styles.itemTags}>
                    {tags.map((tag: String, index: any) => 
                        <TouchableOpacity key={index} style={styles.itemTagContainer} onPress={() => setTags(tags?.filter((t: String) => t != tag ))}>
                            <Text style={styles.itemTag} key={index}>{tag}</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <Text style={styles.itemName}>{props.name}</Text>

            </View>
            
            <View style={styles.status}><View style={props.done ? styles.itemStatusDone : styles.itemStatus}></View></View>

            <TouchableOpacity style={styles.close} onPress={() => dispatch(deleteTask(props.id))}><Text style={styles.closeText}>X</Text></TouchableOpacity>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F7F7F7',
        width: '100%',
        height: 75,
        flexDirection: 'row',
        borderRadius: 6,
        padding: 5,
        margin: 5
    },
    itemDone: {
        backgroundColor: '#CECECE',
        width: '100%',
        height: 75,
        flexDirection: 'row',
        borderRadius: 6,
        padding: 5,
        margin: 5
    },
    itemTexts: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    itemTags: {
        flexDirection: 'row',
    },
    itemName: {
        fontWeight: "600"
    },
    itemTag: {
        fontSize: 14,
        opacity: 1,
        color: "white"
    },
    itemTagContainer: {
        backgroundColor: "orange",
        borderRadius: 100,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 2
    },
    itemProfile: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    itemProfilePicture: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    status: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    itemStatus: {
        width: 12,
        height: 12,
        backgroundColor: "orange",
        borderRadius: 20
    },
    itemStatusDone: {
        width: 12,
        height: 12,
        backgroundColor: "green",
        borderRadius: 20
    },
    close: {
        position: "absolute",
        top: 4,
        right: 16
    },
    closeText: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold"
    }
});
