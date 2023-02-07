module.exports = grammar({
  name: 'io',
  extras: $ => [],

  rules: {
    source_file: $ => choice(
      repeat($.expression),
    ),

    expression: $ => prec.right(seq(
      choice(
        repeat1($.message),
        repeat1(choice(
          $._whitespace, $._separator, $.comment
      ))),
      optional($._terminator)
    )),
    
    message: $ => prec.left(seq(
      repeat(choice($._whitespace, $._separator, $.comment)),
      $._symbol,
      optional(seq(
        repeat(choice($._separator, $.comment)),
        $.arguments
    )))),

    arguments: $ => prec.right(3,choice(
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
    )),

    argument: $ => $.expression,

    _symbol: $ => choice(
      $.identifier,
      $.number,
      $.operator,
      $.string,
    ),

    number: $ => choice(
      /0[xX][0-9a-fA-F]+/,
      /[0-9]*\.?[0-9]+(e[0-9]+|(e\-[0-9]+))?/
    ),

    identifier: $ => /[a-zA-Z_]+[a-zA-Z_0-9]*/,

    comment: $ => prec.right(4, choice(
      seq('//', /.*/),
      /\#.*/,
      seq(
        '/*',
        /[^*]*\*+([^/*][^*]*\*+)*/,
        '/'
      ),
    )),
    
    operator: $ => /[:'.~!@#$%^&*\-\+=(){}\[\]\\<>\/?]+/,

    string: $ => choice(
      /"(([^"])|(\\"))*[^\\]"/,
      /"""[^(""")]"""/
    ),

    _terminator: $ => prec.left(2, choice(
      seq(optional($._separator), ";"),
      "\n",
      seq("\r", $._separator)
    )),

    _separator: $ => prec.right(repeat1(
      choice(" ", "\f", "\t", "\v")
    )),

    _whitespace: $ => prec.right(repeat1(
      choice("\r", "\n")
    )),

    _digits: $ => /[0-9]+/,

  }
})
