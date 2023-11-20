import React, { useState } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import MainLayout from '../layouts/main-layout';

export default function HomeScreen({navigation}) {

    const [tasks, setTasks] = useState([
        'Do Laundry',
        'Go to Gym',
        'Walk the Dog',
    ]);
    
    const addTask = newTask => {
        setTasks([...tasks, newTask]);
    };

    return(
        <MainLayout>
            <View style={styles.container}>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />

                <Button 
                    title="Go To About"
                    onPress={() => navigation.navigate('About')}
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