app.controller('pokeController', function($scope, $pokeDex) {
    $scope.showPokemonDetails = function (id) {
        $scope.pokemonDetails = {
            loading : true
        };
        $pokeDex.getPokemonDetails(id).then(function (data) {
            $scope.pokemonDetails = data;
            $scope.pokeDetails = 'pokeDetails.html';
            $scope.pokemonDetails.loading = false;
        });
    }

    $scope.pokemons = [];
    $scope.load = function() {
        $scope.pokemons.loading = true;
        $pokeDex.loadMore().then(function (pokemons) {
            $scope.pokemons = pokemons;
            $scope.pokemons.loading = false;
        });
    }

    $scope.load();

    $pokeDex.getPokemonTypes().then(function (data) {
        $scope.pokemonTypes =  data.objects;
    });

});