import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import {AuthContext} from './context';

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button title='Sign In' onPress= {() => signIn()}/>
            <Button title='Create Account' onPress= {() => navigation.push('CreateAccount')}/>
        </View>
    );
}


export const CreateAccount = () => {
    return(
    <View style={styles.container}>  
        <Text>Create Account screen</Text>
        <Button title='Sign Up' onPress= {() => alert('TODO')}/>
    </View>
    );
}

export const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Details 1' onPress= {() => navigation.push('Details', {name : 'Detail Page 1'})}/>
            <Button title='Details 2' onPress= {() => navigation.push('Details', {name : 'Detail Page 2'})}/>
            <Button title='Drawer' onPress={() => navigation.toggleDrawer()} />
            
        </View>
    );
}


export const Details = ({ route }) => {
    return(
        <View style={styles.container}>
            <Text>Details</Text>
            {route.params.name && <Text>{route.params.name}</Text>}
        </View>
    );
}

export const Search = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Search Screen</Text>
            <Button title='Search 2' onPress= {() => navigation.push('Search2', {name : 'Search Page 2'})}/>
            <Button title='Home Detail 2' onPress = {() => {
                navigation.navigate('Home',{
                    screen : 'Details',
                    params : { name : 'Details Page 2'}
                })
            }}/>
        </View>
    );
}

export const Search2 = ({ route }) => {
    return(
        <View style={styles.container}>
            {route.params.name && <Text>{route.params.name}</Text>}
         </View>
    );
}

export const Profile = ( {navigation} ) => {
    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title='Drawer' onPress={() => navigation.toggleDrawer()} />
         </View>
    );
}

export const SignOut = () => {
    const { signOut } = React.useContext(AuthContext);
    return(
        <View>{signOut()}</View>
    );
}