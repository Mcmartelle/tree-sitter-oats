import XCTest
import SwiftTreeSitter
import TreeSitterOats

final class TreeSitterOatsTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_oats())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading OATS grammar")
    }
}
