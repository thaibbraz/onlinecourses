import React, {Component} from 'react';
import logo from '../images/profile.png';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
render(){
    return(
        <div>
        <Grid className="home-grid">
          <Cell col={6}>
            <h2 style={{color: 'darkblue',fontSize: '60px', paddingTop: '2em'}}>Cursos Online</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell>
          <Cell col={6}>
           
            <img
              src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/Ativo-11.png"
              alt="avatar"
              style={{height: '430px'}}
               />

          </Cell>
        </Grid>
      </div>
       
        )
    }
 }
export default Landing;
