import React, {Component} from 'react';
import { Grid, Cell, DataTable,TableHeader, ListItem, ListItemContent } from 'react-mdl';
import ReactPlayer from "react-player"

class Modulo extends Component{
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Curso nome</h2>
                <img
                  src="https://image.flaticon.com/icons/svg/3306/3306587.svg"
                  alt="avatar"
                  style={{height: '250px'}}
                   /> 
                 <p style={{ width: '65%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
    
              </Cell>
              <Cell col={6}>
                    
                <DataTable style={{width: '550px'}} shadow={0} rows={[
                      {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                      {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                      {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                      {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                      {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                      {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                      {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                      {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                      {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
                      
                  ]}>
                  <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                  <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                  <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
              </DataTable>
              
              </Cell>
            </Grid>
          </div>
        )
      }
    }
export default Modulo;
