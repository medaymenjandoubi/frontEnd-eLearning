import React from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const { Footer } = Layout;

const iconStyle = {
  marginRight: '10px', // Add margin between icons
};

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', marginTop: '150px' }} className="dark-theme-hover">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-md-7">
            <h4>RapydLearn</h4>
            <p style={{ marginTop: '50px', marginBottom: '0px' }}>
              Notre plateforme permet à tous les instructeurs de créer et de vendre leurs formations en ligne.
              Mettre en avant leur expertise, fixez leurs prix, et atteindre un public mondial. Nous gérons les paiements, la TVA, et offrons une visibilité marketing. RapydLearn est la plateforme où chacun trouve sa place. C'est l'endroit où experts et débutants se rassemblent pour partager leurs connaissances, échanger des expériences, et apprendre les uns des autres. Rejoignez-nous aujourd'hui pour faire partie de cette communauté d'apprentissage collaborative
            </p>
          </div>
          <div className="col-md-5">
            <h4 style={{ marginLeft: '30px' }}>Contact Information</h4>
            <p style={{ fontSize: '22px', marginLeft: '50px' }}>Email: contact@rapydlearn.fr</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '50px' }}>Phone: 00 33 3 74 73 80 80</p>
            <div>
              <FontAwesomeIcon icon={faCcVisa} size="5x" style={iconStyle} />
              <FontAwesomeIcon icon={faCcMastercard} size="5x" style={iconStyle} />
              <FontAwesomeIcon icon={faCcPaypal} size="5x" style={iconStyle} /> 
              <FontAwesomeIcon icon={faCcAmex} size="5x" style={iconStyle} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} RapydLearn SIRET N°94908812400019. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
