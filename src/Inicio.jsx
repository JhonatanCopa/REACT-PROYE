import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Carousel, UncontrolledCarousel, CardGroup, CardImg, Card, CardBody, CardSubtitle, CardTitle, CardText,CardImgOverlay, Button} from "reactstrap";
import './App.css';
import { useState } from 'react';
{/*JHONATAN MAGDIEL COPA HUAYTA E-11602939 PAR "C"*/}
function Inicio(prop, altTextt){
    const[activeTab,setActiveTab] = useState("1");

    const cambiarTab = (numeroTab) =>{
    if(activeTab !== numeroTab){
      setActiveTab(numeroTab);
    }
  }
    return (
        <div className="App">
          <div className='titulo'><h1>FARMACIAS UMSA</h1>
            <div className='logo'><img src='logo2.jpg'width={150} height={200} /></div>
        </div>
          
        <Nav tabs>
         <NavItem>
           <NavLink 
           className={(activeTab=="1" ? "activeTab baseTab" : "baseTab" )}
           onClick={()=>cambiarTab("1")}>
             Inicio
           </NavLink>
         </NavItem>

         <NavItem>
           <NavLink 
              className={(activeTab=="2" ? "activeTab baseTab" : "baseTab" )}
           onClick={()=>cambiarTab("2")}>
             Tienda
           </NavLink>
         </NavItem>

         <NavItem>
           <NavLink 
              className={(activeTab=="3" ? "activeTab baseTab" : "baseTab" )}
           onClick={()=>cambiarTab("3")}>
            Nosotros
           </NavLink>
         </NavItem>

         <NavItem>
           <NavLink 
              className={(activeTab=="4" ? "activeTab baseTab" : "baseTab" )}
           onClick={()=>cambiarTab("4")}>
            Sucursales
           </NavLink>
         </NavItem>

       </Nav>

       {/*BODY*/}
      {/*inicio*/}
       <TabContent activeTab={activeTab}>
         <TabPane tabId="1">
           <div className='container'>
             <br />
             <div className='App'><p>BIENVENID@! FARMACIAS UMSA SIEMPRE EN PENSANDO EN TI</p></div>
             <UncontrolledCarousel
              items={[
                {
                  altText: '{prop.campa}',
                  caption: '{prop.campa}',
                  key: 1,
                  src: '{prop.imgcampa}'
                },
                 {
                   altTextt: '',
                   caption: 'LOS MEJORES DOCTORES',
                    key: 2,
                    src: 'https://www.lavanguardia.com/files/image_948_465/uploads/2018/09/27/5fa450ae28251.png'
                 },
                 {
                   altText: 'SUPER DESCUENTOS SOLO EN FARMACIAS UMSA',
                   caption: 'SUPER DESCUENTOS SOLO EN FARMACIAS UMSA',
                   key: 3,
                   src: 'https://www.salud.mapfre.es/media/2024/01/medicamentos-genericos.jpg'
                 }
               ]}
              />
           </div>

         </TabPane>

          {/*tienda*/}      
         <TabPane tabId="2">
           <div className='container'>
            <br />

              
            <CardGroup>

              <Card>
                <CardImg
                  alt="Card image cap"
                 src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                   tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              <Card>
               <CardImg
                 alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
               <CardBody>
                  <CardTitle tag="h5">
                   Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                 </CardBody>
                </Card>
               <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                   Card title
                 </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                 </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              
            </CardGroup>
            <br />
            <CardGroup>

              <Card>
                <CardImg
                  alt="Card image cap"
                 src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                   tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              <Card>
               <CardImg
                 alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
               <CardBody>
                  <CardTitle tag="h5">
                   Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                 </CardBody>
                </Card>
               <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                   Card title
                 </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                 </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              
            </CardGroup>
              
           </div>

         </TabPane>



          {/*nosotros*/}
          {/*nosotros*/}
         <TabPane tabId="3">
           <div className='container'>
             <br />

             <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
  
</div>
<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
             
           </div>        
         </TabPane>



         {/*sucursales*/}
         {/*sucursales*/}
         <TabPane tabId="4">
           <div className='container'>
             <br />
             <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  
</CardGroup>
<div>
  <Button
    color="primary"
    outline
  >
    primary
  </Button>
  {' '}
  <Button outline>
    secondary
  </Button>
  {' '}
  <Button
    color="success"
    outline
  >
    success
  </Button>
  {' '}
  <Button
    color="info"
    outline
  >
    info
  </Button>
  {' '}
  <Button
    color="warning"
    outline
  >
    warning
  </Button>
  {' '}
  <Button
    color="danger"
    outline
  >
    danger
  </Button>
</div>
           </div>

         </TabPane>

       </TabContent>
       <br />
       <footer><p>INF-122 PAR:"C" JHONATAN MAGDIEL COPA HUAYTA CI:E-11602939 </p></footer>
    </div>     
    );
}{/*JHONATAN MAGDIEL COPA HUAYTA E-11602939 PAR "C"*/}
export default Inicio;
