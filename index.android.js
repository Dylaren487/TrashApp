/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    AppRegistry,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';

import CustomTabBar from './CustomTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

var content = null

export default class TrashApp extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 0,
            favorite: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            recent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            mostTrashedItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            mostTrashedBin: [0, 0, 0, 0],
            language: 'en'
        }
        AsyncStorage.getItem('favorite').then((value) => {
            if (value == null) {
                this.setState({favorite: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]})
            } else {
                this.setState({favorite: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('recent').then((value) => {
            if (value == null) {
                this.setState({recent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]})
            } else {
                this.setState({recent: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('mostTrashedItem').then((value) => {
            if (value == null) {
                this.setState({mostTrashedItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]})
            } else {
                this.setState({mostTrashedItem: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('mostTrashedBin').then((value) => {
            if (value == null) {
                this.setState({mostTrashedBin: [0, 0, 0, 0]})
            } else {
                this.setState({mostTrashedBin: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('languageSource').then((value) => {
            if (value == null) {
                this.setState({languageSource: 'en'})
            } else {
                this.setState({languageSource: JSON.parse(value)})
            }
        })
        this.fetchLanguage(this.state.language);
    }

    fetchLanguage(lang) {
        if (lang == 'en') {
            content = require('./lang/lang.en.json')
        } else if (lang == 'th') {
            content = require('./lang/lang.th.json')
        }
    }

    changeLanguage(lang) {
        this.setState({
            language: lang
        })
        this.fetchLanguage(lang)
    }

    renderPage(){
        if(content.item[this.state.currentPage].status=='category'){

        }else if(content.item[this.state.currentPage].status=='trash'){
            console.log('tra')
        }
    }

    render() {
        return <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <CustomTabBar />}
        >
            <ScrollView tabLabel="md-home" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>{content.favorite}</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-search" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Friends</Text>
                    {this.renderPage()}
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-trash" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Messenger</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-pie" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Notifications</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-settings" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Other nav</Text>
                    <TouchableOpacity onPress={()=>this.changeLanguage('en')}><Text>EN</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.changeLanguage('th')}><Text>TH</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollableTabView>;
    }
};

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
AppRegistry.registerComponent('TrashApp', () => TrashApp);
