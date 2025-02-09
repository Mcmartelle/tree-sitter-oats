package tree_sitter_oats_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_oats "notpublicyet.com/bruh-stop-making-me-fill-out-config-items-prematurely/tree-sitter-certainly-exists/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_oats.Language())
	if language == nil {
		t.Errorf("Error loading OATS grammar")
	}
}
