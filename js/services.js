app.service('$pokeDex', function ($q,$http) {
    var pokeDex = {
        pokeApiDomain : "http://pokeapi.co/",
        chunkUrl : "api/v1/pokemon/?limit=12",
        singlePokemonUrl : "api/v1/pokemon/",
        pokemons : []
    }

    pokeDex.loadMore = function () {
        var self = this;
        var url = this.pokeApiDomain + this.chunkUrl;
        return $http.get(url).then(function(res) {
            self.chunkUrl = res.data.meta.next;
            self.pokemons = self.pokemons.concat(res.data.objects);
            return self.pokemons;
        });
    }

    pokeDex.getPokemonDetails = function (pokemonId) {
        var url = this.pokeApiDomain + this.singlePokemonUrl + pokemonId;
        return $http.get(url).then(function(res) {  
            return res.data;
        });
    };

    pokeDex.getPokemonTypes = function () {
        var url = "http://pokeapi.co/api/v1/type/?limit=999";
        return $http.get(url).then(function(res) {  
            return res.data;
        });
    }

    return pokeDex;
});