import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapButton = () => {
  // You can replace 'Your+Address+Here' with your actual address
  const address = encodeURIComponent('Cotroceni Business Center, Bulevardul Iuliu Maniu 7, București 061072');
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${address}`;

  return (
    <IconButton
      icon={<FaMapMarkerAlt />}
      isRound={true}
      size="lg"
      variant={'outline'}
      onClick={() => window.open(mapsLink, '_blank')}
      aria-label="View Map"
      // If you have a specific color for the icon itself, you can set it using the color prop
      color="black"
    />
  );
};

export default MapButton;
