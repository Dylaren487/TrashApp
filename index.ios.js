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
    Picker,
    Image
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
            favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            recent: [],
            mostTrashedItem: [],
            mostTrashedBin: [0, 0, 0, 0],
            language: 'en',
            postTrash: [],
            postBin: [0, 0, 0, 0],
            langFlag: true,
            staticTab: true,
        }
        this.handleBinStatistics()
        AsyncStorage.getItem('favorite').then((value) => {
            if (value == null) {
                this.setState({favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]})
            } else {
                this.setState({favorite: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('recent').then((value) => {
            if (value == null) {
                this.setState({recent: []})
            } else {
                this.setState({recent: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('mostTrashedItem').then((value) => {
            if (value == null) {
                this.setState({mostTrashedItem: []})
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
        AsyncStorage.getItem('postTrash').then((value) => {
            if (value == null) {
                this.setState({postTrash: []})
            } else {
                this.setState({postTrash: JSON.parse(value)})
            }
        })
        AsyncStorage.getItem('postBin').then((value) => {
            if (value == null) {
                this.setState({postBin: [0, 0, 0, 0]})
            } else {
                this.setState({postBin: JSON.parse(value)})
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
            content = require('./lang/lang.en')
        } else if (lang == 'th') {
            content = require('./lang/lang.th')
        }
    }

    changeTab(tab) {
        if (tab == 'gol') {
            this.setState({
                staticTab: true
            })
        } else if (tab == 'lo') {
            this.setState({
                staticTab: false
            })
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
        this.handleBinStatistics()
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
                favorite: markers
            });
        } else {
            let markers = this.state.favorite;
            markers[index] = 0;
            this.setState({
                favorite: markers
            });
        }
        AsyncStorage.setItem('favorite', JSON.stringify(this.state.favorite))
    }

    postTrash(trash, bin) {
        fetch('http://smartbin.devfunction.com/api/', {
            method: 'post',
            body: JSON.stringify({
                team_id: 3,
                secret: 'Nw6X5T',
                waste_statistics: trash,
                bin_statistics: {
                    general: bin[0],
                    compostable: bin[2],
                    recycle: bin[1],
                    hazardous: bin[3]
                }
            })
        })
            .catch((error) => {
                console.warn(error);
            });
        this.setState({
            postTrash: [],
            postBin: [0, 0, 0, 0]
        })
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
        binArr[content.default.items[index].bin - 1] = binArr[content.default.items[index].bin - 1] + 1
        this.setState({mostTrashedBin: binArr})

        AsyncStorage.setItem('mostTrashedItem', JSON.stringify(arr))
        AsyncStorage.setItem('recent', JSON.stringify(this.state.recent))
        AsyncStorage.setItem('mostTrashedBin', JSON.stringify(this.state.mostTrashedBin))

        // add to post trash array
        let existP = false;
        let arrP = this.state.postTrash;
        for (let i = 0; i < arrP.length; i++) {
            if (content.default.items[this.state.currentPage].name == arrP[i].category) {
                arrP[i].selected++
                existP = true;
            }
        }
        if (existP == false) {
            arrP = [...arrP, {category: content.default.items[this.state.currentPage].name, selected: 1}]
        }
        for (let i = 0; i < arrP.length - 1; i++) {
            if (arrP[i].selected < arrP[i + 1].selected) {
                let temp = arrP[i]
                arrP[i] = arrP[i + 1]
                arrP[i + 1] = temp
            }
        }
        this.setState({
            postTrash: arrP
        })

        // add to post bin array
        let binArrP = this.state.postBin
        binArrP[content.default.items[index].bin - 1] = binArrP[content.default.items[index].bin - 1] + 1
        this.setState({postBin: binArrP})
        if (this.state.postBin[0] + this.state.postBin[1] + this.state.postBin[2] + this.state.postBin[3] >= 10) {
            this.postTrash(arrP, binArrP);
        }
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
            currentPage: 0
        })
    }

    renderList() {
        if (this.state.listMode == 'favorite') {
            return this.state.favorite.filter(value => value != 0).map(value =>
                <TouchableOpacity key={value} style={styles.listBlock} onPress={()=>this.showTrashFromHome(value)}>
                  <View
                      style={{height:55,width:55,borderWidth:1,borderColor:'#ccc',backgroundColor:'#fff',marginTop:5,marginBottom:5,marginLeft:10,marginRight:10}}>
                    <View style={{flex:1}}>
                      <Image source={content.default.items[value].image} style={styles.trashIconStyle}
                             resizeMode="contain"/>
                    </View>
                  </View>
                  <Text>{content.default.items[value].name}</Text>
                </TouchableOpacity>
            )
        } else if (this.state.listMode == 'recent') {
            return this.state.recent.map(value =>
                <TouchableOpacity key={value} style={styles.listBlock} onPress={()=>this.showTrashFromHome(value)}>
                  <View
                      style={{height:55,width:55,borderWidth:1,borderColor:'#ccc',backgroundColor:'#fff',marginTop:5,marginBottom:5,marginLeft:10,marginRight:10}}>
                    <View style={{flex:1}}>
                      <Image source={content.default.items[value].image} style={styles.trashIconStyle}
                             resizeMode="contain"/>
                    </View>
                  </View>
                  <Text>{content.default.items[value].name}</Text>
                </TouchableOpacity>
            )
        } else if (this.state.listMode == 'most') {
            return this.state.mostTrashedItem.map(value =>
                <TouchableOpacity key={value.id} style={styles.listBlock}
                                  onPress={()=>this.showTrashFromHome(value.id)}>
                  <View
                      style={{height:55,width:55,borderWidth:1,borderColor:'#ccc',backgroundColor:'#fff',marginTop:5,marginBottom:5,marginLeft:10,marginRight:10}}>
                    <View style={{flex:1}}>
                      <Image source={content.default.items[value.id].image} style={styles.trashIconStyle}
                             resizeMode="contain"/>
                    </View>
                  </View>
                  <Text>{content.default.items[value.id].name}</Text>
                </TouchableOpacity>
            )
        }
    }

    deleteLocal() {
        this.setState({
            favorite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            recent: [],
            mostTrashedItem: [],
            mostTrashedBin: [0, 0, 0, 0],
        })
        AsyncStorage.setItem('favorite', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
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
                        <View style={{alignItems:'center'}}>
                          <View style={[styles.trashToBinElementStyle,{flex:1}]}>
                            <Image source={content.default.items[this.state.currentPage].image}
                                   style={styles.imageInBlock} resizeMode="contain"/>
                          </View>
                          <Text>{content.default.items[this.state.currentPage].name}</Text>
                        </View>
                        <Icon name="md-arrow-round-forward" size={30}/>
                        <View style={{alignItems:'center'}}>
                          <View style={[styles.trashToBinElementStyle,{flex:1}]}>
                            <Image
                                source={content.default.Bin[content.default.items[this.state.currentPage].bin].image}
                                style={styles.imageInBlock} resizeMode="contain"/>
                          </View>
                          <Text>{content.default.Bin[content.default.items[this.state.currentPage].bin].name}</Text>
                        </View>
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
                    <View style={{borderBottomWidth:1,borderBottomColor:"#ccc"}}>
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
                    <Icon name="md-arrow-back" color="#F7F7F7" size={30}/>
                }
              <Text>{content.default.items[this.state.currentPage].header}</Text>
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
                            <TouchableOpacity style={styles.gridStyle} onPress={()=>this.handleItemSelect(item)}>
                                <View style={{flex:1}}>
                                    <Image source={content.default.items[item].image} style={styles.imageInBlock} resizeMode="contain"/>
                                </View>
                                <Text>{content.default.items[item].name}</Text>
                            </TouchableOpacity>
                            }
                  />
                  :
                  <View>
                    <View style={styles.trashToBinBlockStyle}>
                      <View style={{alignItems:'center'}}>
                        <View style={[styles.trashToBinElementStyle,{flex:1}]}>
                          <Image source={content.default.items[this.state.currentPage].image}
                                 style={styles.imageInBlock} resizeMode="contain"/>
                        </View>
                        <Text>{content.default.items[this.state.currentPage].name}</Text>
                      </View>
                      <Icon name="md-arrow-round-forward" size={30}/>
                      <View style={{alignItems:'center'}}>
                        <View style={[styles.trashToBinElementStyle,{flex:1}]}>
                          <Image
                              source={content.default.Bin[content.default.items[this.state.currentPage].bin].image}
                              style={styles.imageInBlock} resizeMode="contain"/>
                        </View>
                        <Text>{content.default.Bin[content.default.items[this.state.currentPage].bin].name}</Text>
                      </View>
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
                {this.state.currentBin != 0 ?
                    <TouchableOpacity
                        onPress={()=>this.handleBinSelect(content.default.Bin[this.state.currentBin].parentID)}>
                      <Icon name="md-arrow-back" size={30}/>
                    </TouchableOpacity>
                    :
                    <Icon name="md-arrow-back" color="#F7F7F7" size={30}/>
                }
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
                            <TouchableOpacity style={styles.gridStyle} onPress={()=>this.handleBinSelect(item)}>
                                <View style={{flex:1}}>
                                    <Image source={content.default.Bin[item].image} style={styles.imageInBlock} resizeMode="contain"/>
                                </View>
                                <Text>{content.default.Bin[item].name}</Text>
                            </TouchableOpacity>
                         }
                  />
                  :
                  <View>
                    <View style={styles.trashcanStyle}>
                      <Image source={content.default.Bin[this.state.currentBin].image} style={styles.imageInBlock}
                             resizeMode="contain"/>
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
              <View style={styles.tabStyle}>
                <View style={this.state.staticTab==true?{borderBottomWidth: 1,borderBottomColor:'#ccc'}:{}}>
                  <TouchableOpacity onPress={() => this.changeTab('gol')}><Text
                      style={styles.changeView}>{content.default.globalStat}</Text></TouchableOpacity>
                </View>
                <Text style={{fontSize:18, padding:2, margin: 2}}>|</Text>
                <View style={this.state.staticTab==false?{borderBottomWidth: 1,borderBottomColor:'#ccc'}:{}}>
                  <TouchableOpacity onPress={() => this.changeTab('lo')}><Text
                      style={styles.changeView}>{content.default.localStat}</Text></TouchableOpacity>
                </View>
              </View>
              <Text style={styles.statisticsHeader}>{content.default.wasteStat}</Text>
                {this.state.staticTab == true &&
                <WebView
                    source={{ uri: 'http://charts.hohli.com/embed.html?created=1501426983299#w=320&h=240&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string"},{"label":"B","type":"number"}],"rows":[{"c":[{"v":"General"},{"v":' + this.state.general + '}]},{"c":[{"v":"Compostable"},{"v":' + this.state.compostable + '}]},{"c":[{"v":"Recycle"},{"v":' + this.state.recycle + '}]},{"c":[{"v":"Hazardous"},{"v":' + this.state.hazardous + '}]}]},"options":{"width":320,"height":240},"state":{},"isDefaultVisualization":true,"chartType":"PieChart"}' }}
                    scalesPageToFit={true}
                    automaticallyAdjustContentInsets={true}
                    scrollEnabled={false}
                />
                }
                {this.state.staticTab == false &&
                <WebView
                    source={{ uri: 'http://charts.hohli.com/embed.html?created=1501569339624#w=320&h=240&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string"},{"label":"B","type":"number"}],"rows":[{"c":[{"v":"Genral"},{"v":' + this.state.mostTrashedBin[0] + '}]},{"c":[{"v":"Compostable"},{"v":' + this.state.mostTrashedBin[2] + '}]},{"c":[{"v":"Recycle"},{"v":' + this.state.mostTrashedBin[1] + '}]},{"c":[{"v":"Hazardous"},{"v":' + this.state.mostTrashedBin[3] + '}]}]},"options":{"width":320,"height":240},"state":{},"isDefaultVisualization":true,"chartType":"PieChart"}' }}
                    scalesPageToFit={true}
                    automaticallyAdjustContentInsets={true}
                    scrollEnabled={false}
                />
                }
            </View>
              {this.state.staticTab == true &&
              <Text></Text>}
              {this.state.staticTab == false &&
              <View>
                <Text>Statistics</Text>
                <View style={{flexDirection:'row',flex:1}}>
                  <View style={{flex:1}}>
                    <View style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc'}}>
                      <Text>{content.default.item}</Text>
                    </View>
                    <View style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc'}}>
                        {this.state.mostTrashedItem.map(value =>
                            <Text key={value.id}>{content.default.items[value.id].name}</Text>
                        )}
                    </View>
                  </View>
                  <View style={{flex:1}}>
                    <View style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc'}}>
                      <Text>{content.default.quantity}</Text>
                    </View>
                    <View style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc'}}>
                        {this.state.mostTrashedItem.map(value =>
                            <Text key={value.id}>{value.count}</Text>
                        )}
                    </View>
                  </View>
                </View>
              </View>
              }
          </ScrollView>

            {/* #5 tab settings*/}

          <ScrollView tabLabel="md-settings" style={styles.tabView}>
            <View style={styles.settingCategoryStyle}>
              <Text style={styles.settingCategoryTextStyle}>{content.default.history}</Text>
              <TouchableOpacity style={styles.settingSubcategoryWrapperStyle}
                                onPress={() => this.deleteLocal()}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon name="md-refresh-circle" size={30}/>
                </View>
                <View style={styles.settingSubcategoryStyle}>
                  <Text>{content.default.clearHistory}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.settingCategoryStyle}>
              <Text style={styles.settingCategoryTextStyle}>{content.default.language}</Text>
              <View
                  style={styles.settingSubcategoryWrapperStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon name="md-globe" size={30}/>
                </View>
                <View style={styles.settingSubcategoryStyle}>
                  <Picker style={{flex: 1}}
                          selectedValue={this.state.language}
                          onValueChange={(itemValue, itemIndex) => this.changeLanguage(itemValue)}>
                    <Picker.Item label="English"
                                 value="en"/>
                    <Picker.Item label="ภาษาไทย"
                                 value="th"/>
                  </Picker>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollableTabView>;
    }
};

styles = require('./Style');

AppRegistry.registerComponent('TrashApp', () => TrashApp);
