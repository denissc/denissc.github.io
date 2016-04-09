app.filter('threeDiditFormat', function () {
    return function (n) {
        if (n > 0 && n < 10) {
            return '00' + n;
        } else if (n > 10 && n < 100) {
            return '0' + n;
        } else {
            return n;
        }
    };
});

app.filter('typeIs', function () {
    return function (pokemons, selectedType) {
        if (selectedType === undefined || selectedType === '') {
            return pokemons;
        }

        var result = [];
        angular.forEach(pokemons, function (pokemon) {
            angular.forEach(pokemon.types, function (type) {
                if (type.name === selectedType) {
                    result.push(pokemon);
                }
            })
        });
        return result;

    }
});