import Button  from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import FormControl  from 'react-bootstrap/FormControl';
import {Col, Row, Form, Pagination} from 'react-bootstrap';
import { Component } from 'react';
import VideoService from '../services/video.service';
import CardVideo, { ICardVideoProps } from '../components/Molecules/CardVideo';

interface IFormSearch{
  term: string;
  videos: ICardVideoProps[];
  listInfo: IListInfo;
  firstPageToken: string;
  lastTermSent: string;
}
interface IListInfo{
  resultsPerPage: number;
  totalResults: number;
  prevPageToken: string;
  nextPageToken: string;
 
}

export default class Index extends Component<{},IFormSearch>{
  constructor(props) {
    super(props);
    this.state = {term: '', videos: [], listInfo: null, firstPageToken: null, lastTermSent: ''};

    
  }
  handleChange = (event) => {
    this.setState({term: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    VideoService.get(this.state.term).then(
      response => {
        
        this.setState({videos: response.data.results, listInfo: response.data.info, firstPageToken: null, lastTermSent: this.state.term});
      }
    )
  }

  paginate(term, pageToken){
    VideoService.get(term, pageToken).then(
      response => {
        let firstPageToken = this.state.firstPageToken || response.data.info.prevPageToken; 
        this.setState({videos: response.data.results, listInfo: response.data.info, firstPageToken: firstPageToken});
      }
    )
  }

  handleNextPage = (event) => {
    this.paginate(this.state.lastTermSent, this.state.listInfo.nextPageToken);
  }
  
  handlePreviousPage = (event) => {
    this.paginate(this.state.lastTermSent, this.state.listInfo.prevPageToken);
  }

  handleFirstPage = (event) => {
    this.paginate(this.state.lastTermSent, this.state.firstPageToken);
  }

 

  render(){
    const {videos, listInfo, firstPageToken} = this.state;
    console.log(listInfo);
    return (
      <>
        <Row className="justify-content-center">
          <Col xs={6}>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl onInput={this.handleChange} aria-describedby="basic-addon1" />
                <InputGroup.Append>
                  <Button type="submit" variant="danger">Buscar</Button>
                </InputGroup.Append>
            </InputGroup>
          </Form>
          </Col>
        </Row>
      {listInfo && 
        <Row className="justify-content-center">
            <Pagination>
              <Pagination.First onClick={this.handleFirstPage} disabled={!listInfo || firstPageToken === null || listInfo.prevPageToken === null}/>
              <Pagination.Prev onClick={this.handlePreviousPage} disabled={!listInfo || listInfo.prevPageToken === null}/>
              <Pagination.Next onClick={this.handleNextPage} disabled={!listInfo || listInfo.nextPageToken === null}/>
            </Pagination>
          
        </Row>
        }
        <Row className="justify-content-center">
          {videos && 
          videos.map((video, key) => {
            return (<Col className="m-3" key={key} md={3} xs={5}>
              <CardVideo  {...video}/>
            </Col>)
          })
          
          }
        </Row>
        {listInfo && 
        <Row className="justify-content-center">
            <Pagination>
              <Pagination.First onClick={this.handleFirstPage} disabled={!listInfo || firstPageToken === null || listInfo.prevPageToken === null}/>
              <Pagination.Prev onClick={this.handlePreviousPage} disabled={!listInfo || listInfo.prevPageToken === null}/>
              <Pagination.Next onClick={this.handleNextPage} disabled={!listInfo || listInfo.nextPageToken === null}/>
            </Pagination>
          
        </Row>
        }
        
      </>

      );
    }
  }