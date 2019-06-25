import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from "./Button";


const AlbumDetail = ({ album } ) => {
    const {
        title, 
        artist, 
        thumbnail_image,
        image
         } = album;
    const {
        thumbStyle, 
        headerContentStyle,
        thumbContainerStyle,
        textModify,
        imageStyle
        } = styles;

    return (
        <Card>
            <CardSection>
                <View style = { thumbContainerStyle }>
                    <Image 
                    style = {thumbStyle}
                    source={{ uri: thumbnail_image }}/>
                </View>
                <View style = {headerContentStyle}>
                    <Text style={textModify}> { title } </Text>
                    <Text> { artist } </Text>
                </View>            
            </CardSection>

            <CardSection>
                <Image
                style = {imageStyle}
                source= { { uri: image}} />
            </CardSection>
            
            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',        
    },

    thumbStyle: {
        height: 50,
        width: 50
    },

    thumbContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    textModify: {
        fontSize: 18
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};


export default AlbumDetail;