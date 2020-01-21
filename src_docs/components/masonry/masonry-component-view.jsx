import React from 'react';

// Icons
import { FaTruck, FaTree, FaUmbrella, FaGlobe, FaEye, FaPoll } from 'react-icons/fa';

// App imports
import { Layout, Content } from '../../../src/index';
import launcher from '../demo-items.json';

export default class MasonryComponentView extends React.PureComponent {
  onCardExpand = (id) => {
    const status = id ? 'expanded' : 'not expanded';
    console.log('Card', id, 'is', status); // eslint-disable-line no-console
  };

  getRandomIcon = () => {
    const size = 24;
    const icons = [
      <FaTruck size={size} />,
      <FaUmbrella size={size} />,
      <FaPoll size={size} />,
      <FaGlobe size={size} />,
      <FaEye size={size} />,
      <FaTree size={size} />,
      <FaUmbrella size={size} />,
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  render() {
    return (
      <Layout.Wrapper id="demo-wrapper" className="demo-wrapper-class">
        <Content.Masonry
          id="demo-masonry"
          className="demo-masonry-class"
          ref={(masonry) => {
            this.masonry = masonry;
          }}
        >
          {launcher.map(node => (
            <Content.Card
              title={node.name}
              key={node.id}
              isExpanded={node.isExpanded}
              isExpandable={node.isExpandable}
              icon={node.icon ? this.getRandomIcon() : null}
              id={`demo-card-${node.id}`}
              onExpand={this.onCardExpand}
              loading={node.loading}
              className={`demo-card-class-${node.id}`}
            >
              {node.children.map(child => (
                <p key={child.id}>{child.name}</p>
              ))}
            </Content.Card>
          ))}
        </Content.Masonry>
      </Layout.Wrapper>
    );
  }
}
