/**
 * @file Or And Then Sequence
 * @author Matthew Martelle <matthew@martelle.dev>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const newline = /[\r\n\u2028\u2029]/;
const nonNewline = /[^\r\n\u2028\u2029]/;

module.exports = grammar({
  name: "oats",
  extras: $ => [$.comment, ' '],
  rules: {
    source_file: $ => repeat(choice($.instruction_line, $.breaker, $.clipboard_line, $.comment)),
    breaker: $ => newline,
    instruction_line: $ => seq($.marker, $.instruction, newline),
    instruction: $ => repeat1(nonNewline),
    marker: $ => choice($.unordered, $.one_of, $.and_then, $.optional),
    unordered: $ => '&',
    one_of: $ => '|',
    and_then: $ => '~',
    optional: $ => '?',
    clipboard_line: $ => seq($.clipbo, $.clipboard_string, newline),
    clipbo: $ => token.immediate('= '),
    clipboard_string: $ => token.immediate(nonNewline),
    comment: _ => token(seq('//', repeat1(nonNewline))),
  }
});
