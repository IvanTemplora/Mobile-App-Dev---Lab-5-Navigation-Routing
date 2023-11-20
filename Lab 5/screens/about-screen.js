import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import MainLayout from '../layouts/main-layout';

export default function AboutScreen({navigation}) {
    const appName = "To Do List App";
    const myName = "Ivan Templora";
    const date = new Date();

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text>{appName}</Text>
                <Text>My name is: {myName}</Text>
                <Text>Current Date is: {date.toDateString()}</Text>

                <Button
                    title="Go To Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});