import React, { useState } from 'react'
import { Container, TextField } from '@material-ui/core'

export default function Homesearch() {
    const [location, setLocation] = useState('')
    return (
        <Container>
            <TextField
                label=''
                value={location}
                onChange={e=>setLocation(e.value)}/>
        </Container>
    )
}