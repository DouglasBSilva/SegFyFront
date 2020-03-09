import * as React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Text, CardDiv } from './CardVideo.style';
import Link from 'next/link';

interface IYoutubeThumbnailsAttr{
    url: string;
    width: number;
    height: number;
}

interface IYoutubeThumbnails{
    default: IYoutubeThumbnailsAttr;
    medium: IYoutubeThumbnailsAttr;
    high: IYoutubeThumbnailsAttr;
}

interface ISnippet{
    thumbnails: IYoutubeThumbnails;
    description: string;
    title: string;
    publishedAt: string;
}

export interface ICardVideoProps {
    snippet: ISnippet;
    id: {videoId: string};
}

const CardVideo: React.FunctionComponent<ICardVideoProps> = ({snippet, id}) => {
    

    return <>
            <a
                href={`/videos?video=${id.videoId}`}
            >
            <CardDiv >
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={snippet.thumbnails.medium.url} />
                    <Card.Body>
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {snippet.title} 
                            </Tooltip>
                        }
                        >
                        <Card.Title     ><Text>{snippet.title}</Text></Card.Title>
                        </OverlayTrigger>
                        {/* <Card.Text>
                            {snippet.description}
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </CardDiv>
            </a>
            </>
};

export default CardVideo;
