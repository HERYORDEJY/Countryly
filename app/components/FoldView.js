import React, { Component } from 'react';
import { View } from 'native-base';
import _Text from './Text';
import FoldView from 'react-native-foldview';

const Frontface = (props) => (
  <View style={{ flex: 1, backgroundColor: 'orange' }}>
    <_Text>This is the front face</_Text>
  </View>
);
const Backface = (props) => (
  <View style={{ flex: 1, backgroundColor: 'orange' }}>
    <_Text>This is the back face</_Text>
  </View>
);
const Base = (props) => (
  <View style={{ flex: 1, backgroundColor: 'orange' }}>
    <_Text>This is the base face</_Text>
  </View>
);

export default class _FoldView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
    };
  }

  componentWillMount() {
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  renderFrontface() {
    return <Frontface />;
  }

  renderBackface() {
    /**
     * You can nest <FoldView>s here to achieve the folding effect shown in the GIF above.
     * A reference implementation can be found in examples/Simple.
     */
    return <Backface />;
  }

  render() {
    return (
      <FoldView
        expanded={this.state.expanded}
        renderBackface={this.renderBackface}
        renderFrontface={this.renderFrontface}
      >
        <Base />
      </FoldView>
    );
  }
}
