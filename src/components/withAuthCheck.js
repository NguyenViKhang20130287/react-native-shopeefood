import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const withAuthCheck = (WrappedComponent) => {
    const WithAuthCheck = (props) => {
        const navigation = useNavigation();

        useEffect(() => {
            const checkUserLogin = async () => {
                try {
                    const userStorage = JSON.parse(await AsyncStorage.getItem('user'));

                    if (!userStorage) {
                        navigation.navigate('Login');
                    }
                } catch (error) {
                    console.error('Error checking user login:', error);
                }
            };

            checkUserLogin();
        }, []);

        return <WrappedComponent {...props} />;
    };

    return WithAuthCheck;
};

export default withAuthCheck;