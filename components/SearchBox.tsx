import React, {useState} from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'

interface Props {
    onSearch: Function
}

const SearchBox = ({onSearch}: Props) => {

    let [username, setUsername] = useState<string>("");
    return (
      <View className="flex flex-row items-center space-x-4 mx-auto">
        <TextInput
          placeholder="Enter your username here..."
          onChangeText={(text: string) => {setUsername(text);}}
          className="border border-white rounded p-2 w-2/3 text-gray-100 focus:border-2 focus:border-pruple-500"
          placeholderTextColor="#ffffff"
        />
        <Pressable className="bg-sky-600 px-4 py-2 rounded" onPress={() => { console.log(username);onSearch(username)}}>
            <Text className="text-gray-50">Search</Text>
        </Pressable>
      </View>
    );
}

export default SearchBox
