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

export interface BlocksContactForm extends Schema.Component {
  collectionName: 'components_blocks_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    inputs: Attribute.Component<'shared.input', true>;
    header: Attribute.Component<'shared.header'>;
  };
}

export interface BlocksLayoutOne extends Schema.Component {
  collectionName: 'components_hero_section_layout_ones';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
  };
}

export interface BlocksLoginForm extends Schema.Component {
  collectionName: 'components_blocks_login_forms';
  info: {
    displayName: 'Login Form';
  };
  attributes: {
    inputs: Attribute.Component<'shared.input', true>;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface BlocksPortfolioGallery extends Schema.Component {
  collectionName: 'components_blocks_portfolio_galleries';
  info: {
    displayName: 'Portfolio Gallery';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'now-ui-icons design_image',
        'now-ui-icons location_world',
        'now-ui-icons sport_user-run'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'now-ui-icons design_image'>;
    gallery: Attribute.Media & Attribute.Required;
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

export interface BlocksWorkWithUs extends Schema.Component {
  collectionName: 'components_blocks_work_with_uses';
  info: {
    displayName: 'Work With Us';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    inputs: Attribute.Component<'shared.input', true>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
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
    logoHoverText: Attribute.Text;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
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

export interface SharedInput extends Schema.Component {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    type: Attribute.Enumeration<['text', 'password', 'email', 'date']> &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
    icon: Attribute.Enumeration<
      ['users_circle-08', 'ui-1_email-85', 'text_caps-small']
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
      'blocks.contact-form': BlocksContactForm;
      'blocks.layout-one': BlocksLayoutOne;
      'blocks.login-form': BlocksLoginForm;
      'blocks.portfolio-gallery': BlocksPortfolioGallery;
      'blocks.team': BlocksTeam;
      'blocks.work-with-us': BlocksWorkWithUs;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'seo.meta-data': SeoMetaData;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.header': SharedHeader;
      'shared.icon': SharedIcon;
      'shared.input': SharedInput;
      'shared.link': SharedLink;
      'shared.social-network': SharedSocialNetwork;
    }
  }
}
