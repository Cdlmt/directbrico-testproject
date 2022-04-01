import React from 'react'
import { Dimensions, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import ProfileEditSection from '../components/ProfileEditSection';
import ProfileCategoryLine from '../components/ProfileCategoryLine';

export default function Profile() {

    function handleClick(link: any) {
        Linking.canOpenURL(link).then(supported => {

            if(supported) Linking.openURL(link);
            else console.log("Cannot open URI: " + link);

        });
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>

            <ProfileEditSection />

            <View style={styles.profileCategorySections}>

                <Text style={styles.profileCategorySectionsTitle}>Profil de Yhanis</Text>

                <ProfileCategoryLine content="Informations personnelles" icon="person" />
                <ProfileCategoryLine content="Tâches réalisées" icon="explore" />
                <ProfileCategoryLine content="Sécurité/Mot de passe" icon="fingerprint" />
                <ProfileCategoryLine content="Paiements" icon="payment" />
                <ProfileCategoryLine content="Calendrier" icon="event" />
                <ProfileCategoryLine content="Déconnexion" icon="login" />

            </View>

            <View style={styles.buttons}>

                <TouchableOpacity style={styles.button} onPress={() => handleClick("https://directbrico.com/")}><Icon name="launch"></Icon><Text> Site partenaire</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleClick("https://github.com/Cdlmt")}><Icon name="launch"></Icon><Text> Site web</Text></TouchableOpacity>

            </View>

            <View style={styles.version}>
                <Text style={styles.versionLabel}>v. Bêta (pour Direct Brico)</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileCategorySections: {
        marginTop: 20, 
        marginHorizontal: 10, 
        borderRadius: 6, 
        backgroundColor: '#FFFFFF', 
        flexDirection: "column", 
        padding: 10
    },
    profileCategorySectionsTitle: {
        fontSize: 24, 
        textAlign: "left", 
        fontWeight: '700', 
        marginVertical: 15,
        marginLeft: 10,
        color: "green"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },
    button: {
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
        width: Dimensions.get("window").width / 3,
        padding: 10,
        flexDirection: "row",
        margin: 10
    },
    version: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    versionLabel: {
        fontSize: 12,
        fontWeight: "200"
    }
});