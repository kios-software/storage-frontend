import Navbar from '../components/navbar/navbar'
import { makeStyles } from '@material-ui/core'
import Homepage from '../components/homepage/homepage'

const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }
})

export default function Home() {
  const classes = useStyles()

  return (
    <div>
      <div align='center'>
        <Navbar/>
        <Homepage/>
      </div>
    </div>
  )
}
