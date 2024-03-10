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
    dispatcher(fetchData())
  }, [dispatcher])

  const finalData = () => {
    if (state.isLoading) {
      return <h3>Loading.....</h3>      
    } else if (state.isError) {
      return <h3>Error.....</h3>
    } else {
      return state.listOfShows.slice(0,10).map((show: any) => {
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
