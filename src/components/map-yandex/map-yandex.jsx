import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapYandex() {
  const defaultState = {
    center: [59.938955, 30.315644],
    zoom: 12,
  };

  const defaultMark = {
    iconLayout: 'default#image',
    iconImageHref: '/img/mark.svg',
    iconImageSize: [43, 43],
  }

  return (
    <YMaps>
      <Map
        width={856}
        height={604}
        defaultState={defaultState}>
        <Placemark
          options={defaultMark}
          geometry={[59.929853, 30.369012]} />
        <Placemark
          options={defaultMark}
          geometry={[59.961242, 30.293051]} />
      </Map>
    </YMaps>
  );
}