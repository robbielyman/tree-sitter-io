module.exports = grammar({
  name: 'io',
  extras: $ => [],

  rules: {
    source_file: $ => repeat($._expression),

    _expression: $ => prec(2,choice(
      $.message,
      choice($._separator, $._terminator, $.comment)
    )),
    
    message: $ => prec.left(seq(
      optional(choice($._separator, $._whitespace, $.comment)),
      $._symbol,
      optional(choice($._separator, $.comment)),
      optional($.arguments)
    )),

    arguments: $ => choice(
      seq(
        "(",
        optional(seq($.argument, repeat(seq(",", $.argument)))),
        ")"
      ),
      seq(
        "[",
        optional(seq($.argument, repeat(seq(",", $.argument)))),
        "]"
      ),
      seq(
        "{",
        optional(seq($.argument, repeat(seq(",", $.argument)))),
        "}"
      )
    ),

    argument: $ => seq(
      repeat1($.message),
    ),

    _symbol: $ => choice(
      $.identifier,
      $.number,
      $.operator,
      $.string,
    ),

    number: $ => prec.right(400, choice(
      /0[xX][0-9a-fA-F]+/,
      $._digits,
      seq(
        optional($._digits), 
        ".", 
        $._digits,
        optional(seq("e-", $._digits))
      ),
      /[0-9]*\.[0-9]+e[0-9]+/
    )),

    identifier: $ => prec(1, choice(
      /[a-zA-Z_]+[a-zA-Z_0-9]*/,
      /[0-9]+[a-zA-Z_]+[a-zA-Z0-9_]*/
    )),

    comment: $ => choice(
      seq('//', /.*/),
      /\#.*/,
      seq(
        '/*',
        /[^*]*\*+([^/*][^*]*\*+)*/,
        '/'
      ),
    ),
    
    operator: $ => prec.right(choice(
      /[:.'~!@$%^&*\-+={}\[\]|\\<>?]+[:.'~!@$%^&*\-+\/={}\[\]|\\<>?]*/,
      /\/[:.'~!@$%^&\-+={}\[\]|\\<>?]*/,
      /\/[:.'~!@$%^&\-+={}\[\]|\\<>?]+[:.'~!@$%^&*\-+\/={}\[\]|\\<>?]*/
    )),

    string: $ => choice(
      /"(([^"])|(\\"))*[^\\]"/,
      /"""[^(""")]"""/
    ),

    _terminator: $ => prec.left(2, choice(
      seq($._separator, ";"),
      "\n",
      seq("\r", $._separator)
    )),

    _separator: $ => repeat1(
      choice(" ", "\f", "\t", "\v")
    ),

    _whitespace: $ => repeat1(
      choice("\r", "\n")
    ),

    _digits: $ => /[0-9]+/,
  }
})
