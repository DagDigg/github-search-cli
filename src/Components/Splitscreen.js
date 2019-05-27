import React from 'react';
import Form from 'react-bootstrap/Form'

const Splitscreen = ({left, right, branches, onClick}) => {
    let commitOptions = branches.map((branch,idx) => {
        return(
            <option key={idx} value={branch.commit.sha}> {branch.name} </option>
        )
    })
    return (
      <div>
        {/* SELECT FORM */}
        <div className='branchSelect'>
        {
          branches.length ?
          <Form.Group>
            <Form.Label>Select branch:</Form.Label>
              <Form.Control as='select' onChange={onClick}>
                  {commitOptions}
              </Form.Control>    
          </Form.Group>
          :
          <Form.Group style={{display: 'hidden'}}>
            <Form.Label>Select branch:</Form.Label>
              <Form.Control as='select' onChange={onClick}>
                  {commitOptions}
              </Form.Control>    
          </Form.Group>
        }
        </div>

        <div className='splitScreen'>
          {/* REPOSITORIES */}
          <div className='repoLeft'>
              {left}
          </div>
          {/* COMMITS */}
          <div className='commitRight'>
              {right}
          </div>
        </div>
      </div>

    )
}

export default Splitscreen;