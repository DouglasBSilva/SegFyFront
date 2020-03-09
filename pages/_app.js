/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';

import App from 'next/app';
import Container from 'react-bootstrap/Container';

export default class MyApp extends App {
  
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
      <Container>
        <Component {...pageProps} />
      </Container>
      
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </>
    );
  
  }
}
