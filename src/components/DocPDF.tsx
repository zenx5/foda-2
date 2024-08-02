import React from 'react';
import Card from './Card';
import { Text, Document, Page, View, PDFViewer } from '@react-pdf/renderer';

interface DocPDFProps {
  items: FODATypes;
  title: string;
}

export default function DocPDF( { items, title }:DocPDFProps ) {

  return (<PDFViewer>
    <Document>
      <Page size="A4" style={{display:'flex', alignItems:'center', gap:'20px', marginTop:'20px',}}>
        <Text>{ title }</Text>
        <View style={{display:'flex', flexDirection:'row', gap:'10px', width:'80%'} }>
          <Card title='Amenazas' items={items?.threats} styleTitle={{backgroundColor:'#e11d48', paddingHorizontal:'5px', paddingVertical:'3px'}}/>
          <Card title='Fortalezas' items={items?.strengths} styleTitle={{backgroundColor:'#059669', paddingHorizontal:'5px', paddingVertical:'3px'}}/>        
        </View>
        <View style={{display:'flex', flexDirection:'row', gap:'10px', width:'80%'}}>
          <Card title='Debilidades' items={items?.weaknesses} styleTitle={{backgroundColor:'#ca8a04', paddingHorizontal:'5px', paddingVertical:'3px'}}/>
          <Card title='Oportunidades' items={items?.opportunities} styleTitle={{backgroundColor:'#0891b2', paddingHorizontal:'5px', paddingVertical:'3px'}}/> 
        </View>
      </Page>
    </Document>
  </PDFViewer>
)}