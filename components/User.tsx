import React from 'react'
import { View, Text, Image } from 'react-native'

interface Props {
    src: string,
    username: string
}

const User = ({src,username}: Props) => {
    return (
        <View className="flex flex-row item-center space-x-3 mt-5">
            <Image source={{uri:src}} className="w-10 h-10 rounded-full" />
            <Text className="text-lg text-gray-200 font-semibold">{username}</Text>
        </View>
    )
}

export default User