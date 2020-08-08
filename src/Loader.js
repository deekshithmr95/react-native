import React, {Component} from 'react';
import {Container, Content, Spinner} from 'native-base';

class Loader extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Spinner color="#289EFE" />
        </Content>
      </Container>
    );
  }
}

export default Loader;
