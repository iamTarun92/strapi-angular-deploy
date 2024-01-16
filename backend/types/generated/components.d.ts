import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAbout extends Schema.Component {
  collectionName: 'components_blocks_abouts';
  info: {
    displayName: 'landingAbout';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    cards: Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    header: Attribute.Component<'shared.header'>;
    cards: Attribute.Component<'shared.card', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    rightLinks: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    leftButton: Attribute.Component<'shared.link'>;
    rightButton: Attribute.Component<'shared.link', true>;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
  };
}

export interface HeroSectionLayoutOne extends Schema.Component {
  collectionName: 'components_hero_section_layout_ones';
  info: {
    displayName: 'Layout One';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    label: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedIcon extends Schema.Component {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    iconList: Attribute.Enumeration<
      ['arrows-1_cloud-download-93', 'files_paper', 'arrows-1_share-66']
    >;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    icon: Attribute.String;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'Social Network';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<
      [
        'fa-twitter',
        'fa-facebook-square',
        'fa-instagram',
        'fa-google-plus',
        'fa-linkedin',
        'fa-youtube'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about': BlocksAbout;
      'blocks.team': BlocksTeam;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'hero-section.layout-one': HeroSectionLayoutOne;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.header': SharedHeader;
      'shared.icon': SharedIcon;
      'shared.link': SharedLink;
      'shared.social-network': SharedSocialNetwork;
    }
  }
}
