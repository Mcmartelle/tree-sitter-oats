package tree_sitter_oats_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_oats "https://github.com/Mcmartelle/tree-sitter-oats"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_oats.Language())
	if language == nil {
		t.Errorf("Error loading OATS grammar")
	}
}
