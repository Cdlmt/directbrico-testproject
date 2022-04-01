import React from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import ToDoItem from '../components/ToDoItem'
import { selectTasks } from "../redux";

export default function Index() {

    const tasks = useSelector(selectTasks);

    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Bonjour Yhanis,</Text>
            <Text style={styles.subTitle}>Tu as {tasks.filter((task: any) => task.done === false).length} tâches aujourd'hui.</Text>

            {tasks.map(task => <ToDoItem key={task.id} id={task.id} tags={["Test", "Marketing", "Developpement"]} name={task.name} done={task.done} />)}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 50
    },
    title: {
        fontSize: 24,
        fontWeight: "600"
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "300"
    }
});