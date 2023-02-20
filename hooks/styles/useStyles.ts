import {StyleSheet} from 'react-native';


export const useStyles = () => {
    return StyleSheet.create({
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
        }
    });
}
