import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CalendarButton from './CalendarButton';
import { withKnobs, text, boolean,date } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('CalendarButton', module).addDecorator(withKnobs);

stories.addWithInfo('active CalendarButton', () => (
  <CalendarButton
    active={boolean('active',true)}
    onClick={action('clicked')}
    header={text('header','SEP')}
    text={text('text', '7')}/>
),{ inline: true });

stories.addWithInfo('CalendarButton without header',()=>(
  <CalendarButton text='+' active={boolean('active',true)}/>
),{ inline: true });

stories.addWithInfo('current date',()=>(
  <CalendarButton date={date('date', new Date())} active={boolean('active',true)}/>
),{ inline: true });
