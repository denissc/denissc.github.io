mainApp.filter('numberFixedLen', function () {
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = ''+num;
        while (num.length < len) {
            num = '0'+num;
        }
        return num;
    };
});

mainApp.filter('typeIs', function () {
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