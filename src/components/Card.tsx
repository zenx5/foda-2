import { Text, View} from '@react-pdf/renderer'

const Card = ( { title, items, styleTitle } ) => {
  return (
    <View style={{width:'50%', border:'3px solid black', backgroundColor:'#e2e8f0' }}>
        <Text style={styleTitle}>{title}</Text>
        <View style={{paddingHorizontal:'5px', paddingVertical:'3px', fontSize:'15px'}}>
            {
                items && items.map( (item, index)=><Text key={index} >-{item}</Text>)
            }           
        </View>
    </View>
  )
}

export default Card