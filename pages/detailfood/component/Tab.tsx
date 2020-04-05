import * as React from 'react';
import TabAbout from './TabAbout';
import TabReview from './TabReview';
import TabGallery from './TabGallery';

export default ({route, navigation, active}: any) => {
  if (active == 'about') {
    return <TabAbout {...{route, navigation, active}} />;
  } else if (active == 'review') {
    return <TabReview {...{route, navigation, active}} />;
  } else if (active == 'gallery') {
    return <TabGallery {...{route, navigation, active}} />;
  } else {
    return <TabGallery {...{route, navigation, active}} />;
  }
};
