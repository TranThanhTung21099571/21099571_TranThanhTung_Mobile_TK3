import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from "react-native";

export default function Screen01({ navigation }) {
    const [category, setCategory] = useState([
        { key: 1, name: 'Resort', img: require('../assets/image/resort.png') },
        { key: 2, name: 'Hotel', img: require('../assets/image/hostel.png') },
        { key: 3, name: 'Hostel', img: require('../assets/image/hotel.png') },
        { key: 4, name: 'Lodge', img: require('../assets/image/lodge.png') },
        { key: 5, name: 'Villa', img: require('../assets/image/villa.png') },
        { key: 6, name: 'Apartment', img: require('../assets/image/apartment.png') },
        { key: 7, name: 'Homestay', img: require('../assets/image/homestay.png') },
        { key: 8, name: 'See all', img: require('../assets/image/seeall.png') },
    ]);
    const [location, setLocation] = useState([
        { key: 1, img: require('../assets/image/photo1.png') },
        { key: 2, img: require('../assets/image/photo2.png') },
        { key: 3, img: require('../assets/image/photo3.png') },
        { key: 4, img: require('../assets/image/photo4.png') },
        { key: 5, img: require('../assets/image/photo5.png') },
        { key: 6, img: require('../assets/image/photo5.png') },
    ]);
    useEffect(() => {
        fetch('https://671b7a102c842d92c3802177.mockapi.io/Category')
            .then(respone => respone.json())
            .then

    })
    const [itemCountCa, setItemCountCa] = useState(3);
    const [itemCountLo, setItemCountLo] = useState(2);
    const [itemCountRe, setItemCountRe] = useState(2);
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
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>Category</Text>
                    <Image style={{ height: 25, width: 25, }} source={require('../assets/image/3gach.png')}></Image>
                </View>
                <FlatList data={category}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15, }}>
                            <Image source={item.img}></Image>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    numColumns={4}>

                </FlatList>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>Popular Destination</Text>
                    <TouchableOpacity onPress={() => setItemCountCa(category.length)}>
                        <Image style={{ height: 25, width: 25, }} source={require('../assets/image/3gach.png')}></Image>
                    </TouchableOpacity>
                </View>
                <FlatList data={location.slice(0, itemCountCa)}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15, }}>
                            <Image style={{width: 100, height: 100, borderRadius: 10,}} source={item.img}></Image>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    numColumns={3}>
                </FlatList>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>Recommended</Text>
                    <TouchableOpacity onPress={() => setItemCountRe(category.length)}>
                        <Image style={{ height: 25, width: 25, }} source={require('../assets/image/3gach.png')}></Image>
                    </TouchableOpacity>
                </View>
                <FlatList data={location.slice(0, itemCountRe)}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15, }}>
                            <Image style={{width: 180, height: 150, borderRadius: 5,}} source={item.img}></Image>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    numColumns={2}>
                </FlatList>
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
        paddingBottom: 20,
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