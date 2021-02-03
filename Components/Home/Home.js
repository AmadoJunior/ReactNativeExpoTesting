import React from "react";
import { Dimensions } from 'react-native';
import { Image, Text, View, Pressable } from 'react-native';
//Styles
import styles from "./HomeStyles";

//Images
import logo from "./../../images/logo.png";
var deviceWidth = Dimensions.get('window').width*.5;

function Home({ navigation }){
    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: deviceWidth,
                    height: deviceWidth/4.48,
                    margin: 40,
                }}
                source={logo}
                resizeMode="stretch"
            />
            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btn}
                    onPress={() => navigation.navigate("Scan")}
                >
                    <Text style={{
                        color: "white"
                    }}>Scan</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => navigation.navigate("Upload")}
                >
                    <Text style={{
                        color: "white"
                    }}>Upload</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default Home;