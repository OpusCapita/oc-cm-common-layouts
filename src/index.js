// Layout components
import Wrapper from './layout/layout-wrapper.component';

// Content related components
import Column from './content/columns/layout-column.component';
import Row from './content/columns/layout-row.component';
import Card from './content/card/layout-card.component';
import Masonry from './content/masonry/layout-masonry.component';

// Headers
import BasicHeader from './header/layout-basic-header.component';
import CustomHeader from './header/layout-custom-header.component';
import NavigationHeader from './header/layout-navigation-header.component';
import TabNavigationHeader from './header/layout-tab-navigation-header.component';

// Primitives
import PrimitiveBorderlessButton from './primitives/layout-primitive-borderless-button.component';
import PrimitiveHeader from './primitives/layout-primitive-header.component';
import PrimitiveHeaderTitle from './primitives/layout-primitive-header-title.component';

export const Layout = {
  Wrapper,
};

export const Content = {
  Column,
  Row,
  Card,
  Masonry,
};


export const Header = {
  Basic: BasicHeader,
  Custom: CustomHeader,
  Navigation: NavigationHeader,
  TabNavigation: TabNavigationHeader,
};

export const Primitive = {
  BorderlessButton: PrimitiveBorderlessButton,
  Header: PrimitiveHeader,
  HeaderTitle: PrimitiveHeaderTitle,
};
