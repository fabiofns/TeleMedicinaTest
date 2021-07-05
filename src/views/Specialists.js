/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setName, 
    setUrlContent,
    setTotal
} from '../actions';
import {Colors} from '../helpers/Colors';
import { getData, getDataUrl, storeData } from '../helpers/Utils';
import NavigationBar from 'react-native-navbar';
import Space from '../helpers/Space';
import { SvgUri } from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Loading from '../helpers/Loading';

class Specialists extends React.Component {

    state = {
        loading: true,
        home: [],	
        list: []	
    }

    componentDidMount() {	        

        getDataUrl(this.props.urlContent).then(result => {

            if (result != false) {

                storeData(this.props.name.split('').filter(e => e.trim().length).join(''), JSON.stringify(result)).then(save => {

                    this.renderList().then(finish => {

                        if (finish == true) {

                            this.setState({loading: false});
                        }
                    });
                });
            }
        })
    }	

    renderList = () => {

        return new Promise((resolve, reject) => {

            getData(this.props.name.split('').filter(e => e.trim().length).join('')).then(result => {

                let data = JSON.parse(result);
                let list = [];
                let cont = 0;
    
                data.map(item => {
    
                    cont++;
    
                    list.push(
                        <>
                        <Space height={5} />
                        <View
                            style={{
                                flexDirection: 'row',  
                                backgroundColor: Colors.white,                        
                                width: '100%',
                            }}
                        >
                            
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                
                                <View
                                    style={{
                                        width: '20%',
                                        alignItems: 'center'
                                    }}
                                >
    
                                    <Space />
    
                                    <View
                                        style={{
                                            backgroundColor: Colors.silver,
                                            width: 50,
                                            height: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 100
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            {String(item.name).substr(0,1)} 
                                        </Text>
                                    </View>
    
                                </View>
    
                                <View
                                    style={{
                                        width: '80%',
                                    }}
                                >
    
                                    <Space height={10} />
    
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontFamily: 'segoe-ui-bold',
                                            color: Colors.color5
                                        }}
                                    >
                                        {item.name}
                                    </Text>
    
                                    <Space height={2} />
    
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: Colors.color7,
                                            fontFamily: 'segoe-ui-bold'
                                        }}
                                    >
                                        Nearby {item.distance} miles
                                    </Text>
    
                                    <Space height={10} />
    
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            color: Colors.color7,
                                            fontFamily: 'segoe-ui-bold'
                                        }}
                                    >
                                        {item.description}
                                    </Text>
    
                                    <Space />
    
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            // justifyContent: 'center'
                                        }}
                                    >
                                        <View>
                                            <TouchableOpacity
                                                style={{
                                                    width: 130,
                                                    height: 50,
                                                    backgroundColor: Colors.color2,
                                                    borderRadius: 30,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                onPress={() => {
    
                                                    Linking.openURL(item.actions.chat);
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: Colors.white,
                                                        fontFamily: 'segoe-ui-bold'
                                                    }}
                                                >
                                                    Chat
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
    
                                        <View style={{width: 10}}></View>
    
                                        <View>
    
                                            {item.actions.call && (
                                                <TouchableOpacity
                                                    style={{
                                                        width: 130,
                                                        height: 50,
                                                        backgroundColor: Colors.fundoApp,
                                                        borderRadius: 30,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',                                                
                                                    }}
                                                    onPress={() => {
    
                                                        Linking.openURL(`tel:${item.actions.call}`)
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: Colors.color5,
                                                            fontFamily: 'segoe-ui-bold'
                                                        }}
                                                    >
                                                        Call
                                                    </Text>
    
                                                </TouchableOpacity>
                                            )}
                                            
                                        </View>
    
                                    </View>
    
                                    <Space />
    
                                </View>                            
                            </View>
    
                        </View>                    
    
                        </>
                    );                
                });
    
                this.setState({list: list});

                resolve(true);
            })
        })
    }

    render() {

        return (
            <>   
            <Loading visible={this.state.loading} />  
            <View
                style={{
                    flex: 1,
                    backgroundColor: Colors.fundoApp,
                }}
            >                

                <NavigationBar
                    leftButton={
                        <TouchableOpacity onPress={ () => {

                            this.props.navigation.goBack()
                        }}
                        style={{
                            justifyContent: 'center',
                            marginLeft: 10,
                            width: 100
                        }}
                    >
                        <FontAwesomeIcon icon={ faChevronLeft } size={25} color={Colors.color5} />

                    </TouchableOpacity>
                    }
                    rightButton={
                        <TouchableOpacity
                            style={{
                                width: 50,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                
                            }}
                        >
                            <SvgUri
                                width="25"
                                height="25"
                                fill={Colors.color5}
                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/filter-results-button.svg'}
                            />

                        </TouchableOpacity>
                    }                                                       
                    style={{
                        backgroundColor: Colors.white,
                        height: 60,
                        width: '100%',
                        alignItems: 'center',
                    }}
                    tintColor={Colors.fundoApp}
                    statusBar={{
                        tintColor: Colors.black,                        
                        backgroundColor: Colors.color5,
                        style:'light-content'
                    }}
                /> 

                <ScrollView
                    style={{
                        backgroundColor: Colors.fundoApp,
                    }}
                >

                    <View 
                        style={{
                            backgroundColor: Colors.white
                        }}
                    >
                    
                        <View
                            style={{
                                marginLeft: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontFamily: 'segoe-ui-bold',
                                    color: Colors.color5
                                }}
                            >
                                {this.props.name}
                            </Text>

                            <Space height={10} />

                            <Text
                                style={{
                                    fontSize: 20,
                                    color: Colors.color5,
                                    fontFamily: 'segoe-ui-bold'
                                }}
                            >
                                {this.props.total} doctors were found
                            </Text>

                            <Space />

                        </View>

                    </View>

                    {this.state.list}
                    
                </ScrollView>

            </View>
            </>
        )
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({ 
    setName, 
    setUrlContent,
    setTotal
}, dispatch);

const mapStateToProps = store => ({    
    name: store.data.name,
    total: store.data.total,
    urlContent: store.data.urlContent,
});

export default connect(mapStateToProps, mapDispatchToProps)(Specialists);
