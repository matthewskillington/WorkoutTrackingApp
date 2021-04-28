import React, { useContext } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Title, Body, Left, Right } from 'native-base';
import { ThemeContext } from '../../theme-context';
import MenuImage from '../../images/iconmonstr-menu-white.png';

const CustomHeader = (props) => {
	const colors = useContext(ThemeContext);

	const styles = StyleSheet.create({
		header: {
		  backgroundColor: colors.MasterGrey100,
		},
		headerTitle: {
		  color: colors.PrimaryText,
		  margin: 20,
		  textAlign: 'center'
		},
		menuIcon: {
		  height: 24,
		  width: 24,
		  margin: 20,
		  tintColor: colors.MasterGrey0
		}
	  });

	function OpenMenu() {
		props.navigation.toggleDrawer()
	}
	
    return (
    <Header style={styles.header}>
    	<Left
          style={{flex: 1}}>
          <TouchableOpacity activeOpacity = { .5 } onPress={OpenMenu}>
            <Image
              source={MenuImage}
              style={styles.menuIcon}/>
          </TouchableOpacity>
        </Left>
        <Body
          style={{flex: 4}}>
          <Title style={styles.headerTitle}>Workout Tracker</Title>
        </Body>
        <Right
          style={{flex: 1}}
        />
	</Header>
    );
}

export default CustomHeader;