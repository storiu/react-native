import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        commitModalContainer: {
            flex: 1,
        },
        commitModalTitle: {
            fontWeight: '900',
            fontSize: theme.hp('5%'),
            fontFamily: theme.fonts.bold,
            width: '65%',
            alignSelf: 'center',
            marginVertical: theme.hp('2%'),
            textAlign: 'center',
            flexDirection: 'row',
            color: 'white',
        },
        commitModalDesc: {
            fontWeight: 'bold',
            width: '80%',
            alignSelf: 'center',
            marginVertical: theme.hp('2%'),
            textAlign: 'center',
            fontSize: theme.hp('2%'),
            flexDirection: 'row',
            color: 'white',
        },
        closeIconCommitModal: {
            color: 'white',
            fontWeight: '900',
        },
        commitModal: {
            height: '100%',
            backgroundColor: '#000000cf',
        },
        modalTitle: {
            fontFamily: theme.fonts.bold,
            fontSize: 28,
            fontWeight: 'bold',
            color: 'black',
        },
        closeIcon: {
            position: 'absolute',
            top: theme.hp('5%'),
            left: theme.hp('2%'),
        },
        continueBtn: {
            backgroundColor: '#96CD00',
            borderWidth: 0,
            height: theme.hp('7%'),
            marginTop: theme.hp('3%'),
        },
        continueBtnTxt: {
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
        },
        textAlignCenter: {
            textAlign: 'center',
            color: 'white',
        },
        textUnderLine: {
            textDecorationLine: 'underline',
        },
        textBold: {
            fontWeight: 'bold',
            marginVertical: theme.hp('1%'),
        },
        membershipTitle: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: theme.hp('2.4%'),
            width: '40%',
        },
        membershipWrapper: {
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: theme.wp('3%'),
            width: theme.wp('90%'),
            alignSelf: 'center',
            padding: 0,
            position: 'relative',
        },
        memberShipItem: {
            margin: 0,
            width: '100%',
            paddingHorizontal: theme.wp('3%'),
            justifyContent: 'space-between',
            borderWidth: 0,
            paddingVertical: theme.hp('3%'),
            borderRadius: theme.wp('2%'),
        },
        membershipOverLayer: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 2,
            backgroundColor: '#0000007f',
        },
        savePercentContainer: {
            position: 'absolute',
            bottom: -theme.hp('3.3%'),
            backgroundColor: '#96CD009f',
            height: theme.hp('15.9%'),
            zIndex: 3,
            justifyContent: 'flex-end',
            alignItems: 'center',
            left: -theme.wp('0.8%'),
            right: -theme.wp('0.8%'),
            borderRadius: theme.wp('2.5%'),
        },
        savePercent: {
            width: '100%',
            height: theme.hp('4%'),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#81a227',
            borderRadius: theme.wp('2.5%'),
        },
        savePercentText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: theme.hp('2%'),
        },
    });
