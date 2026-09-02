{
  description = "Sveltekit project for my personal website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells."x86_64-linux".default = nixpkgs.legacyPackages."x86_64-linux".mkShell {
        packages = with nixpkgs.legacyPackages."x86_64-linux"; [
          nodejs_24
          pnpm_11
          svelte-language-server
          typescript-language-server
          vscode-langservers-extracted
        ];

        shellHook = ''
          exec fish    
        '';
      };
    };
}
