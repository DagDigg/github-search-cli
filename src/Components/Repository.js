import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const Repository = ( {data, onClick, currentRepoUrl} ) => {
  return (
  <ListGroup>
    <ListGroup.Item action onClick={() => onClick(data.url)} active={data.url === currentRepoUrl}>
      <h5> {data.name} </h5>
      <p> {data.description} </p>
    </ListGroup.Item>             
  </ListGroup>
  );
}

export default Repository;