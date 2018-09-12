import React from 'react';

// Icons
import FaTruck from 'react-icons/lib/fa/truck';
import FaTree from 'react-icons/lib/fa/tree';
import FaUmbrella from 'react-icons/lib/fa/umbrella';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaDashboard from 'react-icons/lib/fa/dashboard';
import FaGlass from 'react-icons/lib/fa/glass';

// App imports
import { Layout, Content } from '../../../src/index';
import launcher from '../demo-items.json';

export default class MasonryComponentView extends React.PureComponent {
  onCardExpand = (id, isExpanded) => {
    const status = isExpanded ? 'expanded' : 'not expanded';
    console.log('Card', id, 'is', status);
  };

  getRandomIcon = () => {
    const size = 24;
    const icons = [
      <FaTruck size={size} />,
      <FaUmbrella size={size} />,
      <FaGlass size={size} />,
      <FaGlobe size={size} />,
      <FaDashboard size={size} />,
      <FaTree size={size} />,
      <FaUmbrella size={size} />,
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  render() {
    return (
      <Layout.Wrapper id="demo-wrapper" className="demo-wrapper-class">
        <Content.Masonry id="demo-masonry" className="demo-masonry-class">
          {launcher.map(node => (
            <Content.Card
              title={node.name}
              key={node.id}
              isExpanded={node.isExpanded}
              isExpandable={node.isExpandable}
              icon={this.getRandomIcon()}
              id={`demo-card-${node.id}`}
              onExpand={this.onCardExpand}
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
