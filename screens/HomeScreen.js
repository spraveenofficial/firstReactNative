import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/outline"
const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <SafeAreaView className="bg-white py-4">
            <View className='flex-row items-center mx-4 space-x-2'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold font-xl justify-center items-center">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen