import React from 'react'
import StorageCardContainer from './storagecardcontainer/storagecardcontainer'


export default function Homepage(props) {
    return (
        <div>
            <h1>Available Storage In Your Area</h1>
            <StorageCardContainer/>
        </div>
    )
}
