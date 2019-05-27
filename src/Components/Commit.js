import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import * as myConst from '../Constants'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Commit = ({data}) => {
  const formattedDate = data.commit.committer.date.replace(/T|Z/g,' ')
  const message = data.commit.message.length < 200 ? data.commit.message : data.commit.message.slice(0,200) + ' ...'
  return(
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col sm={2}>
            <img src={data.committer ? data.committer.avatar_url : myConst.FALLBACK_IMAGE_URL} rounded />
          </Col>
          <Col>
            <a  href={data.html_url} target='_BLANK'> {message} </a> <br />
            <span> {data.commit.committer.name} on {formattedDate} </span>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Commit;
