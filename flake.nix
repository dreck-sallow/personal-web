{
  description = "A nix-flake environment for web personal";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
  };

  outputs = { nixpkgs, ...}:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in {
    devShells.${system}.default  = pkgs.mkShell {
      packages = with pkgs; [ typescript-language-server nodejs_22  svelte-language-server vscode-langservers-extracted ];

      shellHook = ''
        exec fish
      '';
    };
  };
}

