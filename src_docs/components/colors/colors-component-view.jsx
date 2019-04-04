import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';
import { darken } from 'polished';
import theme, { colors } from '@opuscapita/oc-cm-theme';

const Content = styled.div`
  background: ${theme.colors.white}
  width: calc(100% - 2rem);
  margin: ${theme.gutterWidth}
  padding: ${theme.gutterWidth}
  display: flex;
  flex-wrap: wrap;
  text-align:center;
`;
const ColorBlock = styled.div`
  background-color: ${props => props.color}
  width: 18%;
  height: 200px;
  margin: 1%;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-items:center;
  justify-content: center;
   color: ${props => darken('0.3', props.color)}
`;

const DescriptionList = styled.ul`
  list-style-type:none;
  margin: 0;
  padding: 0;
`;

const ColorName = styled.h2`
  margin-bottom: 0.5rem;
`;

const ColorHex = styled.p`
  margin-bottom:1.5rem;
  font-style: italic;
`;
export default class ColorsComponentView extends React.PureComponent {
  render() {
    return (
      <PerfectScrollbar>
        <Content>
          {
            Object.keys(colors).map((key) => {
              const color = colors[key];
              if (key === 'descriptions') return null;
              return (
                <ColorBlock color={color} key={key}>
                  <ColorName>{key}</ColorName>
                  <ColorHex>{color}</ColorHex>
                  {!!colors.descriptions[key].length
                  && (
                    <DescriptionList>
                      {colors.descriptions[key].map(description =>
                        <li key={description}>{description}</li>)}
                    </DescriptionList>
                  )}
                </ColorBlock>
              );
            })
          }
        </Content>
      </PerfectScrollbar>
    );
  }
}
