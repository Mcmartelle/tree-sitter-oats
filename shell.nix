let
  pkgs = import (fetchTarball("https://github.com/NixOS/nixpkgs/archive/nixos-23.11.tar.gz")) {};
in
pkgs.mkShell {
  packages = [
    pkgs.tree-sitter
    pkgs.nodejs_21
    pkgs.emscripten
    # pkgs.gccgo
  ];
}

