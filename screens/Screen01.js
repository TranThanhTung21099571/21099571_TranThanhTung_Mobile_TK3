import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Screen01({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.rowContainer1}>
                        <View>
                            <Image style={styles.logoImg} source={require('../assets/image/logoicon.png')}></Image>
                        </View>
                        <View style={styles.rowContainer}>
                            <TextInput style={{ flex: 1, fontSize: 16, }} placeholder="  Search here..."></TextInput>
                            <Image style={{ width: 20, height: 20, }} source={require('../assets/image/findicon.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.rowContainer2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 40, }} source={require('../assets/image/personicon.png')}></Image>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Welcome!</Text>
                                <Text style={{ color: 'white' }}>Donna Strouque</Text>
                            </View>
                        </View>
                        <View style={{ marginRight: 30, }}>
                            <Image style={styles.logoImg} source={require('../assets/image/ringicon.png')}></Image>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Category</Text>
                    <Image source={require('../assets/image/3gach.png')}></Image>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#5958b2',
        height: '30%',
    },
    rowContainer1: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowContainer2: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 35,
        width: '65%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    logoImg: {
        height: 40,
        width: 40,
        marginLeft: 40,
    }
});