import React from 'react'
import { View, Text } from 'react-native'
import PropTypes, { InferProps } from 'prop-types';


function Home({ navigation }: InferProps<typeof Home.propTypes>): JSX.Element {
    return (
        <View>
           <Text>cuong</Text>
        </View>
    )
}
Home.propTypes = {
    navigation: PropTypes.any.isRequired,
};
export default Home