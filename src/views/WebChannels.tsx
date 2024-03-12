import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slice/ShowListApiSlicer';
import { Col, Container, Row } from 'react-bootstrap';
import MaterialShowCard from '../components/MaterialShowCard';
import { AppDispatch } from '..';
import ThemeTypeContext, { ThemeType } from '../utils/ContextProviderThemes';

export const useAppDispatch: () => AppDispatch = useDispatch;

const WebChannels = () => {

  const state = useSelector((state:any) => state.listOfShows)
  const {themeType} = useContext(ThemeTypeContext)

  const dispatcher = useAppDispatch()

  useEffect(() => {
    if(state.listOfShows.length === 0) { // if list is empty then only call the api otherwise don't..
      dispatcher(fetchData())
    }    
  }, [dispatcher])

  useEffect(() => {
    if(themeType === ThemeType.LIGHT) {
        document.getElementById('show-list')!!.className = "card-list"
    } else {
        document.getElementById('show-list')!!.className = "card-list-dark"
    }
}, [themeType])

  const finalData = () => {
    if (state.isLoading) {
      return <h3>Loading.....</h3>      
    } else if (state.isError) {
      return <h3>Error.....</h3>
    } else {
      return state.listOfShows.slice(0,25).map((show: any) => {
        const cardWithColumns = (                  
          <Col style={{ marginBottom: '1rem' }}>{MaterialShowCard({ cardData: show })}</Col>          
        )
        return cardWithColumns
      })
    }
  }

  return (
    <div className='card-list' id='show-list'>    
    <Container fluid="md" style={{ paddingTop: '2rem', marginLeft: '2.2rem' }}>
      <Col sm={11}>
        <Row >
          {finalData()}
        </Row>
      </Col>      
    </Container>
    </div>
  );
}

export default WebChannels
