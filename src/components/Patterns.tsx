import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Menu from './Menu';

interface Props {
    store: Array<pattern>
}

type pattern = {
    title: String,
    desc: String
}
const Patterns: React.FC<Props> = ({store}) => (
        <>
        <Menu />
        <SafeAreaView style={styles.body}>
        {store.map((item, i) => {
            return (
            <SafeAreaView key={i} style={styles.selection}>
                <Text>{item.title}</Text>
                <Text style={styles.info}>{item.desc}</Text>
            </SafeAreaView>
            )
        })}
        </SafeAreaView>
        </>
    );

const styles = StyleSheet.create({
    body: {
        backgroundColor: "lightblue",
        margin: "auto"
    },
    selection: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        width: 500,
        height: 150
    },
    title: {
        alignContent: 'center',
        fontSize: 10
    },
    info: {
        textAlign: 'center',
    },
});

export default Patterns;