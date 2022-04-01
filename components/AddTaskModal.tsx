import React, { useState } from 'react'
import { Modal, Text, TextInput, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, addTask } from '../redux';

export default function AddTaskModal(props: any) {

    const [task, setTask] = useState("");
    const tasks = useSelector(selectTasks);
    const dispacth = useDispatch();

    function addTaskToRedux() {
        dispacth(addTask(task));
        setTask("");
        props.setModalOpened(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => props.setModalOpened(!props.visible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    
                    <TouchableOpacity style={styles.modalClose} onPress={() => props.setModalOpened(false)}>
                        <Text style={styles.modalCloseText}>x</Text>
                    </TouchableOpacity>

                    <Text style={styles.modalText}>Ajouter une tâche ?</Text>
                    <TextInput style={styles.input} onChangeText={setTask} value={task} />
                    <Pressable style={styles.addTask} onPress={addTaskToRedux}><Text style={styles.addTaskText}>Ajouter</Text></Pressable>
                
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    addTask: {
        width: 100,
        height: 30,
        backgroundColor: "black",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    addTaskText: {
        color: "#FFFFFF"
    },
    modalClose: {
        position: "absolute",
        top: 4,
        right: 16
    },
    modalCloseText: {
        color: "red",
        fontSize: 28
    }
});