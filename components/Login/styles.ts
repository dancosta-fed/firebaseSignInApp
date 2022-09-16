/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },

    buttonAdd: {
        alignSelf: 'center',
        backgroundColor: theme.colors.lighter,
        width: '35%',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },

    buttonSignIn: {
        alignSelf: 'center',
        backgroundColor: theme.colors.primary,
        width: '35%',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },

    btnText: {
        color: 'white', 
        fontSize: 30,
    },

    btnTextCreate: {
        fontSize: 15,
        color: theme.colors.primary, 
    },

    titleContainer: {
        marginTop: 30,
        textAlign: 'center',
    },

    title: {
        fontSize: 32,
        color: theme.colors.primary,
    },

    subtitle: {
        fontSize: 32,
        color: theme.colors.primary,
    },

    fieldsContainer: {
        flex: 1,
        marginTop: 30,
        marginBottom: 60,
    },

    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.light,
        paddingBottom: 10,
        marginTop: 30,
    },

    passwordInput: {
        padding: 10,
    },

    redesText: {
        color: theme.colors.light,
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 30,
    },

    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 30,
    }
});
