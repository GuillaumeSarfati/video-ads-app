import React from 'react';
import * as UI from './ui';

export default ({ model, index, onChange, value }) => (
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
          <UI.Component.Switch onValueChange={onChange(model)} value={value} />
        </UI.Article.Footer>
      </UI.Article>
)
