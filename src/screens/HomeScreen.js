import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import PressableIcon from '../components/PressableIcon';
import LottieView from 'lottie-react-native';
import HeaderText from '../components/HeaderText';
import ContentText from '../components/ContentText';
import CustomText from '../components/CustomText';
import { Fonst } from '../utils/Constants';
import TodoList from '../components/TodoList';
import CustomButton from '../components/CustomButton';
const HomeScreen = () => {
    const [todos, setTodos] = useState([]);

    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        if (todoText) {
            setTodos([...todos, todoText]);
            setTodoText('');
        }
    };

    const deleteTodo = index => {
        const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);

        setTodos(newTodos);
    };

    const updateTodo = (index, newText) => {

        const updatedTodos = [...todos]
        updatedTodos[index] = newText
        setTodos(updatedTodos)

    }

    return (
        <View>
            <View style={styles.container} >
                <HeaderText title={'To Do App'} />
            </View>
            <View style={styles.gor} >
                <ContentText content={'Görevler'} />
            </View>
            <View style={{ paddingHorizontal: 6, paddingVertical: 20 }}>
                <View
                    style={{
                        backgroundColor: '#111827',
                        padding: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderRadius: 10
                    }}>
                    <TextInput
                        placeholder="Görevinizi Girin..."
                        placeholderTextColor={'green'}
                        value={todoText}
                        onChangeText={text => setTodoText(text)}
                        style={{
                            backgroundColor: '#1e293b',
                            padding: 10,
                            fontSize: 30,
                            borderRadius: 10,
                            width: '60%',
                            color: 'white',
                        }}
                    />

                    <CustomButton
                        bgColor={'purple'}
                        title={'Ekle'}
                        butonIcon={'add'}
                        iconColor={'green'}
                        onPress={() => addTodo()}
                    />
                </View>

                <View>
                    <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 50,
        color: 'black',
        fontFamily: 'Poppins-Light',
    },
    container: {
        marginLeft: 140,
        marginTop: 20
    },
    gor: {
        marginLeft: 165,
        marginTop: 20
    }
});
