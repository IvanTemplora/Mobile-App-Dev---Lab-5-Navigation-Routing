/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';


export default function ToDoList({ tasks }) {

    const [task, setTasks] = useState([
        'Do Laundry',
        'Go to Gym',
        'Walk the Dog',
    ]);

    return (
        <View>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                    <View style={styles.task}>
                        <Text style={styles.taskText}>
                            {task}
                        </Text>
                    </View>
                </Pressable>
            ))}
        </View>
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


