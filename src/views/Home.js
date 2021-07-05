/**
 * Aplicativo Vendedor AppRoi
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 * @copyright Agencia Frog
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Platform,
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
import Loading from '../helpers/Loading';

class Home extends React.Component {

    state = {
        loading: true,
        home: [],	
        specialists: []	
    }

    componentDidMount() {		

        getDataUrl('https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/home_specialists.json').then(result => {

            if (result != false) {

                storeData('@specialists', JSON.stringify(result)).then(save => {

                    this.renderSpecialists().then(finish => {

                        if (finish == true) {

                            storeData('@firstTime', JSON.stringify(true));
                            
                            this.setState({loading: false});
                        }
                    });
                });
            }
        })
    }	

    renderSpecialists = () => {

        return new Promise((resolve, reject) => {

            getData('@specialists').then(result => {

                let data = JSON.parse(result);
                let specialists = [];
                let cont = 0;
    
                data.map(item => {
    
                    cont++;
    
                    specialists.push(
                        <View
                            style={{
                                flexDirection: 'row',  
                                margin: 5                                                       
                            }}
                        >
                            <TouchableOpacity 
                                onPress={() => {
    
                                    this.props.setName(item.name);
                                    this.props.setTotal(item.total);                                
                                    
                                    if (item.name == 'Heart Specialist') {
    
                                        this.props.setUrlContent('https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json');
                                    }
    
                                    if (item.name == 'Dental Care') {
    
                                        this.props.setUrlContent('https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dental_care.json');
                                    }
    
                                    if (item.name == 'Dermatology Specialist') {
    
                                        this.props.setUrlContent('https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dermatology.json');
                                    }
    
                                    this.props.navigation.navigate('Specialists');
                                }}
                                style={{                                    
                                    width: 150,
                                    height: 200,
                                    borderRadius: 20,
                                    backgroundColor: item.color
                                }}
                            >     
    
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        margin: 10
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: Colors.white,
                                            width: 60,
                                            height: 80,
                                            borderRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >                                   
                                        <SvgUri
                                            width="50"
                                            height="50"
                                            fill={item.color}
                                            uri={item.image_url}
                                        />
                                    </View>
    
                                    <Space height={10} />
    
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: Colors.white,
                                            fontFamily: 'segoe-ui-bold'
                                        }}
                                    >
                                        {item.name}
                                    </Text>
    
                                    <Space height={10} />
    
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: Colors.white,
                                            fontFamily: 'segoe-ui-bold'
                                        }}
                                    >
                                        {item.total} Doctors
                                    </Text>
    
                                </View>
                                                                                          
                            </TouchableOpacity>
    
                        </View>
                    );                
                });
    
                this.setState({specialists: specialists});
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
                    style={{
                        backgroundColor: Colors.white,
                        height: 0,
                        width: '100%',
                        alignItems: 'center',
                        marginTop: Platform.OS == 'ios' ? 30 : 0,
                    }}
                    tintColor={Colors.black}
                    statusBar={{
                        tintColor: Colors.black,                                                
                        // backgroundColor: Colors.white,
                        // style:'light-content'
                    }}
                /> 

                <ScrollView>

                    <View
                        style={{
                            flexDirection: 'column',
                            margin: 10,
                            marginLeft: 20,
                        }}
                    >
                        <Space />

                        <Text
                            style={{
                                fontSize: 25,  
                                color: Colors.gray,
                                fontFamily: 'segoe-ui-bold'                         
                            }}
                        >
                            Hello,
                        </Text>

                        <Text
                            style={{
                                fontSize: 30,
                                fontFamily: 'segoe-ui-bold',
                                color: Colors.gray
                            }}
                        >
                            Lorelle Luna
                        </Text>
                    </View>                

                    <Space />

                    <View
                        style={{
                            margin: 10     
                        }}
                    >

                        <Text
                            style={{
                                marginLeft: 10,
                                fontSize: 30,
                                color: Colors.gray,
                                fontFamily: 'segoe-ui-bold'
                            }}
                        >
                            Specialists
                        </Text>

                        <ScrollView                
                            horizontal={true}
                            alwaysBounceHorizontal={false}
                            alwaysBounceVertical={false}
                            bounces={false}
                            automaticallyAdjustContentInsets={false}
                            directionalLockEnabled={true}
                            bouncesZoom={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{
                                width: '100%',
                            }}
                        >

                            {this.state.specialists}

                        </ScrollView>        

                    </View>

                    <View
                        style={{
                            margin: 10     
                        }}
                    >

                        <Text
                            style={{
                                marginLeft: 10,
                                fontSize: 30,
                                fontFamily: 'segoe-ui-bold',
                                color: Colors.gray
                            }}
                        >
                            What do you need?
                        </Text>

                        <ScrollView                
                            horizontal={true}
                            alwaysBounceHorizontal={false}
                            alwaysBounceVertical={false}
                            bounces={false}
                            automaticallyAdjustContentInsets={false}
                            directionalLockEnabled={true}
                            bouncesZoom={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{
                                width: '100%',
                            }}
                        >

                            <View
                                style={{
                                    flexDirection: 'row',  
                                    margin: 5                                                       
                                }}
                            >
                                <TouchableOpacity 
                                    onPress={() => {
                                        
                                    }}
                                    style={{                                    
                                        width: 150,
                                        height: 150,
                                        borderRadius: 20,
                                        backgroundColor: Colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >     

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            margin: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Colors.white,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >                                   
                                            <SvgUri
                                                width="50"
                                                height="50"
                                                fill={Colors.color5}
                                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/stethoscope.svg'}
                                            />
                                        </View>

                                        <Space height={10} />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: Colors.color5,
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            Diagnostic
                                        </Text>                                    

                                    </View>
                                                                                            
                                </TouchableOpacity>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',  
                                    margin: 5                                                       
                                }}
                            >
                                <TouchableOpacity 
                                    onPress={() => {
                                        
                                    }}
                                    style={{                                    
                                        width: 150,
                                        height: 150,
                                        borderRadius: 20,
                                        backgroundColor: Colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >     

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            margin: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Colors.white,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >                                   
                                            <SvgUri
                                                width="50"
                                                height="50"
                                                fill={Colors.color5}
                                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/patient.svg'}
                                            />
                                        </View>

                                        <Space height={10} />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: Colors.color5,
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            Consultation
                                        </Text>                                    

                                    </View>
                                                                                            
                                </TouchableOpacity>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',  
                                    margin: 5                                                       
                                }}
                            >
                                <TouchableOpacity 
                                    onPress={() => {
                                        
                                    }}
                                    style={{                                    
                                        width: 150,
                                        height: 150,
                                        borderRadius: 20,
                                        backgroundColor: Colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >     

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            margin: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Colors.white,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >                                   
                                            <SvgUri
                                                width="50"
                                                height="50"
                                                fill={Colors.color5}
                                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/nurse.svg'}
                                            />
                                        </View>

                                        <Space height={10} />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: Colors.color5,
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            Nurse
                                        </Text>                                    

                                    </View>
                                                                                            
                                </TouchableOpacity>

                            </View>

                        </ScrollView>   

                        <ScrollView                
                            horizontal={true}
                            alwaysBounceHorizontal={false}
                            alwaysBounceVertical={false}
                            bounces={false}
                            automaticallyAdjustContentInsets={false}
                            directionalLockEnabled={true}
                            bouncesZoom={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{
                                width: '100%',
                            }}
                        >

                            <View
                                style={{
                                    flexDirection: 'row',  
                                    margin: 5                                                       
                                }}
                            >
                                <TouchableOpacity 
                                    onPress={() => {
                                        
                                    }}
                                    style={{                                    
                                        width: 150,
                                        height: 150,
                                        borderRadius: 20,
                                        backgroundColor: Colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >     

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            margin: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Colors.white,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >                                   
                                            <SvgUri
                                                width="50"
                                                height="50"
                                                fill={Colors.color5}
                                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/ambulance.svg'}
                                            />
                                        </View>

                                        <Space height={10} />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: Colors.color5,
                                                fontWeight: 'bold',
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            Diagnostic
                                        </Text>                                    

                                    </View>
                                                                                            
                                </TouchableOpacity>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',  
                                    margin: 5                                                       
                                }}
                            >
                                <TouchableOpacity 
                                    onPress={() => {
                                        
                                    }}
                                    style={{                                    
                                        width: 150,
                                        height: 150,
                                        borderRadius: 20,
                                        backgroundColor: Colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >     

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            margin: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Colors.white,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >                                   
                                            <SvgUri
                                                width="50"
                                                height="50"
                                                fill={Colors.color5}
                                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/flask.svg'}
                                            />
                                        </View>

                                        <Space height={10} />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: Colors.color5,
                                                fontWeight: 'bold',
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            Lab Work
                                        </Text>                                    

                                    </View>
                                                                                            
                                </TouchableOpacity>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',  
                                    margin: 5                                                       
                                }}
                            >
                                <TouchableOpacity 
                                    onPress={() => {
                                        
                                    }}
                                    style={{                                    
                                        width: 150,
                                        height: 150,
                                        borderRadius: 20,
                                        backgroundColor: Colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >     

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            margin: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Colors.white,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >                                   
                                            <SvgUri
                                                width="50"
                                                height="50"
                                                fill={Colors.color5}
                                                uri={'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/medicine.svg'}
                                            />
                                        </View>

                                        <Space height={10} />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: Colors.color5,
                                                fontWeight: 'bold',
                                                fontFamily: 'segoe-ui-bold'
                                            }}
                                        >
                                            Medicine
                                        </Text>                                    

                                    </View>
                                                                                            
                                </TouchableOpacity>

                            </View>

                        </ScrollView>     

                    </View>
                </ScrollView>

            </View>
            </>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',		
    },	
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
