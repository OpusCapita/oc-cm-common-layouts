import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';
// Application
import { Card, Column, InputColumn, InputRow, Masonry, Row } from '../src/content/';
import * as Header from '../src/header';
import * as Primitive from '../src/primitives';
import StoryContainer from './story-container.component';
import './scss/app.component.scss';


const stories = storiesOf('@opuscapita/oc-cm-common-layouts', module);

stories.add('Content: InputRow', () => {
  const knobs = {
    label: text('Label', 'Demo label'),
    error: text('Error', 'Some error'),
    showError: boolean('Show error', true),
    labelWidth: text('Label width', undefined),
    valueWidth: text('Value width', undefined),
    required: boolean('Required', true),
    append: text('Append', undefined),
  };

  return (
    <StoryContainer>
      <InputRow {...knobs} id="demo-row">
        <Primitive.Input />
      </InputRow>
    </StoryContainer>
  );
});

stories.add('Content: InputColumn', () => {
  const knobs = {
    label: text('Label', 'Demo label'),
    error: text('Error', 'Some error'),
    showError: boolean('Show error', true),
    labelWidth: text('Label width', undefined),
    valueWidth: text('Value width', undefined),
    required: boolean('Required', true),
    append: text('Append', undefined),
  };

  /* eslint-disable no-alert */

  return (
    <StoryContainer>
      <InputColumn {...knobs} id="demo-row">
        <Primitive.Input />
      </InputColumn>
    </StoryContainer>
  );
});

stories.add('Content: Card', () => {
  const knobs = {
    title: text('title', 'Demo title'),
    icon: <FaCog />,
    onIconClick: () => alert('This is "onIconClick"'),
    isExpandable: boolean('isExpandable', false),
    isExpanded: boolean('isExpanded', false),
    loading: boolean('Loading', false),
  };

  return (
    <StoryContainer block={false}>
      <Row>
        <Column>
          <Card {...knobs}>
            <p>Card content</p>
          </Card>
        </Column>
      </Row>
    </StoryContainer>
  );
});

stories.add('Content: Row/Column', () => {
  const col1Knobs = {
    grow: number('Grow column #1', '2'),
  };

  const col2Knobs = {
    grow: number('Grow column #2', '1'),
  };

  const col3Knobs = {
    grow: number('Grow column #3', '1'),
  };

  return (
    <StoryContainer block={false}>
      <Row>
        <Column {...col1Knobs}>
          <Card id="card-1" title="Card 1">
            <p>Card #1 content</p>
          </Card>
        </Column>
        <Column {...col2Knobs}>
          <Card id="card-2" title="Card 2">
            <p>Card #2 content</p>
          </Card>
        </Column>
        <Column {...col3Knobs}>
          <Card id="card-3" title="Card 3">
            <p>Card #3 content</p>
          </Card>
          <Card id="card-4" title="Card 4">
            <p>Card #4 content</p>
          </Card>
        </Column>
      </Row>
    </StoryContainer>
  );
});

const cards = [];
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel pulvinar enim. Quisque sed rutrum lacus. Etiam congue ullamcorper sapien quis eleifend. Nulla tempus dui sed augue sodales vestibulum. Maecenas feugiat velit non consequat volutpat. Mauris pulvinar, augue in vestibulum malesuada, purus nisl aliquet tortor, id vestibulum mauris arcu eget urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc non fringilla magna. Cras id nunc non sapien pellentesque ullamcorper. Nullam volutpat convallis ex, quis vestibulum odio porttitor posuere.';
for (let i = 1; i < 11; i += 1) {
  cards.push({
    id: `card-${i}`,
    title: `Card ${i} title`,
    content: `Card ${i}: ${lorem}`,
  });
}

stories.add('Content: Masonry', () => {
  const knobs = {
    columnCountExtraLarge: number('XL Column count', 4),
    columnCountLarge: number('Large column count', 3),
    columnCountMedium: number('Medium column count', 2),
    columnCountSmall: number('Small column count', 1),
  };
  return (
    <StoryContainer block={false}>
      <Masonry {...knobs}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
          >{card.content}
          </Card>
        ))}
      </Masonry>
    </StoryContainer>
  );
});

/**
 * HEADERS
 */
stories.add('Header: Basic', () => {
  const knobs = {
    left: text('Left side content', 'This can be either node or string'),
    center: text('Center content', 'Demo text'),
    right: text('Right content', 'Demo text'),
    sideSectionBasis: text('Side section basis', '200px'),
  };
  return (
    <StoryContainer block={false}>
      <Header.Basic {...knobs} />
    </StoryContainer>
  );
});


/**
 * PRIMITIVES
 */

const PrimitiveRow = styled.section`
  display: flex;
  align-items: center;
  min-height: 6rem;
  border-top: 1px solid #ddd;
`;

const PrimitiveLabel = styled.h5`
  margin: 0; 
  width: 33%;
  min-width: 33%;
`;

stories.add('Primitives', () => {
  const knobs = {
    primary: boolean('Primary button', false),
    disabled: boolean('Disabled button', false),
    titleText: text('Title text', 'Default title text'),
    subtitleText: text('Subtitle text', 'Default suttitle text'),
  };

  const primitives = [{
    label: 'Block',
    getter: () => (<span>A simple container with default padding and white background</span>),
  }, {
    label: 'BorderlessButton',
    getter: () => (
      <Primitive.BorderlessButton onClick={() => alert('BorderlessButton with Cog icon as a child')}>
        <FaCog />
      </Primitive.BorderlessButton>
    ),
  }, {
    label: 'Button',
    getter: () => (
      <Primitive.Button
        onClick={() => alert('Testing: 1, 2, 3..')}
        primary={knobs.primary}
        disabled={knobs.disabled}
      >
        Test button
      </Primitive.Button>
    ),
  }, {
    label: 'Header',
    getter: () => (<span>Blank header bar with default padding and height</span>),
  }, {
    label: 'Input',
    getter: () => (<Primitive.Input />),
  }, {
    label: 'Spinner',
    getter: () => (<Primitive.Spinner />),
  }, {
    label: 'Subtitle',
    getter: () => (<Primitive.Subtitle>{knobs.subtitleText}</Primitive.Subtitle>),
  }, {
    label: 'Title',
    getter: () => (<Primitive.Title>{knobs.titleText}</Primitive.Title>),
  }];

  return (
    <StoryContainer>
      <Primitive.Title>Primitives</Primitive.Title>
      <br />
      {primitives.map(primitive => (
        <PrimitiveRow>
          <PrimitiveLabel>{primitive.label}</PrimitiveLabel>
          {primitive.getter()}
        </PrimitiveRow>
      ))}
    </StoryContainer>
  );
});
