import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    colors: {
        primary: 'red',
        secondary: 'blue',
        text: '#f5f5f5',
    },
    styles: {
        global: {
            body: {
                backgroundColor: '#353535',
            },
        },
    },
});
