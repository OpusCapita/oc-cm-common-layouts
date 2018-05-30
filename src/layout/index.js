import Wrapper from './wrapper/layout-wrapper.component';
import Column from './columns/layout-column.component';
import Row from './columns/layout-row.component';
import Card from './card/layout-card.component';
import Masonry from './masonry/layout-masonry.component';
import BasicHeader from './header/layout-header.component';
import CustomHeader from './header/layout-custom-header.component';
import NavigationHeader from './header/layout-navigation-header.component';

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
};
