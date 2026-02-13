import { ImageBackground } from 'react-native-web';



export default function background({ screen }){
const image = require('../../assets/cloud.jpg');

return(
<ImageBackground source={image} style={styles.image}/>

)};

const styles = StyleSheet.create({
image:{
    height: '100%',
    width: '100%',
    flex: 1, 
    justifyContent: 'center', 
    resizeMode: 'cover',
}

})