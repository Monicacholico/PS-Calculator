    const addProfile = woman => {
        const url = 'http://localhost:3000/women';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(woman),
        };
        return fetch(url, options)
            .then(response => response.json());
    };

    const capitalize = (input) => {
        input = input.toString();
        var first = input[0].toUpperCase();
        var rest = input.substring(1).toLowerCase();
        return first + rest;
    };

    const capitalizeEachWord = (input) => {
        var inputArray = input.split(" ");
        var output = "";
        inputArray.forEach(function (word) {
            output += " " + capitalize(word);
        });
        return output;
    };

    $('#add-profile').on('click', function () {
        console.log("Submitting");
        addProfile({
            firstName: capitalizeEachWord($('#woman-profile-first-name').val().toString().trim()),
            lastName: capitalizeEachWord($('#woman-profile-last-name').val().toString().trim()),
            birthDate: ($('#woman-profile-birthdate').val()),
            deathDate: ($('#woman-profile-death').val()),
            living: ($('#woman-profile-living').val()),
            bio: ($('#woman-profile-blurb').val()),
        });
        $('#woman-profile-name').val("");
        $('#woman-profile-birthdate').val("");
        $('#woman-profile-blurb').val("");
        $('#hidden-input').addClass('invisible');
        $('#woman-profile-death').val("");
        $('#woman-profile-living').prop('selectedIndex', 0);
    });

    const livingValue = $('#woman-profile-living').val();

    $('#woman-profile-living').change(function() {
        console.log("changed");
        $('#hidden-input').removeClass('invisible');
    });

