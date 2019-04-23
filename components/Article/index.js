import React from 'react';
import * as UI from './ui';

export default ({ model, index, onPress }) => (
      <UI.Article>
        <UI.Article.Header>
          <UI.Article.Header.Title>
            { model.title }
          </UI.Article.Header.Title>
        </UI.Article.Header>
        <UI.Article.Content>
          <UI.Article.Content.Description>
            { model.description }
          </UI.Article.Content.Description>
        </UI.Article.Content>
        <UI.Article.Footer>
          <UI.Button type="default" onPress={onPress}>
            Obtenir pour {model.price / 100} {model.currency}
          </UI.Button>
        </UI.Article.Footer>
      </UI.Article>
)
