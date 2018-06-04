import React, { Component } from 'react';
import {
  Panel,
  Col,
  Row,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const {
      getTownApi, capital, flagImage, params : { capitalcity }
    } = this.props;

    return (
      <div>      
        <Row>   
        <Row>
          <Col style={{ marginLeft: 120, marginTop: 50 }} xs={4} md={4} lg={4}>
            <Panel bsStyle="primary">
              <Panel.Heading>Tes Stockbit</Panel.Heading>
              <Panel.Body>
              Silahkan klik 3 link dibawah ini :

                <ul style={{ marginTop: 10 }}>
                  <li>                 
                  <NavLink to="/countryof/jakarta">Negara dengan ibu kota Jakarta</NavLink>
                  </li>
                  <li>
                  <NavLink to="/countryof/tokyo">Negara dengan ibu kota Tokyo</NavLink>                 
                  </li>
                  <li>
                  <NavLink to="/countryof/bangkok">Negara dengan ibu kota Bangkok</NavLink>                
                  </li>

                </ul>
              </Panel.Body>
            </Panel>
          </Col>

            <Col style={{ marginLeft: 40, marginTop: 50 }} xs={5} md={5} lg={5}>
            <Panel bsStyle="primary"> 
            <Panel.Heading>Info Negara</Panel.Heading>
              <Panel.Body style={{ padding: 30 }}>
                {capitalcity && flagImage ? (
                  <div>
                  <p>  Berikut adalah informasi detail tentang negara {capital}</p>

                <img src={flagImage} width={300} height={200} />
               </div>

                ): (
                  "Silahkan pilih ibu kota negara disebelah kiri."

                )}      
            </Panel.Body>
             </Panel>
          </Col>
        </Row>         
        </Row>
      </div>
    );
  }
}

export default Dashboard;
