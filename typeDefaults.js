export default {
  DEFAULT: {
    css: {
      // 'color': theme('colors.gray.800'),
      // a: {
      //   'color': theme('colors.avocado.500'),
      //   '&:hover': {
      //     color: '#2c5282',
      //   },
      // },
      'color': 'var(--tw-prose-body)',
      'maxWidth': '65ch',
      'p': { }, // Required to maintain correct order when merging
      '[class~="lead"]': {
        color: 'var(--tw-prose-lead)',
      },
      'a': {
        color: 'var(--tw-prose-links)',
        textDecoration: 'underline',
        fontWeight: '500',
      },
      'strong': {
        color: 'var(--tw-prose-bold)',
        fontWeight: '600',
      },
      'a strong': {
        color: 'inherit',
      },
      'blockquote strong': {
        color: 'inherit',
      },
      'thead th strong': {
        color: 'inherit',
      },
      'ol': {
        listStyleType: 'decimal',
      },
      'ol[type="A"]': {
        listStyleType: 'upper-alpha',
      },
      'ol[type="a"]': {
        listStyleType: 'lower-alpha',
      },
      'ol[type="A" s]': {
        listStyleType: 'upper-alpha',
      },
      'ol[type="a" s]': {
        listStyleType: 'lower-alpha',
      },
      'ol[type="I"]': {
        listStyleType: 'upper-roman',
      },
      'ol[type="i"]': {
        listStyleType: 'lower-roman',
      },
      'ol[type="I" s]': {
        listStyleType: 'upper-roman',
      },
      'ol[type="i" s]': {
        listStyleType: 'lower-roman',
      },
      'ol[type="1"]': {
        listStyleType: 'decimal',
      },
      'ul': {
        listStyleType: 'disc',
      },
      'ol > li::marker': {
        fontWeight: '400',
        color: 'var(--tw-prose-counters)',
      },
      'ul > li::marker': {
        color: 'var(--tw-prose-bullets)',
      },
      'dt': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '600',
      },
      'hr': {
        borderColor: 'var(--tw-prose-hr)',
        borderTopWidth: 1,
      },
      'blockquote': {
        fontWeight: '500',
        fontStyle: 'italic',
        color: 'var(--tw-prose-quotes)',
        borderInlineStartWidth: '0.25rem',
        borderInlineStartColor: 'var(--tw-prose-quote-borders)',
        quotes: '"\\201C""\\201D""\\2018""\\2019"',
      },
      'blockquote p:first-of-type::before': {
        content: 'open-quote',
      },
      'blockquote p:last-of-type::after': {
        content: 'close-quote',
      },
      'h1': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '800',
      },
      'h1 strong': {
        fontWeight: '900',
        color: 'inherit',
      },
      'h2': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '700',
      },
      'h2 strong': {
        fontWeight: '800',
        color: 'inherit',
      },
      'h3': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '600',
      },
      'h3 strong': {
        fontWeight: '700',
        color: 'inherit',
      },
      'h4': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '600',
      },
      'h4 strong': {
        fontWeight: '700',
        color: 'inherit',
      },
      'img': { }, // Required to maintain correct order when merging
      'picture': {
        display: 'block',
      },
      'video': { }, // Required to maintain correct order when merging
      'kbd': {
        fontWeight: '500',
        fontFamily: 'inherit',
        color: 'var(--tw-prose-kbd)',
        boxShadow:
        '0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)',
      },
      'code': {
        color: 'var(--tw-prose-code)',
        fontWeight: '600',
      },
      'code::before': {
        content: '"`"',
      },
      'code::after': {
        content: '"`"',
      },
      'a code': {
        color: 'inherit',
      },
      'h1 code': {
        color: 'inherit',
      },
      'h2 code': {
        color: 'inherit',
      },
      'h3 code': {
        color: 'inherit',
      },
      'h4 code': {
        color: 'inherit',
      },
      'blockquote code': {
        color: 'inherit',
      },
      'thead th code': {
        color: 'inherit',
      },
      'pre': {
        color: 'var(--tw-prose-pre-code)',
        backgroundColor: 'var(--tw-prose-pre-bg)',
        overflowX: 'auto',
        fontWeight: '400',
      },
      'pre code': {
        backgroundColor: 'transparent',
        borderWidth: '0',
        borderRadius: '0',
        padding: '0',
        fontWeight: 'inherit',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
      },
      'pre code::before': {
        content: 'none',
      },
      'pre code::after': {
        content: 'none',
      },
      'table': {
        width: '100%',
        tableLayout: 'auto',
        marginTop: em(32, 16),
        marginBottom: em(32, 16),
      },
      'thead': {
        borderBottomWidth: '1px',
        borderBottomColor: 'var(--tw-prose-th-borders)',
      },
      'thead th': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '600',
        verticalAlign: 'bottom',
      },
      'tbody tr': {
        borderBottomWidth: '1px',
        borderBottomColor: 'var(--tw-prose-td-borders)',
      },
      'tbody tr:last-child': {
        borderBottomWidth: '0',
      },
      'tbody td': {
        verticalAlign: 'baseline',
      },
      'tfoot': {
        borderTopWidth: '1px',
        borderTopColor: 'var(--tw-prose-th-borders)',
      },
      'tfoot td': {
        verticalAlign: 'top',
      },
      'th, td': {
        textAlign: 'start',
      },
      'figure > *': { }, // Required to maintain correct order when merging
      'figcaption': {
        color: 'var(--tw-prose-captions)',
      },
    },
  },
}
