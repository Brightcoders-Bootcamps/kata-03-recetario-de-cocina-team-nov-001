import React from 'react'
import {View, Text, Button} from 'react-native'
function Details({navigation: {navigate}}) {
    return (
        <View>
            <Text>Details</Text>
            <Button title='go to details' onPress={()=>navigate('Index')} />
        </View>
    )
}

export default Details