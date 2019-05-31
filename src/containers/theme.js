/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils/object';

export default deepMerge(grommet, {
  global: {
    colors: {
      'accent-1': '#2bd3ca',
      'accent-2': '#8f60eb',
      'accent-3': '#fd9a69',
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
  },
  tab: {
    border: undefined,
    color: '#00C781',
  },
  tabs: {
    gap: 'small',
  },
});
