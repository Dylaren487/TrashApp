import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomTabBar = React.createClass({
    tabIcons: [],

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    },

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },

    setAnimationValue({value,}) {
        this.tabIcons.forEach((icon, i) => {
            const progress = Math.min(1, Math.abs(value - i))
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                    borderBottomWidth: 2,
                    borderBottomColor:this.borderColor(progress),
                },
            });
        });
    },

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 85 + (204 - 85) * progress;
        const green = 85 + (204 - 85) * progress;
        const blue = 85 + (204 - 85) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },
    borderColor(progress) {
        const red = 85 + (250 - 85) * progress;
        const green = 85 + (250 - 85) * progress;
        const blue = 85 + (250- 85) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },

    render() {
        return (
            <View>
                <View style={{borderBottomWidth:1, borderColor:'#DDD'}}>
                    <Text style={{alignSelf:'center', fontSize: 20,padding:5}}>Trashure</Text>
                </View>
                <View style={[styles.tabs, this.props.style, ]}>
                    {this.props.tabs.map((tab, i) => {
                        return (
                            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                                <Icon
                                    name={tab}
                                    size={30}
                                    color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
                                    ref={(icon) => { this.tabIcons[i] = icon; }}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
});

export default CustomTabBar;