/**
 * @file Or And Then Sequence
 * @author Matthew Martelle <matthew@martelle.dev>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "oats",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
