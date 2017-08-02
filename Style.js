/**
 * Created by Admin on 8/1/2017.
 */
var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({
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
        height: 320,
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
    gridStyle: {
        height: 150,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 10
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
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    trashToBinElementStyle: {
        flex: 1,
        height: 150,
        width: 150,
        margin: 10,
        alignItems: 'center'
    },
    trashIconStyle:{
        flex: 1,
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    imageInBlock: {
        flex: 1,
        height: null,
        width: null,
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
    },
    menuView: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    statisticsHeader: {
        fontSize: 18,
        alignSelf: 'center'
    },
    tabStyle: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    changeView: {
        fontSize: 18,
        padding: 2,
        margin: 2,
    },
    settingCategoryStyle:{
        borderBottomWidth:2,
        borderColor:"#ccc"
    },
    settingCategoryTextStyle:{
        marginBottom:10
    },
    settingSubcategoryWrapperStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:50
    },
    settingSubcategoryStyle:{
        flex:5,
        borderTopWidth:1,
        borderColor:"#ccc",
        height:50,
        justifyContent:'center'
    }

})