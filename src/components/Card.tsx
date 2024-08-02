import { Text, View} from '@react-pdf/renderer'

interface CardProps {
    title: string;
    items: string[];
    styleTitle: any;
}

export default function Card ( { title, items, styleTitle }:CardProps ) {
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