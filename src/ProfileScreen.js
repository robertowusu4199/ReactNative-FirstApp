import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function profileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Edit Profile</Text>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/Ipad.jpg')} />
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Text style={styles.detailLable}>School</Text>
                    <Text style={styles.detailContent}>Harvard Business School</Text>
                </View>

                <View style={styles.email}>
                    <Text style={styles.emailLable}>Email Address</Text>
                    <Text style={styles.emailContent}>ChrisBest@gmail.com</Text>
                </View>

                <View style={styles.personal}>
                    <Text style={styles.personalLable}>Name </Text>
                    <Text style={styles.personalContent}>Christ Walka</Text>
                    <Text style={styles.personalLine}></Text>
                </View>

                <View style={styles.nicky}>
                    <Text style={styles.personalLable}>Nick Name</Text>
                    <Text style={styles.personalContent}>Walka</Text>
                    <Text style={styles.personalLine}></Text>
                </View>

                <View style={styles.nicky}>
                    <Text style={styles.personalLable}>Emergency Contact</Text>
                    <Text style={styles.personalContent}>+233-000000000</Text>
                    <Text style={styles.personalLine}></Text>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>UPDATE PROFILE</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 40,
    },

    heading: {
        marginLeft: 38,
    },

    imageContainer: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    detailsContainer: {
        flex: 0.55,
    },

    details: {
        marginVertical: 10,
    },

    detailLable: {
        color: 'gray',
        marginBottom: 3,
    },

    detailContent: {
        color: 'navy',
        fontWeight: 'bold',
        fontSize: 17,
    },

    emailLable: {
        color: 'gray',
        marginTop: 3,
    },

    emailContent: {
        color: 'navy',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 3,
    },

    personalLable: {
        color: '#3FC8F7',
        marginTop: 10,
        marginBottom: 3,
        fontWeight: 'bold',
        fontSize: 15
    },

    personalContent: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    personalLine: {
        backgroundColor: '#ECF0F1',
        width: '100%',
        height: 3,
        marginTop: 10,
        marginBottom: 20,
    },

    buttonContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },

    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#3FC8F7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    buttonText: {
        color: 'white',
        fontSize: 20
    }
})
