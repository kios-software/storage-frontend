import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { Grid, TextField, Select, MenuItem, makeStyles, Button } from '@material-ui/core'
import isEmpty from 'lodash.isempty'

const useStyles = makeStyles({
    selectBox: {
        width: '100px'
    },
    amountBox: {
        width: '100px'
    }
})

function Search(props) {
    const classes = useStyles()
    const router = useRouter()

    const [storageType, setStorageType] = useState('')
    const [amount, setAmount] = useState('')
    const [zipCode, setZipCode] = useState("")

    // Not yet implemented 
    const [dateRange, setDateRange] = useState('')
    const [validInput, setValidInput] = useState(false)

    const placeholder = "# of " + storageType + "s"

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(pos => {
            // pos.
        // })
    }, [])

    useEffect(() => {
        if(!isEmpty(storageType) && !isEmpty(amount))
            setValidInput(true)
        else 
            setValidInput(false)
    }, [storageType, amount])

    return (
        <div align="center">
            <Grid
                container
                direction="row"
                spacing={2}
                alignItems="center"
                justify="center"
                >
                <Grid item>
                    <Select
                        placeholder="Select Type"
                        className={classes.selectBox}
                        value={storageType}
                        onChange={(e) => 
                            setStorageType(e.target.value)
                        }>
                        <MenuItem value="Box">
                            Box
                        </MenuItem>
                        <MenuItem value="Vehicle">
                            Vehicle
                        </MenuItem>
                        <MenuItem value="Other">
                            Other
                        </MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <TextField
                        placeholder={placeholder}
                        className={classes.amountBox}
                        value={amount}
                        type="number"
                        onChange={(e) => {
                            if(!isNaN(e.target.value))
                                setAmount(e.target.value)
                        }}/>
                </Grid>
                <Grid item>
                    <TextField
                        type="text"
                        value={zipCode}
                        placeholder="Zipcode to search in "
                        // this isn't enforced yet
                        pattern="[0-9]*"
                        onChange={(e) => setZipCode(e.target.value)}/>
                </Grid>
                <Grid item>
                    {/* <DateRangePicker/> */}
                </Grid>
                <Grid item>
                    <Button
                        disabled={!validInput}
                        onClick={(e) => 
                            router.push({
                                pathname: "/search",
                                query: { 
                                    storageType: storageType,
                                    amount: amount
                                }
                            })
                        }
                        >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Search