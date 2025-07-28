import React from 'react';
import {
  DevelopmentIcon,
  EasyIcon,
  EcosystemIcon,
  StableIcon,
  PlatformIcon,
  UnifiedIcon,
} from './FeatureIcon';

export const featureCardStyle = {
  development: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '0ms',
    },
    icon: <DevelopmentIcon />,
  },
  platform: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '1s',
    },
    icon: <PlatformIcon />,
  },
  unified: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '1.8s',
    },
    icon: <UnifiedIcon />,
  },
  ecosystem: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '2.4s',
    },
    icon: <EcosystemIcon />,
  },
  easy: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '3s',
    },
    icon: <EasyIcon />,
  },
  stable: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '3.8s',
    },
    icon: <StableIcon />,
  },
};

export default function () {
  return <div></div>;
}
