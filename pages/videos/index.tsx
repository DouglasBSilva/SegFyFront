import * as React from 'react';
import VideoService from '../../services/video.service';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { BarStatistics } from '../../components/Molecules/VideoInfo/TableVideoStatistics';

class Video extends React.Component<any, {video: any}>{
    static getInitialProps({query}) {
        return {query}
      }
    
    constructor(props){
        super(props);
        this.getVideoData(this.props.query.video);
        this.state = {
            video: null
        }
       
    }
 
    getVideoData = (videoId) => {
        VideoService.find(videoId).then(
            response => {
                this.setState({video: response.data});
            }
        ).catch(
            erroResponse => {
                alert('Erro ao encontrar o vídeo');
            }
        )
    }
    render(){
        const {video} = this.state;
        const {query} = this.props;
        return (<>
        <Row className="justify-content-center  ">
            <Col xs={12}>
            
                <Row className="justify-content-center">
                    <Col xs="12" lg="6">
                        {video && <div >
                            <iframe width="500" height="270" src={"//www.youtube.com/embed/"+ query.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe> 
                            </div>
                        }
                        <Row className="justify-content-center mt-1">
                            <Col xs={12}>
                            {video && 
                                <BarStatistics {...video.statistics}/>                     
                            }
                        </Col>
                        </Row>
                        <Row className="justify-content-center mt-2">
                            <Col xs={12}>
                            {video && <>
                                <h2>{video.snippet.title}</h2>              
                                <p>{video.snippet.description}</p>
                            </>
                            }
                        </Col>
                     </Row>
                    </Col>
                    
                </Row>
            </Col>
        </Row>
            
        </>
        );
    }
}

export default Video;