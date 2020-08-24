import React from 'react';
import './App.css';
import {Switch, Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main'
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header  className="header-color" title="Cursos online" scroll>
            <Navigation>
                <Link to="/">Página Principal</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/cursos">Cursos</Link>
                <Link to="/login">Login</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Página Principal</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/cursos">Cursos</Link>
                <Link to="/login">Login</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
