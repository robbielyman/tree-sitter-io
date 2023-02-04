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

    identifier: $ => /[a-zA-Z0-9_]+/,

    operator: $ => /[:\.\'\~\!@\$%\^\&\*\-\+\/=\{\}\[\]\|\\<>\?]+/,

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

    comment: $ => choice(
      /\/\*[^(\*\/)]*\*\//,
      /\/\/[^\n]*\n/,
      /\#[^\n]*\n/
    ),

    number: $ => prec.left(choice(
      /0[xX][0-9a-fA-F]*/,
      $._digits,
      seq(".", $._digits),
      seq($._digits, ".", $._digits, optional(seq(
        "e", optional("-"), $._digits
    ))))),

    _digits: $ => /[0-9]+/,
  }
})
