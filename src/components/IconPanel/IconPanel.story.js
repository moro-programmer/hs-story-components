import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import IconPanel from './IconPanel';

const iconAlign = {
"baseline":"baseline",
"length":"length",
"sub":"sub",
"super":"super",
"top":"top",
"text-top":"text-top",
"middle":"middle",
"bottom":"bottom",
"text-bottom":"text-bottom",
"initial":"initial",
"inherit":"inherit"
};

const stories = storiesOf('IconPanel', module).addDecorator(withKnobs);

stories.addWithInfo('Icon with two text lines', () => (
      <IconPanel icon="cake" iconAlign={select('iconAlign', iconAlign, 'middle')}>
          <div>First line</div>
          <div>Second Line</div>
      </IconPanel>
    ),{ inline: true });

    stories.addWithInfo('Icon with one text line', () => (
      <IconPanel icon="group" iconAlign="bottom">
          <div>First line</div>
      </IconPanel>
    ),{ inline: true });
