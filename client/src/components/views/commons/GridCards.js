import React from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';

function GridCards(props) {
    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '100%', height: '400px' }} alt={props.movieName} src={props.image} />
                    </a>
                </div>
            </Col>
        )
    }
    else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '400px' }} alt={props.characterName} src={props.image} />

                </div>
            </Col>
        )
    }



}

export default GridCards