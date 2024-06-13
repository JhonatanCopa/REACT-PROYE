import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  
  return <div>
    
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
</div>;
};