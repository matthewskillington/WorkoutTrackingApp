import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../theme-context';

const MenuImage = require('../../images/iconmonstr-menu-white.png');

type Props = {
	navigation: any
  }

const CustomHeader: React.FC<Props> = (props) => {
	const colors = useContext(ThemeContext);

	const styles = StyleSheet.create({
		header: {
		  backgroundColor: colors.MasterGrey100,
		  height: 60,
		  flexDirection: 'row'
		},
		headerTitle: {
		  color: colors.PrimaryText,
		  margin: 20,
		  textAlign: 'center',
		  fontWeight: '700',
		  fontSize: 16
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
	<View
		style={styles.header}>
		<View
			style={{flex: 1}}>
			<TouchableOpacity activeOpacity = { .5 } onPress={OpenMenu}>
				<Image
				source={MenuImage}
				style={styles.menuIcon}/>
			</TouchableOpacity>
		</View>
		<View
			style={{flex: 4, overflow: 'visible'}}>
			<Text style={styles.headerTitle}>Workout Tracker</Text>
		</View>
		<View
			style={{flex: 1}}>
		</View>
	</View>
    );
}

export default CustomHeader;