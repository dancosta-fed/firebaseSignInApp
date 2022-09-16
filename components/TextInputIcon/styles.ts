import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.light,
        paddingBottom: 10,
        marginTop: 30
    },
});