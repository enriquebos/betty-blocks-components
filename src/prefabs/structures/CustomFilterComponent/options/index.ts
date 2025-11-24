import {
  sizes,
  size,
  color,
  option,
  ThemeColor,
  model,
  text,
} from '@betty-blocks/component-sdk';
import { advanced } from '../advanced';

export const categories = [
  {
    label: 'Data',
    expanded: true,
    members: ['modelId', 'actionVariableId'],
  },
  {
    label: 'Filter text',
    expanded: false,
    members: [
      'addFilterRowText',
      'ANDText',
      'ORText',
      'equalsText',
      'notEqualsText',
      'existsText',
      'notExistsText',
      'endsWithText',
      'startsWithText',
      'matchesText',
      'notMatchText',
      'greaterThanText',
      'lowerThanText',
      'greaterThanOrEqualText',
      'lowerThanOrEqualText',
      'afterText',
      'beforeText',
      'afterOrAtText',
      'beforeOrAtText',
    ],
  },
  {
    label: 'Whitelist / Blacklist',
    expanded: false,
    members: ['propertyWhiteList', 'propertyBlacklist'],
  },
  {
    label: 'Remap label items',
    expanded: false,
    members: ['labelMapping'],
  },
  {
    label: 'Layout',
    expanded: false,
    members: ['height', 'width', 'outerSpacing'],
  },
  {
    label: 'Style',
    expanded: false,
    members: [
      'highlightColor',
      'textColor',
      'borderColor',
      'borderRadius',
      'backgroundColor',
      'backgroundColorAlpha',
    ],
  },
  {
    label: 'Advanced',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const filterComponentOptions = {
  actionVariableId: option('ACTION_JS_VARIABLE', {
    label: 'Action input variable',
    value: '',
  }),
  modelId: model('Model'),
  height: size('Height', {
    value: '',
    configuration: {
      as: 'UNIT',
    },
  }),
  width: size('Width', {
    value: '',
    configuration: {
      as: 'UNIT',
    },
  }),
  outerSpacing: sizes('Outer space', {
    value: ['0rem', '0rem', '0rem', '0rem'],
  }),
  highlightColor: color('Highlight Color', {
    value: ThemeColor.DARK,
  }),
  textColor: color('Text Color', {
    value: ThemeColor.WHITE,
  }),
  borderColor: color('Border color', {
    value: ThemeColor.ACCENT_1,
  }),
  borderRadius: size('Border radius', {
    value: '4px',
    configuration: {
      as: 'UNIT',
    },
  }),
  backgroundColor: color('Background color', {
    value: ThemeColor.TRANSPARENT,
  }),
  backgroundColorAlpha: option('NUMBER', {
    label: 'Background color opacity',
    value: 100,
  }),
  addFilterRowText: text('Add Filter Row', {
    value: 'Add Filter Row',
  }),
  ANDText: text('AND', {
    value: 'AND',
  }),
  ORText: text('OR', {
    value: 'OR',
  }),
  equalsText: text('Equals', {
    value: 'Equals',
  }),
  notEqualsText: text('Does not equal', {
    value: 'Does not equal',
  }),
  existsText: text('Exists', {
    value: 'Exists',
  }),
  notExistsText: text('Does not exist', {
    value: 'Does not exist',
  }),
  endsWithText: text('Ends with', {
    value: 'Ends with',
  }),
  startsWithText: text('Starts with', {
    value: 'Starts with',
  }),
  matchesText: text('Matches', {
    value: 'Contains',
  }),
  notMatchText: text('Does not match', {
    value: 'Does not contain',
  }),
  greaterThanText: text('Greater than', {
    value: 'Greater than',
  }),
  lowerThanText: text('Lower than', {
    value: 'Lower than',
  }),
  greaterThanOrEqualText: text('Greater than or equal to', {
    value: 'Greater than or equal to',
  }),
  lowerThanOrEqualText: text('Lower than or equal to', {
    value: 'Lower than or equal to',
  }),
  afterText: text('After', {
    value: 'Is after',
  }),
  beforeText: text('Before', {
    value: 'Is before',
  }),
  afterOrAtText: text('Is after or at', {
    value: 'Is after or at',
  }),
  beforeOrAtText: text('Is before or at', {
    value: 'Is before or at',
  }),
  propertyWhiteList: text('Property Whitelist', {
    configuration: {
      as: 'MULTILINE',
    },
  }),
  propertyBlacklist: text('Property Blacklist', {
    value: 'id',
    configuration: {
      as: 'MULTILINE',
    },
  }),
  labelMapping: text('Label mapping (label=newLable,...)', {
    configuration: {
      as: 'MULTILINE',
    },
  }),
  ...advanced,
};
