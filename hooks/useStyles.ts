import {StyleSheet} from 'react-native';
import {useStates} from './useStates'
import {StatusBar} from 'react-native'


export const useStyles = () => {
    const {theme} = useStates();

    const styles = StyleSheet.create({
        light: {
            textDecorationLine: 'none',

            formBox: {
                width: "95%",
                height: 500,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: "#fff",
                marginTop: 20,
                paddingVertical: 40,
                paddingHorizontal: 30,
        
                input: {
                    width: "100%",
                    height: 50,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                },
                textForgot: {
                    color: "#000",
                    fontSize: 16,
                    marginTop: 10,
                    alignSelf : 'flex-end',
                    textAlign: 'right',
                },
                button: {
                    width: "100%",
                    height: 50,
                    backgroundColor: "linear-gradient(90deg, rgba(35,182,138,1) 0%, rgba(255,255,255,0) 100%, rgba(15,1,36,1) 100%)",
                    borderRadius: 20,
                    paddingTop: 12,
                    marginTop: 40,
                },
                spans: {
                    backgroundColor: "linear-gradient(90deg, rgba(35,182,138,1) 0%, rgba(255,255,255,0) 100%, rgba(15,1,36,1) 100%)",
                    width: "35%",
                    height: 2,
                },
                orSign: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "100%",
                    marginTop: 80,
                },
                textOr: {
                    color: "#000",
                    fontSize: 10,
                    marginHorizontal: 10,
                },
                image: {
                    width: 40,
                    height: 40,
                    resizeMode: 'contain',
                    marginHorizontal: 10,
                    marginVertical: 5,
                },
                social: {
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 5,
                    opacity: 0.8,
                },
                fieldChanged: {
                    width: "100%",
    
                    iconDrop: {
                        position: 'absolute',
                        top: 10,
                        right: 5,
                        opacity: 0.6,
                        padding: 15,
                        paddingLeft: 30,
                        zIndex: 1,
                    },
                    listSection: {
                        backgroundColor: '#D9D9D9',
                        position: 'absolute',
                        top: 40,
                        left: 0,
                        width: '100%',
                        zIndex: 1,
                        borderRadius: 5,
                    },
                    titleStyle: {
                        color: 'black'
                    }
                }
            },
            MainC: {
                flex: 1,
                container :{
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                },
                subContainer: {
                    width: "93%",
                    height: "86%",
                    backgroundColor: "white",
                    borderRadius: 30,
                },
                welcome: {
                    fontSize: 20,
                    fontWeight: '500',
                    opacity: 0.8,
                },
                options: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 23,
                    marginVertical: 13,
                    height: 60,
                    borderRadius: 15,
                    backgroundColor: "#c1bfc4",
                },
                mainBox: {
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 55,
                },
                Box: {
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    paddingHorizontal: 20,
                },
                span: {
                    alignSelf: 'center',
                    width: "40%",
                    height: 2.5,
                    backgroundColor: "#35BC94",
                    marginTop: 130,
                    opacity: 0.8,
                    borderRadius: 30,
                },
                text: {
                    fontSize: 15,
                    alignSelf: 'flex-end',
                    opacity: 0.8,
                },
                text2Container: {
                    width: "79%",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                }
            },
            MainScreen2: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '88%',

                headerMain: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: StatusBar.currentHeight + 20,
                    padding: 10,
                    paddingHorizontal: 20,
                    width: '100%',

                    text: {
                        fontSize: 25    ,
                        fontWeight: 'bold',
                    },
                    badge: {
                        position: 'absolute',
                        top: 0,
                        right: -3,
                        backgroundColor: '#52A8B5',
                        borderWidth: 1,
                        color: '#fff',
                        opacity: 0.9,
                    }
                },
                MainBoxShortcuts: {
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,

                    subBox: {
                        width: '90%',
                    },
                    textShowtcuts: {
                        fontSize: 16,
                        fontWeight: '500',
                        opacity: 0.6,
                    },

                    containerShorts : {
                        backgroundColor: '#FFFFFF',
                        opacity: 0.8,
                        width: '92%',
                        height: '90%',
                        display: 'flex',
                        borderRadius: 20,
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        paddingTop: 20,
                    },
                    subContainerShorts: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    },
                    MapBox: {
                        backgroundColor: '#52A8B5',
                        width: 147,
                        height: 147,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        margin: 10,
                        borderRadius: 20,
                        paddingLeft: 10,
                        paddingTop: 15,

                        titleLarge: {
                            fontWeight: '500',
                            opacity: 0.9,
                        },
                        description: {
                            fontSize: 12,
                            opacity: 0.6,
                            width: '80%',
                        }
                    },
                },
                RecentActions: {
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 20,

                    text: {
                        fontSize: 16,
                        fontWeight: '500',
                        opacity: 0.6,
                    },

                    slider: {
                        display: 'flex',
                        flexDirection: 'row',
                        
                        ItemsSliders: {
                            backgroundColor: '#95C0C8',
                            width: 52,
                            height: 52,
                            margin: 5,
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    },

                },
                SpanContainer: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                    span: {
                        backgroundColor: '#35BC94',
                        width: '35%',
                        height: 3,
                        margin: 17,
                        borderRadius: 20,
                    }
                },
                Navbar: {
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: 50,

                    container: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 20,
                        width: '92%',

                        item: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 5,

                            iconContainer: {
                                backgroundColor: '#95C0C8',
                                width: 50,
                                height: 50,
                                marginHorizontal: 5,
                                borderRadius: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                                icon: {
                                    opacity: 0.5,
                                },
                                text: {
                                    fontSize: 10,
                                }
                            }
                        }
                    }
                }

            },
            ImageBackground: {
                flex: 1,
                resizeMode: "cover",
                width: "100%",
                height: "100%",
            },
            welcome: {
                flex: 1,
                containerDad: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                containerImage: {
                    width: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 35,
                },
                textContainer: {
                    width: "70%",
                    paddingRight: 20,
                    paddingLeft: 10,
                },
                text: {
                    fontSize: 40,
                    fontWeight: '500',
                    opacity: 0.8,
                },
                boxArrow: {
                    width: 199,
                    height: 199,
                    transform: [{ rotate: '45deg' }, { translateX: 50 }, { translateY: -10}],
                    borderRadius: 40,
                    backgroundColor: "white",
                    position: 'relative',
                    opacity: 0.8,
                },
                icon: {
                    position: 'absolute',
                    top: 180,
                    left: 0,
                    transform: [{ rotate: '-45deg' }, { translateX: 60 }, { translateY: 0}],
                },
                textButton: {
                    fontSize: 16,
                    fontWeight: '500',
                    opacity: 0.8,
                    marginBottom: 2,
                },
                feedbackBox: {
                    width: 150,
                    height: 40,
                    backgroundColor: "#7BB6B5",
                    marginLeft: 13,
                    marginTop: 15,
                    borderRadius: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: "#7BB8B0",
                    borderWidth: 1,
                }
            },
            selectLanguage: {
                width: "100%",
                
                viewContainer: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: "60%",
                    backgroundColor: "#D9D9D9",
                    opacity: 0.75,
                    borderRadius: 10,
                  },
                  imageContainer: {
                    width: 45,
                    height: 45,
                    backgroundColor: 'black',
                    borderRadius: 100,
                    marginVertical: 7,
                    marginHorizontal: 10,
                    overflow: 'hidden',
                  },
                  image: {
                    width: "100%",
                    height: "100%",
                    resizeMode: 'contain',
                    borderRadius: 100,
                  }
            },
            backBar: {
                width: "100%",
                backBarText: {
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
        },
        dark : {
            textDecorationLine: 'none',

            formBox: {
                width: "95%",
                height: 500,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: "#fff",
                marginTop: 20,
                paddingVertical: 40,
                paddingHorizontal: 30,
        
                input: {
                    width: "100%",
                    height: 50,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                },
                textForgot: {
                    color: "white",
                    fontSize: 16,
                    marginTop: 10,
                    alignSelf : 'flex-end',
                    textAlign: 'right',
                },
                button: {
                    width: "100%",
                    height: 50,
                    backgroundColor: "linear-gradient(90deg, rgba(35,182,138,1) 0%, rgba(255,255,255,0) 100%, rgba(15,1,36,1) 100%)",
                    borderRadius: 20,
                    paddingTop: 12,
                    marginTop: 40,
                },
                spans: {
                    backgroundColor: "linear-gradient(90deg, rgba(35,182,138,1) 0%, rgba(255,255,255,0) 100%, rgba(15,1,36,1) 100%)",
                    width: "35%",
                    height: 2,
                },
                orSign: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "100%",
                    marginTop: 80,
                },
                textOr: {
                    color: "white",
                    fontSize: 10,
                    marginHorizontal: 10,
                },
                image: {
                    width: 40,
                    height: 40,
                    resizeMode: 'contain',
                    marginHorizontal: 10,
                    marginVertical: 5,
                },
                social: {
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 5,
                    opacity: 0.8,
                },
                fieldChanged: {
                    width: "100%",
    
                    iconDrop: {
                        position: 'absolute',
                        top: 10,
                        right: 5,
                        opacity: 0.6,
                        padding: 15,
                        paddingLeft: 30,
                        zIndex: 1,
                    },
                    listSection: {
                        backgroundColor: '#D9D9D9',
                        position: 'absolute',
                        top: 40,
                        left: 0,
                        width: 330.90,
                        zIndex: 1,
                        borderRadius: 5,
                    },
                    titleStyle: {
                        color: 'black'
                    }
                }
            },
            MainC: {
                flex: 1,
                container :{
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                },
                subContainer: {
                    width: "93%",
                    height: "86%",
                    backgroundColor: "white",
                    borderRadius: 30,
                },
                welcome: {
                    fontSize: 20,
                    fontWeight: '500',
                    opacity: 0.8,
                },
                options: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 23,
                    marginVertical: 13,
                    height: 60,
                    borderRadius: 15,
                    backgroundColor: "#c1bfc4",
                },
                mainBox: {
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 55,
                },
                Box: {
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    paddingHorizontal: 20,
                },
                span: {
                    alignSelf: 'center',
                    width: "40%",
                    height: 2.5,
                    backgroundColor: "#35BC94",
                    marginTop: 130,
                    opacity: 0.8,
                    borderRadius: 30,
                },
                text: {
                    fontSize: 15,
                    alignSelf: 'flex-end',
                    opacity: 0.8,
                },
                text2Container: {
                    width: "79%",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                }
            },
            MainScreen2: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '88%',

                headerMain: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: StatusBar.currentHeight + 20,
                    padding: 10,
                    paddingHorizontal: 20,
                    width: '100%',

                    text: {
                        fontSize: 25    ,
                        fontWeight: 'bold',
                    },
                    badge: {
                        position: 'absolute',
                        top: 0,
                        right: -3,
                        backgroundColor: '#52A8B5',
                        borderWidth: 1,
                        color: '#fff',
                        opacity: 0.9,
                    }
                },
                MainBoxShortcuts: {
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,

                    subBox: {
                        width: '90%',
                    },
                    textShowtcuts: {
                        fontSize: 16,
                        fontWeight: '500',
                        opacity: 0.6,
                    },

                    containerShorts : {
                        backgroundColor: '#FFFFFF',
                        opacity: 0.8,
                        width: '92%',
                        height: '90%',
                        display: 'flex',
                        borderRadius: 20,
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        paddingTop: 20,
                    },
                    subContainerShorts: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    },
                    MapBox: {
                        backgroundColor: '#52A8B5',
                        width: 147,
                        height: 147,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        margin: 10,
                        borderRadius: 20,
                        paddingLeft: 10,
                        paddingTop: 15,

                        titleLarge: {
                            fontWeight: '500',
                            opacity: 0.9,
                        },
                        description: {
                            fontSize: 12,
                            opacity: 0.6,
                            width: '80%',
                        }
                    },
                },
                RecentActions: {
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 20,

                    text: {
                        fontSize: 16,
                        fontWeight: '500',
                        opacity: 0.6,
                    },

                    slider: {
                        display: 'flex',
                        flexDirection: 'row',
                        
                        ItemsSliders: {
                            backgroundColor: '#95C0C8',
                            width: 52,
                            height: 52,
                            margin: 5,
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    },

                },
                SpanContainer: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                    span: {
                        backgroundColor: '#35BC94',
                        width: '35%',
                        height: 3,
                        margin: 17,
                        borderRadius: 20,
                    }
                },
                Navbar: {
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: 50,

                    container: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 20,
                        width: '92%',

                        item: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 5,

                            iconContainer: {
                                backgroundColor: '#95C0C8',
                                width: 50,
                                height: 50,
                                marginHorizontal: 5,
                                borderRadius: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                                icon: {
                                    opacity: 0.5,
                                },
                                text: {
                                    fontSize: 10,
                                }
                            }
                        }
                    }
                }

            },
            ImageBackground: {
                flex: 1,
                resizeMode: "cover",
                width: "100%",
                height: "100%",
            },
            welcome: {
                flex: 1,
                containerDad: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                containerImage: {
                    width: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 35,
                },
                textContainer: {
                    width: "70%",
                    paddingRight: 20,
                    paddingLeft: 10,
                },
                text: {
                    fontSize: 40,
                    fontWeight: '500',
                    opacity: 0.8,
                },
                boxArrow: {
                    width: 199,
                    height: 199,
                    transform: [{ rotate: '45deg' }, { translateX: 50 }, { translateY: -10}],
                    borderRadius: 40,
                    backgroundColor: "white",
                    position: 'relative',
                    opacity: 0.8,
                },
                icon: {
                    position: 'absolute',
                    top: 180,
                    left: 0,
                    transform: [{ rotate: '-45deg' }, { translateX: 60 }, { translateY: 0}],
                },
                textButton: {
                    fontSize: 16,
                    fontWeight: '500',
                    opacity: 0.8,
                    marginBottom: 2,
                },
                feedbackBox: {
                    width: 150,
                    height: 40,
                    backgroundColor: "#7BB6B5",
                    marginLeft: 13,
                    marginTop: 15,
                    borderRadius: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: "#7BB8B0",
                    borderWidth: 1,
                }
            },
            selectLanguage: {
                width: "100%",
                
                viewContainer: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: "60%",
                    backgroundColor: "#D9D9D9",
                    opacity: 0.75,
                    borderRadius: 10,
                  },
                  imageContainer: {
                    width: 45,
                    height: 45,
                    backgroundColor: 'black',
                    borderRadius: 100,
                    marginVertical: 7,
                    marginHorizontal: 10,
                    overflow: 'hidden',
                  },
                  image: {
                    width: "100%",
                    height: "100%",
                    resizeMode: 'contain',
                    borderRadius: 100,
                  }
            },
            backBar: {
                width: "100%",
                backBarText: {
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
        }
    });
    
    return styles[theme]
}
