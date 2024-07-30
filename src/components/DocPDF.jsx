import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import Card from './Card';


const DocPDF = ( { items, name } ) => {
  // const { name } = useContext(pdfContext);
  
  return (
  <Document>
    <Page size="A4" style={{display:'flex', alignItems:'center', gap:'20px', marginTop:'20px',}}>
      {/* <Text>{name}</Text> */}
      <View style={{display:'flex', flexDirection:'row', gap:'10px', width:'80%'} }>
        <Card title='Amenazas' items={items?.Amenazas} styleTitle={{backgroundColor:'#e11d48', paddingHorizontal:'5px', paddingVertical:'3px'}}/>
        <Card title='Fortalezas' items={items?.Fortalezas} styleTitle={{backgroundColor:'#059669', paddingHorizontal:'5px', paddingVertical:'3px'}}/>        
      </View>
      <View style={{display:'flex', flexDirection:'row', gap:'10px', width:'80%'}}>
        <Card title='Debilidades' items={items?.Debilidades} styleTitle={{backgroundColor:'#ca8a04', paddingHorizontal:'5px', paddingVertical:'3px'}}/>
        <Card title='Oportunidades' items={items?.Oportunidades} styleTitle={{backgroundColor:'#0891b2', paddingHorizontal:'5px', paddingVertical:'3px'}}/> 
      </View>            
    </Page>
  </Document>
)}

export default DocPDF;