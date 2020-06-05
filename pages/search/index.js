import Navbar from '../../components/navbar/navbar'
import { makeStyles } from '@material-ui/core'
import { withRouter } from 'next/router'
import SearchResults from '../../components/searchresults/searchresults'
const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }
})

function SearchResultsPage({ router }) {
  const classes = useStyles()

  return (
    <div>
      <div align='center'>
        <Navbar/>
        <SearchResults
            storageType={router.query.storageType}
            amount={router.query.amount}
            />
      </div>
    </div>
  )
}

export default withRouter(SearchResultsPage)