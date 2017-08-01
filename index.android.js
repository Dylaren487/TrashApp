/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    AppRegistry,
    AsyncStorage,
    TouchableOpacity,
    WebView,
    Picker
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
            listMode: 'favorite',
            general: 0,
            compostable: 0,
            recycle: 0,
            hazardous: 0,
            currentPage: 0,
            currentBin: 0,
            favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            recent: [],
            mostTrashedItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            mostTrashedBin: [0, 0, 0, 0],
            language: 'en',
            flag: true,
        }
        this.handleBinStatistics()
        AsyncStorage.getItem('favorite').then((value) => {
            if (value == null) {
                this.setState({ favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
            } else {
                this.setState({ favorite: JSON.parse(value) })
            }
        })
        AsyncStorage.getItem('recent').then((value) => {
            if (value == null) {
                this.setState({ recent: [] })
            } else {
                this.setState({ recent: JSON.parse(value) })
            }
        })
        AsyncStorage.getItem('mostTrashedItem').then((value) => {
            if (value == null) {
                this.setState({ mostTrashedItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
            } else {
                this.setState({ mostTrashedItem: JSON.parse(value) })
            }
        })
        AsyncStorage.getItem('mostTrashedBin').then((value) => {
            if (value == null) {
                this.setState({ mostTrashedBin: [0, 0, 0, 0] })
            } else {
                this.setState({ mostTrashedBin: JSON.parse(value) })
            }
        })
        AsyncStorage.getItem('languageSource').then((value) => {
            if (value == null) {
                this.setState({ languageSource: 'en' })
            } else {
                this.setState({ languageSource: JSON.parse(value) })
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
            this.setState({
                flag: true
            })
        } else if (lang == 'th') {
            content = require('./lang/lang.th.json')
            this.setState({
                flag: false
            })
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

    handleBinSelect(bin) {
        if (bin != -1) {
            this.setState({
                currentBin: bin
            })
        }
    }

    resetAll() {
        this.setState({
            currentPage: 0,
            currentBin: 0
        })
    }

    setFavorite(index) {
        let markers = this.state.favorite;
        markers[index] = !this.state.favorite[index];
        this.setState({
            favorite: markers
        });
    }

    doDispose(index) {
        let markers = this.state.mostTrashedItem;
        markers[index] = this.state.mostTrashedItem[index] + 1;
        this.setState({
            mostTrashedItem: markers
        });
        for (let i = 0; i < this.state.recent.length; i++) {
            if (this.state.recent[i] == index) {
                var array = this.state.recent
                array.splice(i, 1);
                this.setState({ recent: array });
            }
        }
        this.setState({ recent: [...this.state.recent, this.state.currentPage] });
    }

    renderIcon() {
        if (this.state.listMode == 'favorite') {
            return <Icon name="md-star" size={30} />
        } else if (this.state.listMode == 'recent') {
            return <Icon name="md-time" size={30} />
        } else if (this.state.listMode == 'most') {
            return <Icon name="md-stats" size={30} />
        }
    }

    renderList() {
        if (this.state.listMode == 'favorite') {
            return <Icon name="md-star" size={30} />
        } else if (this.state.listMode == 'recent') {
            return <Icon name="md-time" size={30} />
        } else if (this.state.listMode == 'most') {
            return <Icon name="md-stats" size={30} />
        }
    }

    render() {
        return <ScrollableTabView
            initialPage={1}
            onChangeTab={() => this.resetAll()}
            renderTabBar={() => <CustomTabBar />}
        >
            <ScrollView tabLabel="md-home" style={styles.tabView}>
                <View style={styles.pickerContainer}>
                    {this.renderIcon()}
                    <View style={styles.pickerStyle}>
                        <Picker
                            selectedValue={this.state.listMode}
                            onValueChange={(itemValue, itemIndex) => this.setState({ listMode: itemValue })}>
                            <Picker.Item label={content.favorite}
                                value="favorite" />
                            <Picker.Item label={content.recent}
                                value="recent" />
                            <Picker.Item label={content.mostSelect}
                                value="most" />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-search" style={[styles.tabView, { flex: 1 }]}>
                <View style={styles.backTabStyle}>
                    <TouchableOpacity
                        onPress={() => this.handleItemSelect(content.items[this.state.currentPage].parentID)}>
                        <Icon name="md-arrow-back" size={30} />
                    </TouchableOpacity>
                    <Text>{content.items[this.state.currentPage].name}</Text>
                    {content.items[this.state.currentPage].status == 'category' ?
                        <Icon name="md-arrow-back" color="#F7F7F7" size={30} />
                        :
                        (this.state.favorite[this.state.currentPage] == 1 ?
                            <TouchableOpacity onPress={() => this.setFavorite(this.state.currentPage)}>
                                <Icon name="md-star" color="#ffce00" size={30} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.setFavorite(this.state.currentPage)}>
                                <Icon name="md-star-outline" size={30} />
                            </TouchableOpacity>

                        )}
                </View>
                {content.items[this.state.currentPage].status == 'category' ?
                    <GridView
                        enableEmptySections={true}
                        itemWidth={100}
                        items={content.items[this.state.currentPage].childID}
                        style={styles.gridView}
                        renderItem={item =>
                            <TouchableOpacity style={styles.itemContainer} onPress={() => this.handleItemSelect(item)}>
                                <Text style={styles.itemName}>{content.items[item].name}</Text>
                            </TouchableOpacity>
                        }
                    />
                    :
                    <View>
                        <View style={styles.trashToBinBlockStyle}>
                            <View style={styles.imageInBlock}></View>
                            <Icon name="md-arrow-round-forward" size={30} />
                            <View style={styles.imageInBlock}></View>
                        </View>
                        <TouchableOpacity style={styles.trashButtonStyle}
                            onPress={() => this.doDispose(this.state.currentPage)}>
                            <Text>Button</Text>
                        </TouchableOpacity>
                        <Text>{content.notes}</Text>
                        <Text>{content.items[this.state.currentPage].description}</Text>
                    </View>
                }
            </ScrollView>
            <ScrollView tabLabel="md-trash" style={styles.tabView}>
                <View style={styles.backTabStyle}>
                    <TouchableOpacity
                        onPress={() => this.handleBinSelect(content.Bin[this.state.currentBin].parentID)}>
                        <Icon name="md-arrow-back" size={30} />
                    </TouchableOpacity>
                    <Text>{content.Bin[this.state.currentBin].name}</Text>
                    <Icon name="md-arrow-back" color="#F7F7F7" size={30} />
                </View>
                {content.Bin[this.state.currentBin].status == 'category' ?
                    <GridView
                        enableEmptySections={true}
                        itemWidth={150}
                        items={content.Bin[this.state.currentBin].childID}
                        style={styles.gridView}
                        renderItem={item =>
                            <TouchableOpacity style={styles.itemContainer} onPress={() => this.handleBinSelect(item)}>
                                <Text style={styles.itemName}>{item}</Text>
                            </TouchableOpacity>
                        }
                    />
                    :
                    <View>
                        <View style={styles.trashcanStyle}>
                            <View style={styles.imageInBlock}></View>
                            <Text>{content.Bin[this.state.currentBin].color}</Text>
                        </View>
                        <View>
                            <Text>{content.item}</Text>
                            {content.Bin[this.state.currentBin].dispose.map(item =>
                                <Text key={item}>- {content.items[item].name}</Text>
                            )}
                        </View>
                    </View>
                }
            </ScrollView>
            <ScrollView tabLabel="md-pie" style={styles.tabView}>
                <View style={styles.card}>
                    {this.state.flag == true &&
                        <Text style={styles.statisticsHeader}>Waste disposal statistics</Text>
                    }
                    {this.state.flag == false &&
                        <Text style={styles.statisticsHeader}>สถิติการทิ้งขยะ</Text>
                    }
                    {this.state.flag == true &&
                        <Text>Global Statistics</Text>
                    }
                    {this.state.flag == false &&
                        <Text>สถิติสากล</Text>
                    }
                    <WebView
                        source={{ uri: 'http://charts.hohli.com/embed.html?created=1501426983299#w=320&h=240&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string"},{"label":"B","type":"number"}],"rows":[{"c":[{"v":"General"},{"v":' + this.state.general + '}]},{"c":[{"v":"Compostable"},{"v":' + this.state.compostable + '}]},{"c":[{"v":"Recycle"},{"v":' + this.state.recycle + '}]},{"c":[{"v":"Hazardous"},{"v":' + this.state.hazardous + '}]}]},"options":{"width":320,"height":240},"state":{},"isDefaultVisualization":true,"chartType":"PieChart"}' }}
                        scalesPageToFit={true}
                        automaticallyAdjustContentInsets={true}
                        scrollEnabled={false}
                    />
                </View>
                <View style={styles.card}>
                    {this.state.flag == true &&
                        <Text>My Statistics</Text>
                    }
                    {this.state.flag == false &&
                        <Text>สถิติของฉัน</Text>
                    }
                    <WebView
                        source={{ uri: 'http://charts.hohli.com/embed.html?created=1501569339624#w=320&h=240&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string"},{"label":"B","type":"number"}],"rows":[{"c":[{"v":"Genral"},{"v":'+this.state.mostTrashedBin[0]+'}]},{"c":[{"v":"Compostable"},{"v":'+this.state.mostTrashedBin[1]+'}]},{"c":[{"v":"Recycle"},{"v":'+this.state.mostTrashedBin[2]+'}]},{"c":[{"v":"Hazardous"},{"v":'+this.state.mostTrashedBin[3]+'}]}]},"options":{"width":320,"height":240},"state":{},"isDefaultVisualization":true,"chartType":"PieChart"}' }}
                        scalesPageToFit={true}
                        automaticallyAdjustContentInsets={true}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
            <ScrollView tabLabel="md-settings" style={styles.tabView}>
                {this.state.flag == true &&
                    <Text style={styles.menuView}>Clear history</Text>
                }
                {this.state.flag == false &&
                    <Text style={styles.menuView}>ล้างข้อมูล</Text>
                }
                {this.state.flag == false &&
                    <TouchableOpacity onPress={() => this.changeLanguage('en')}><Text style={styles.menuView}>เปลี่ยนเป็นภาษาอังกฤษ</Text></TouchableOpacity>
                }
                {this.state.flag == true &&
                    <TouchableOpacity onPress={() => this.changeLanguage('th')}><Text style={styles.menuView}>Change to TH</Text></TouchableOpacity>
                }
                <Text>{this.state.mostTrashedBin[0]}</Text>
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
        height: 280,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
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
    trashButtonStyle: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        justifyContent: 'center'
    },
    trashcanStyle: {
        alignItems: 'center'
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pickerStyle: {
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        flex: 2.5
    },
    menuView: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
    },
    statisticsHeader:{
        fontSize:18
    }
});
AppRegistry.registerComponent('TrashApp', () => TrashApp);
