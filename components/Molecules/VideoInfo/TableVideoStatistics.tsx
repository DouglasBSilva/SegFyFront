import * as React from 'react';
import { ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { FaEye, FaRegThumbsDown, FaRegThumbsUp, FaRegStar, FaRegComment } from 'react-icons/fa';
import formatStatistics from '../../../utils/formatStatistics';

export interface IBarStatisticsProps {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
}

export function BarStatistics (props: IBarStatisticsProps) {

    const {
        viewCount, 
        likeCount, 
        dislikeCount, 
        favoriteCount, 
        commentCount
    } = props;

  return (
     <Row >
        <Col>
            <Row>
                <Col className="text-info">
                    <FaEye/>
                    <Badge variant="danger">{formatStatistics(viewCount)}</Badge>
                </Col>
                <Col>
                    <FaRegThumbsUp color="danger"/>
                    <Badge variant="danger">{formatStatistics(likeCount)}</Badge>
                </Col>
                <Col>
                    <FaRegThumbsDown color="danger"/>
                    <Badge variant="danger">{formatStatistics(dislikeCount)}</Badge>
                </Col>
                <Col>
                    <FaRegStar color="danger"/>
                    <Badge variant="danger">{formatStatistics(favoriteCount)}</Badge>
                </Col>
                <Col>
                    <FaRegComment color="danger"/>
                    <Badge variant="danger">{formatStatistics(commentCount)}</Badge>
                </Col>
            </Row>
        </Col>    
    </Row>  
  );
}
