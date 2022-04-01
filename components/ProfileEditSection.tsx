import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
//@ts-ignore
import profilePicture from '../assets/images/profile.png';

export default function ProfileEditSection() {
    return (
        <View style={styles.profileEditSection}>

            <Image source={profilePicture} style={styles.profilePicture} />

            <View style={styles.profileTexts}>

                <Text style={styles.profileTitle}>Yhanis B.</Text>
                <TouchableOpacity style={styles.editProfileSection}>

                    <Icon name="edit" size={16} />
                    <Text> Editer votre profil</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    profileEditSection: {
        marginTop: 50,
        width: 300,
        height: 100,
        backgroundColor: "#F7F7F7",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: "row"
    },
    profilePicture: {
        width: 75,
        height: 75,
        borderRadius: 50
    },
    profileTexts: {
        flexDirection: "column",
        marginLeft: 20
    },
    profileTitle: {
        fontSize: 24,
        fontWeight: "600"
    },
    editProfileSection: {
        flexDirection: "row"
    }
});