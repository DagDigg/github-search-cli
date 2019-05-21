import React from 'react';

const Splitscreen = ({left, right, branches, onClick}) => {
    let commitOptions = branches.map((branch,idx) => {
        return(
            <option key={idx} value={branch.commit.sha}> {branch.name} </option>
        )
    })
    return (
        <div className='splitScreen'>
            <div className='repoLeft'>
                {left}
            </div>
            <div className='commitRight'>
            {/* SELECT FORM */}
            {
                branches.length ?
                <select onChange={onClick}>
                    {commitOptions}
                </select> : null
            }
            {/* COMMITS */}
                {right}
            </div>
        </div>
    )
}

export default Splitscreen;