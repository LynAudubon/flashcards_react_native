import React, {useState } from 'react';
import { StyleSheet, Text, View, ScrollView, LayoutAnimation, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Menu from './Menu';

interface Props {
    store: Array<pattern>
}

interface Params {
    name: any,
    value: any
}


type pattern = {
    title: String,
    desc: String
}
const Patterns: React.FC<Props> = ({store}) => {

    const ToggleView: React.FC<Params> = ({name, value}) => {
        const [showInfo, setShowInfo] = useState(false);

        return (
            <TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
            <View style={styles.list}>
                <Text style={styles.selection}>{name}</Text>
                { showInfo && <Text style={styles.info}>{value}</Text>}
            </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Menu />
            <SafeAreaView style={styles.container}>
            {
                store.map((item, i) => {
                    return (
                        <ToggleView 
                        key={i}
                        name={item.title}
                        value={item.desc}
                        />
                    )
                    })
            }
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        margin: "auto",
    },
    list: {
        padding: 10
    },
    selection: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        textAlign: 'center',
        width: 500,
        height: 50
    },
    title: {
        // alignContent: 'center',
        fontSize: 10,
    },
    info: {
        width: 500,
        height: 130,
        textAlign: 'center',
    },
});


export default Patterns;