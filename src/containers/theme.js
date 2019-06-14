/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils/object';

export default deepMerge(grommet, {
  global: {
    colors: {
      'accent-1': '#2bd3ca',
      'accent-2': '#8f60eb',
      'accent-3': '#fd9a69',
      'accent-4': '#fd6fff',
      'accent-5': '#6fffb0',
      'accent-6': '#ffaa15',
      'dark-1': '#102a30',
      brand: '#00C781',
      'neutral-1': '#425563',
      'neutral-2': '#5F7A76',
      'neutral-3': '#80746E',
      'neutral-4': '#767676',
      status: {
        critical: '#F04953',
        error: '#F04953',
        warning: '#FFD144',
        ok: '#01a982',
        unknown: '#CCCCCC',
        disabled: '#CCCCCC',
      },
      focus: '#fd9a69',
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
        font-weight: 700;
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
        font-weight: 600;
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
        font-weight: 100;
      }
      @font-face {
        font-family: "ArcadeClassic";
        src: url("../fonts/arcadeclassic.woff") format('woff');
      }
    `,
    }
  },
  tab: {
    border: undefined,
    color: '#00C781',
  },
  tabs: {
    gap: 'small',
  },
});
