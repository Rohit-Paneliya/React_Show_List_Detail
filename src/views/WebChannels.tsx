import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slice/ShowListApiSlicer';
import { Col, Container, Row } from 'react-bootstrap';
import MaterialShowCard from '../components/MaterialShowCard';
import { AppDispatch } from '..';

export const useAppDispatch: () => AppDispatch = useDispatch;

const WebChannels = () => {

  const state = useSelector((state:any) => state.listOfShows)

  const dispatcher = useAppDispatch()

  useEffect(() => {
    if(state.listOfShows.length === 0) { // if list is empty then only call the api otherwise don't..
      dispatcher(fetchData())
    }    
  }, [dispatcher])

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
    <Container fluid="md" style={{ marginTop: '2rem', marginLeft: '2.2rem' }}>
      <Col sm={11}>
        <Row >
          {finalData()}
        </Row>
      </Col>      
    </Container>
  );
}

export default WebChannels
