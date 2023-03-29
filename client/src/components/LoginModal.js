import React from 'react';
import { Modal, Tab, Nav } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';



const LoginModal = ({ showModal, setShowModal }) => {

    return (
        <Modal
           size='lg'
           show={showModal}
           onHide={() => setShowModal(false)}
           aria-labelledby='signup-modal'
        >

        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
               <Modal.Title id='signup-modal'>
                    <Nav variant='pills'>
                        <Nav.Item>
                            <Nav.Link eventKey='login'>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                        </Nav.Item>
                     </Nav>
                </Modal.Title>
            </Modal.Header>
            
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    );
  };
  
  export default LoginModal;
