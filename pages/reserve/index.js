import Navbar from '../../components/navbar/navbar'
import { makeStyles } from '@material-ui/core'
import Reserve from '../../components/reserve/reserve'

const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }
})

export default function ReservePage() {
  const classes = useStyles()

  return (
    <div>
      <div align='center'>
        <Navbar/>
        <Reserve/>
      </div>
    </div>
  )
}
