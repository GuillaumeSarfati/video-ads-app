import React from "react";
import * as UI from './ui';

export default class Search extends React.Component {
  state = {
    query: ""
  };

  onChangeText = (query) => {
    const { onSearch } = this.props;
    this.setState({ query }, () => onSearch(query));
  };

  render() {
    const { query } = this.state;
    const { onChangeText } = this;
    const { onPressFilter } = this.props;

    return (
      <UI.Component.Shadow style={{alignSelf: 'stretch'}}>
      <UI.Search>
        <UI.Icon name="ios-search" size={26} color="#B2C0D5" />
        <UI.TextInput
          style={{flex: 1, paddingLeft: 15}}
          placeholder="Trouver un service video ..."
          onChangeText={onChangeText}
          value={query}
        />
        <UI.Component.TouchableOpacity onPress={onPressFilter}>
          <UI.Icon name="ios-options" size={20} color="#B2C0D5" />
        </UI.Component.TouchableOpacity>
      </UI.Search>
      <UI.Component.Shadow style={{alignSelf: 'stretch'}}>
      <UI.Component.Row style={{backgroundColor: 'white', borderRadius: 8, height: 200, top: 15, width: '100%'}}>
      <UI.List>
      <UI.List.Item onPress={() => onChangeText('Langues - English')}>
      <UI.List.Item.Title>Langues - English</UI.List.Item.Title>
      </UI.List.Item>
      <UI.List.Item onPress={() => onChangeText('Langues - Spanish')}>
      <UI.List.Item.Title>Langues - Spanish</UI.List.Item.Title>
      </UI.List.Item>
      </UI.List>
      </UI.Component.Row>
      </UI.Component.Shadow>
      </UI.Component.Shadow>
    );
  }
}
