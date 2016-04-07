mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    
    when('/:pokemonId', {
        templateUrl: 'pokeDetails.html',
        controller: 'ViewPokemonController',
        controllerAs: "poke"
    }).
    
    otherwise({
       redirectTo: '/'
    });
}]);