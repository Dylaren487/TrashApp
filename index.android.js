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
    WebView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from './CustomTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import GridView from 'react-native-super-grid';

var content = null

export default class TrashApp extends Component {

    constructor() {
        super();
        this.state = {
            general: 0,
            compostable: 0,
            recycle: 0,
            hazardous: 0,
            currentPage: 0,
            favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            recent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            mostTrashedItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            mostTrashedBin: [0, 0, 0, 0],
            language: 'en'
        }
        this.handleBinStatistics()
        AsyncStorage.getItem('favorite').then((value) => {
            if (value == null) {
                this.setState({favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]})
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

    handleBinStatistics() {
        var id = 3;
        var secretid = 'Nw6X5T';

        fetch('http://smartbin.devfunction.com/api/?team_id=' + id + '&secret=' + secretid)
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    general: JSON.parse(responseJSON.data.bin_statistics.general),
                    compostable: JSON.parse(responseJSON.data.bin_statistics.compostable),
                    recycle: JSON.parse(responseJSON.data.bin_statistics.recycle),
                    hazardous: JSON.parse(responseJSON.data.bin_statistics.hazardous),
                });
            })
            .catch((error) => {
                console.warn(error);
            });
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

    handleItemSelect(item) {
        if (item != -1) {
            this.setState({
                currentPage: item
            })
        }
    }

    resetAll() {
        this.setState({
            currentPage: 0
        })
    }

    renderItem(id) {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={()=>this.handleItemSelect(id)}>
                <Text style={styles.itemName}>{id}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return <ScrollableTabView
            initialPage={1}
            onChangeTab={()=>this.resetAll()}
            renderTabBar={() => <CustomTabBar />}
        >
            <ScrollView tabLabel="md-home" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>{content.favorite}</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-search" style={styles.tabView}>
                <View style={styles.backTabStyle}>
                    <TouchableOpacity
                        onPress={()=>this.handleItemSelect(content.items[this.state.currentPage].parentID)}>
                        <Icon name="md-arrow-back" size={30}/>
                    </TouchableOpacity>
                    <Text>{content.items[this.state.currentPage].name}</Text>
                    {content.items[this.state.currentPage].status == 'category' ?
                        <Icon name="md-arrow-back" color="#eee" size={30}/>
                        :
                        [this.state.favorite[this.state.currentPage] == 1 ?
                            <Icon name="md-star" color="#ffce00" size={30}/>
                            :
                            <Icon name="md-star-outline" size={30}/>
                        ]}
                </View>
                {content.items[this.state.currentPage].status == 'category' ?
                    <GridView
                        enableEmptySections={true}
                        itemWidth={100}
                        items={content.items[this.state.currentPage].childID}
                        style={styles.gridView}
                        renderItem={item => this.renderItem(item)}
                    />
                    :
                    <View style={{flex:1}}>
                        <ScrollView>
                            <View style={styles.trashToBinBlockStyle}>
                                <View style={styles.imageInBlock}></View>
                                <Icon name="md-arrow-round-forward" size={30}/>
                                <View style={styles.imageInBlock}></View>
                            </View>
                            <Text>Notes</Text>
                            <Text>{content.items[this.state.currentPage].description}</Text>
                        </ScrollView>
                        <View>
                            <TouchableOpacity>
                                <Text>trash</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </ScrollView>
            <ScrollView tabLabel="md-trash" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Messenger</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-pie" style={styles.tabView}>
                <View style={styles.card}>
                    <WebView
                        source={{ uri: 'http://charts.hohli.com/embed.html?created=1501426983299#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string"},{"label":"B","type":"number"}],"rows":[{"c":[{"v":"General"},{"v":'+this.state.general+'}]},{"c":[{"v":"Compostable"},{"v":'+this.state.compostable+'}]},{"c":[{"v":"Recycle"},{"v":'+this.state.recycle+'}]},{"c":[{"v":"Hazardous"},{"v":'+this.state.hazardous+'}]}]},"options":{"width":640,"height":480},"state":{},"isDefaultVisualization":true,"chartType":"PieChart"}' }}
                    />
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
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
        backgroundColor: '#555555'
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    backTabStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    trashToBinBlockStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20
    },
    imageInBlock: {
        flex: 1,
        backgroundColor: '#555555',
        padding: 50,
        margin: 30,
        alignSelf: 'center'
    },
});
AppRegistry.registerComponent('TrashApp', () => TrashApp);
