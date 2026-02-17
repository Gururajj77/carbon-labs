/*
 * Copyright IBM Corp. 2022, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Row } from '@carbon/react';
import { Tools } from '@carbon/react/icons';

import { SquareCard } from './square-card';

const stories = {
  title: 'Components/MDX Components/Cards/SquareCard',
  component: SquareCard,
  argTypes: {
    children: {
      control: false,
    },
    className: {
      control: false,
    },
  },
};

export default stories;

const Template = (args) => (
  <>
    <SquareCard
      title="A small sentence can go here in conjunction with a pictogram"
      href="/"
      {...args}>
      <Tools size={32} />
    </SquareCard>
    <SquareCard
      title="A small sentence can go here with no pictogram"
      helperText="(Optional text)"
      href="/"
      {...args}
    />
    <SquareCard
      title="Short title"
      smallTitle
      bodyText="A short body paragraph describing the card could go here."
      href="/"
      {...args}
    />
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const DarkMode = Template.bind({});
DarkMode.args = {
  color: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithDownloadIcon = () => (
  <Row className="square-card-group">
    <SquareCard
      title="Download Resources"
      bodyText="Templates and assets"
      href="/downloads"
      actionIcon="download"
    />
  </Row>
);
