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
    WebView,
    Picker
} from 'react-native';

import CustomTabBar from './CustomTabBar';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import GridView from 'react-native-super-grid';

var content = null

export default class TrashApp extends Component {

    constructor() {
        super();
        this.state = {
            shortcut: false,
            listMode: 'favorite',
            general: 0,
            compostable: 0,
            recycle: 0,
            hazardous: 0,
            currentPage: 0,
            currentBin: 0,
            favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            recent: [],
            mostTrashedItem: [],
            mostTrashedBin: [0, 0, 0, 0],
            language: 'en'
        }
        this.handleBinStatistics()
        AsyncStorage.getItem('language').then((value) => {
            if (value == null) {
                console.log("not exist")
                this.setState({language: 'en'})
            } else {
                this.setState({language: value})
            }
        })
        AsyncStorage.getItem('favorite').then((value) => {
            if (value == null) {
                this.setState({favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]})
            } else {
                this.setState({favorite: JSON.parse(value)})
                console.log(this.state.favorite)
            }
        })
        AsyncStorage.getItem('recent').then((value) => {
            if (value == null) {
                this.setState({recent: []})
            } else {
                this.setState({recent: JSON.parse(value)})
                console.log(this.state.recent)
            }
        })
        AsyncStorage.getItem('mostTrashedItem').then((value) => {
            if (value == null) {
                this.setState({mostTrashedItem: []})
            } else {
                this.setState({mostTrashedItem: JSON.parse(value)})
                console.log(this.state.mostTrashedItem)
            }
        })
        AsyncStorage.getItem('mostTrashedBin').then((value) => {
            if (value == null) {
                this.setState({mostTrashedBin: [0, 0, 0, 0]})
            } else {
                this.setState({mostTrashedBin: JSON.parse(value)})
                console.log(this.state.mostTrashedBin)
            }
        })
        console.log(this.state.language)
        this.fetchLanguage(this.state.language);
    }

    componentDidMount(){
        console.log(this.state.language)
        this.fetchLanguage(this.state.language)
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
            content = require('./lang/lang.en')
        } else if (lang == 'th') {
            content = require('./lang/lang.th')
        }
    }

    changeLanguage(lang) {
        AsyncStorage.setItem('language', lang)
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
            currentBin: 0,
            shortcut: false
        })
    }

    setFavorite(index) {
        if (this.state.favorite[index] == 0) {
            let markers = this.state.favorite;
            markers[index] = index;
            this.setState({
                mostTrashedItem: markers
            });
            this.state.favorite[index] = index
        } else {
            let markers = this.state.favorite;
            markers[index] = 0;
            this.setState({
                mostTrashedItem: markers
            });
        }
        AsyncStorage.setItem('favorite', JSON.stringify(this.state.favorite))
    }

    doDispose(index) {
        let exist = false;
        let arr = this.state.mostTrashedItem;
        for (let i = 0; i < arr.length; i++) {
            if (this.state.currentPage == arr[i].id) {
                arr[i].count++
                exist = true;
            }
        }
        if (exist == false) {
            arr = [...arr, {id: this.state.currentPage, count: 1}]
        }
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].count < arr[i + 1].count) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        this.setState({
            mostTrashedItem: arr
        })

        let recentArray = this.state.recent
        for (let i = 0; i < recentArray; i++) {
            if (recentArray[i] == index) {
                recentArray.splice(i, 1);
            }
        }
        recentArray = [this.state.currentPage, ...recentArray]
        this.setState({recent: recentArray});

        let binArr = this.state.mostTrashedBin
        console.log(binArr)
        binArr[content.default.items[index].bin - 1] = binArr[content.default.items[index].bin - 1] + 1
        this.setState({mostTrashedBin: binArr})

        AsyncStorage.setItem('mostTrashedItem', JSON.stringify(arr))
        AsyncStorage.setItem('recent', JSON.stringify(this.state.recent))
        AsyncStorage.setItem('mostTrashedBin', JSON.stringify(this.state.mostTrashedBin))
    }

    renderIcon() {
        if (this.state.listMode == 'favorite') {
            return <Icon name="md-star" size={30}/>
        } else if (this.state.listMode == 'recent') {
            return <Icon name="md-time" size={30}/>
        } else if (this.state.listMode == 'most') {
            return <Icon name="md-stats" size={30}/>
        }
    }

    showTrashFromHome(index) {
        this.setState({
            shortcut: true,
            currentPage: index
        })
    }

    hideTrashFromHome() {
        this.setState({
            shortcut: false,
            currentPage: index
        })
    }

    renderList() {
        if (this.state.listMode == 'favorite') {
            return this.state.favorite.filter(value => value != 0).map(value =>
                <TouchableOpacity key={value} style={styles.listBlock} onPress={()=>this.showTrashFromHome(value)}>
                    <View
                        style={{height:50,width:50,backgroundColor:'#555',marginTop:5,marginBottom:5,marginLeft:10,marginRight:10}}></View>
                    <Text>{content.default.items[value].name}</Text>
                </TouchableOpacity>
            )
        } else if (this.state.listMode == 'recent') {
            return this.state.recent.map(value =>
                <TouchableOpacity key={value} style={styles.listBlock}>
                    <View
                        style={{height:50,width:50,backgroundColor:'#555',marginTop:5,marginBottom:5,marginLeft:10,marginRight:10}}></View>
                    <Text>{content.default.items[value].name}</Text>
                </TouchableOpacity>
            )
        } else if (this.state.listMode == 'most') {
            return this.state.mostTrashedItem.map(value =>
                <TouchableOpacity key={value.id} style={styles.listBlock}>
                    <View
                        style={{height:50,width:50,backgroundColor:'#555',marginTop:5,marginBottom:5,marginLeft:10,marginRight:10}}></View>
                    <Text>{content.default.items[value.id].name}</Text>
                </TouchableOpacity>
            )
        }
    }

    deleteLocal() {
        this.setState({
            favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            recent: [],
            mostTrashedItem: [],
            mostTrashedBin: [0, 0, 0, 0],
        })
        AsyncStorage.setItem('favorite', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
        AsyncStorage.setItem('mostTrashedItem', JSON.stringify([]))
        AsyncStorage.setItem('recent', JSON.stringify([]))
        AsyncStorage.setItem('mostTrashedBin', JSON.stringify([0, 0, 0, 0]))
    }

    render() {
        return <ScrollableTabView
            initialPage={0}
            onChangeTab={()=>this.resetAll()}
            renderTabBar={() => <CustomTabBar />}
        >

            {/* #1 tab home*/}

            <ScrollView tabLabel="md-home" style={styles.tabView}>
                {this.state.shortcut ?
                    <View>
                        <View style={styles.backTabStyle}>
                            <TouchableOpacity
                                onPress={()=>this.hideTrashFromHome()}>
                                <Icon name="md-arrow-back" size={30}/>
                            </TouchableOpacity>
                            <Text>{content.default.items[this.state.currentPage].name}</Text>
                            {content.default.items[this.state.currentPage].status == 'category' ?
                                <Icon name="md-arrow-back" color="#F7F7F7" size={30}/>
                                :
                                (this.state.favorite[this.state.currentPage] == 0 ?
                                        <TouchableOpacity onPress={()=>this.setFavorite(this.state.currentPage)}>
                                            <Icon name="md-star-outline" size={30}/>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={()=>this.setFavorite(this.state.currentPage)}>
                                            <Icon name="md-star" color="#ffce00" size={30}/>
                                        </TouchableOpacity>
                                )}
                        </View>
                        <View>
                            <View style={styles.trashToBinBlockStyle}>
                                <View style={styles.imageInBlock}></View>
                                <Icon name="md-arrow-round-forward" size={30}/>
                                <View style={styles.imageInBlock}></View>
                            </View>
                            <TouchableOpacity style={styles.trashButtonStyle}
                                              onPress={()=>this.doDispose(this.state.currentPage)}>
                                <Text>Dispose</Text>
                            </TouchableOpacity>
                            <Text>{content.default.notes}</Text>
                            <Text>{content.default.items[this.state.currentPage].description}</Text>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={styles.pickerContainer}>
                            {this.renderIcon()}
                            <View style={styles.pickerStyle}>
                                <Picker
                                    selectedValue={this.state.listMode}
                                    onValueChange={(itemValue, itemIndex) => this.setState({listMode: itemValue})}>
                                    <Picker.Item label={content.default.favorite}
                                                 value="favorite"/>
                                    <Picker.Item label={content.default.recent}
                                                 value="recent"/>
                                    <Picker.Item label={content.default.mostSelect}
                                                 value="most"/>
                                </Picker>
                            </View>
                        </View>
                        <View style={{marginBottom:50}}>
                            {this.renderList()}
                        </View>
                    </View>
                }
            </ScrollView>

            {/* #2 tab trash category*/}

            <ScrollView tabLabel="md-apps" style={[styles.tabView,{flex:1}]}>
                <View style={styles.backTabStyle}>
                    {this.state.currentPage != 0 ?
                        <TouchableOpacity
                            onPress={()=>this.handleItemSelect(content.default.items[this.state.currentPage].parentID)}>
                            <Icon name="md-arrow-back" size={30}/>
                        </TouchableOpacity>
                        :
                        <Icon name="md-arrow-back" color="#F7F7F7" size={30}/>}
                    <Text>{content.default.items[this.state.currentPage].name}</Text>
                    {content.default.items[this.state.currentPage].status == 'category' ?
                        <Icon name="md-arrow-back" color="#F7F7F7" size={30}/>
                        :
                        (this.state.favorite[this.state.currentPage] == 0 ?
                                <TouchableOpacity onPress={()=>this.setFavorite(this.state.currentPage)}>
                                    <Icon name="md-star-outline" size={30}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={()=>this.setFavorite(this.state.currentPage)}>
                                    <Icon name="md-star" color="#ffce00" size={30}/>
                                </TouchableOpacity>

                        )}
                </View>
                {content.default.items[this.state.currentPage].status == 'category' ?
                    <GridView
                        enableEmptySections={true}
                        itemWidth={100}
                        items={content.default.items[this.state.currentPage].childID}
                        style={styles.gridView}
                        renderItem={item =>
                            <TouchableOpacity style={styles.itemContainer} onPress={()=>this.handleItemSelect(item)}>
                                <Text style={styles.itemName}>{content.default.items[item].name}</Text>
                            </TouchableOpacity>
                            }
                    />
                    :
                    <View>
                        <View style={styles.trashToBinBlockStyle}>
                            <View style={styles.imageInBlock}></View>
                            <Icon name="md-arrow-round-forward" size={30}/>
                            <View style={styles.imageInBlock}></View>
                        </View>
                        <TouchableOpacity style={styles.trashButtonStyle}
                                          onPress={()=>this.doDispose(this.state.currentPage)}>
                            <Text>Dispose</Text>
                        </TouchableOpacity>
                        <Text>{content.default.notes}</Text>
                        <Text>{content.default.items[this.state.currentPage].description}</Text>
                    </View>
                }
            </ScrollView>

            {/* #3 tab bin category*/}

            <ScrollView tabLabel="md-trash" style={styles.tabView}>
                <View style={styles.backTabStyle}>
                    <TouchableOpacity
                        onPress={()=>this.handleBinSelect(content.default.Bin[this.state.currentBin].parentID)}>
                        <Icon name="md-arrow-back" size={30}/>
                    </TouchableOpacity>
                    <Text>{content.default.Bin[this.state.currentBin].name}</Text>
                    <Icon name="md-arrow-back" color="#F7F7F7" size={30}/>
                </View>
                {content.default.Bin[this.state.currentBin].status == 'category' ?
                    <GridView
                        enableEmptySections={true}
                        itemWidth={150}
                        items={content.default.Bin[this.state.currentBin].childID}
                        style={styles.gridView}
                        renderItem={item =>
                            <TouchableOpacity style={styles.itemContainer} onPress={()=>this.handleBinSelect(item)}>
                                <Text style={styles.itemName}>{item}</Text>
                            </TouchableOpacity>
                         }
                    />
                    :
                    <View>
                        <View style={styles.trashcanStyle}>
                            <View style={styles.imageInBlock}></View>
                            <Text>{content.default.Bin[this.state.currentBin].color}</Text>
                        </View>
                        <View>
                            <Text>{content.default.item}</Text>
                            {content.default.Bin[this.state.currentBin].dispose.map(item =>
                                <Text key={item}>- {content.default.items[item].name}</Text>
                            )}
                        </View>
                    </View>
                }
            </ScrollView>

            {/* #4 tab statistics*/}

            <ScrollView tabLabel="md-pie" style={styles.tabView}>
                <View style={styles.card}>
                    <WebView
                        source={{ uri: 'http://charts.hohli.com/embed.html?created=1501426983299#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string"},{"label":"B","type":"number"}],"rows":[{"c":[{"v":"General"},{"v":'+this.state.general+'}]},{"c":[{"v":"Compostable"},{"v":'+this.state.compostable+'}]},{"c":[{"v":"Recycle"},{"v":'+this.state.recycle+'}]},{"c":[{"v":"Hazardous"},{"v":'+this.state.hazardous+'}]}]},"options":{"width":640,"height":480},"state":{},"isDefaultVisualization":true,"chartType":"PieChart"}' }}
                    />
                </View>
                <Text>General - {this.state.mostTrashedBin[0]}</Text>
                <Text>Recycle - {this.state.mostTrashedBin[1]}</Text>
                <Text>Compostable - {this.state.mostTrashedBin[2]}</Text>
                <Text>Hazardous - {this.state.mostTrashedBin[3]}</Text>
            </ScrollView>

            {/* #5 tab settings*/}

            <ScrollView tabLabel="md-settings" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>{this.state.language}</Text>
                    <TouchableOpacity onPress={()=>this.deleteLocal()}><Text>Del</Text></TouchableOpacity>
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
    listBlock: {
        padding: 5,
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row'
    }
});
AppRegistry.registerComponent('TrashApp', () => TrashApp);
