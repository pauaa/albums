import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Album = ({ album }) => {
    const {
        artist,
        image,
        title,
        thumbnail_image
    } = album;
    const {
        headerContentStyle,
        headerTextStyle,
        imageStyle,
        thumbnailContainerStyle,
        thumbnailStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    imageStyle: {
        flex: 1,
        height: 300,
        width: null,
    },
    thumbnailContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
};

export default Album;

