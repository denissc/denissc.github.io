mainApp.controller('pokeController', function($scope, $http) {
    var self = this;
    
    $http.get("http://pokeapi.co/api/v1/type/?limit=999")
    .then(function(response) {
        self.types = response.data.objects;
        console.log(response.data);
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
        console.log(response.data);
    });
    $scope.pokeDex = {
        pokemons : [],
        pokeApiDomain: "http://pokeapi.co/",
        chunkUrl:"api/v1/pokemon/?limit=12",
        getNextChunk : function () {
            $scope.loading = true;
            var nextChunkUrl = this.pokeApiDomain+this.chunkUrl;
            $http.get(nextChunkUrl)
            .then(function(response) {
                //First function handles success
                $scope.pokeDex.pokemons = $scope.pokeDex.pokemons.concat(response.data.objects);
                $scope.pokeDex.chunkUrl = response.data.meta.next;
                $scope.loading = false;
                console.log(response.data);
            }, function(response) {
                //Second function handles error
                $scope.content = "Something went wrong";
                console.log(response.data);
            });
            console.log(this.chunkUrl);
        }
    };

    $scope.pokeDex.getNextChunk();

});

mainApp.controller('ViewPokemonController', function($routeParams,$http) {
    var detailsDataUrl = "http://pokeapi.co/api/v1/pokemon/"+$routeParams.pokemonId;
    var self = this;
    this.loading = true;
    $http.get(detailsDataUrl)
    .then(function(response) {
        self.details = response.data;
        self.loading = false;
        console.log(response);
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
        console.log(response.data);
    });
    //self.message = $routeParams.pokemonId;
});