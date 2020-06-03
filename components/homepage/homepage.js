import React from 'react'
import StorageCardContainer from './storagecardcontainer/storagecardcontainer'
import Jumbotron from './jumbotron/jumbotron'

export default function Homepage(props) {
    return (
        <div>
            <Jumbotron/>
            <h1>Available Storage In Your Area</h1>
            <StorageCardContainer/>
        </div>
    )
}
