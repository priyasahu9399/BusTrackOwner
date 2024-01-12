import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants'

const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
  backicon:{
   width: width*.08,
   height: height*.02,
   tintColor: COLORS.white,
   marginLeft:width*.03,
   padding:width*.01,
  }
   
})