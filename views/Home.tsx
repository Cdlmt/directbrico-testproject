import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddTaskModal from '../components/AddTaskModal'
import Index from './Index'

export default function Home() {

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <View style={styles.container}>
            <Index />

            <TouchableOpacity style={styles.itemPlus} onPress={() => setModalOpened(true)}>
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>

            <AddTaskModal visible={modalOpened} setModalOpened={setModalOpened} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemPlus: {
        width: 32,
        height: 32,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        position: "absolute",
        bottom: 40,
        right: 40
    },
    plusText: {
        color: "white",
        fontSize: 28,
        marginTop: -3
    },
});
