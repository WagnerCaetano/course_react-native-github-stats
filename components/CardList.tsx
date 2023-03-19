import React from 'react'
import { View, Text } from 'react-native'
import { Data } from '../App'

interface Props {
    data: Data
}

const Card = ({number, text, ...other}: {number:string | number, text:string}) => {
    return(
        <View className='flex justify-center items-center rounded-md w-36 h-36' {...other}>
            <View>
                <Text className='text-gray-50 font-semibold text-center'>{number}</Text>
                <Text className='text-gray-50 font-semibold mt-3'>{text}</Text>
            </View>
        </View>
    )
}

const CardList = ({data}: Props) => {
    return (
        <View className="flex flex-row gap-5 flex-wrap my-5">
            <Card text="Public repos" number={data.public_repos} className="bg-blue-500" />
        </View>
    )
}

export default CardList
