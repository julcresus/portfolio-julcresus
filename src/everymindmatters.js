import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EveryMindMatters() {
  return (
    <div>
      <div className="subheader">
        <h1>
          <a href='/'> &#60; back</a>
        </h1>
      </div>
      <div className='caroussel'>
      <img src='./img/emm.png' width='100%'></img>
      </div>
      <div className='project'>
      
        <p className='project-title'>University Case Study: Playstation Store</p>
        <p className='tags'>UX design, UI Design, Redesign</p>
        <Container>
          <Row>
          
          <Col>
          <p className='description'>
          Within the scope of my studies in Kingston University, the goal was to analyse a desktop system such as a website or an application and redesign it for mobile devices, using UX principles and the CIF (Common Industry Format) for Usability Test Report. I decided to focus on the PlayStation Store, which, in my opinion, has a lack of consistency between all current platforms. I decided to merge the PlayStation Store and the current PlayStation Messages app and make an application of its time.
          </p>
          <br></br>
          <p className='description'>
          <ul>
            <li>Benchmark about the different game platforms (Xbox Store, PlayStation Store Desktop, PS Store Console...)</li>
            <li>Testing on those platforms by making the user try different easy tasks and interview them on their behaviour and opinion</li>
            <li>Surveying a bigger audience made of gamers and non gamers about their use of the gaming platform</li>
            <li>Understanding of all the data gathered and defining the deliverables</li>
            <li>Building user journeys and personas based on the research done before</li>
            <li>Content creation such as messages and games</li>
            <li>Wireframing the app using Axure</li>
            <li>UI Design using Sketch and InVision</li>
            <li>App testing on same users as before</li>
          </ul>
          </p>
          <br></br>
          <p className='description'>
          You can try it using this link: <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank'>https://projects.invisionapp.com/share/UHA1EOIVZ#/screens</a>",
          </p>
          </Col>
        </Row>
        </Container>

    </div>
    </div>
  );
}

export default EveryMindMatters;
