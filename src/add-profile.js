const addProfile = pointeShoe => {
    const url = 'http://localhost:3000/pointeShoes';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pointeShoe),
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
        name: capitalizeEachWord($('#pointe-name').val().toString().trim()),
        brand: capitalizeEachWord($('#pointe-brand').val().toString().trim()),
        feetType: ($('#pointe-feel-type').val()),
        level: ($('#pointe-level').val()),
        strength: ($('#strength-level').val()),
        toesLength: ($('#toes-length').val()),
        arcProfile: ($('#arc-profile').val()),
        width: ($('#width').val()),
        // living: ($('#woman-profile-living').val()),
        // bio: ($('#woman-profile-blurb').val()),
    });
    $('#pointe-profile-name').val("");
    $('#pointe-brand-name').val("");
    $('#woman-profile-blurb').val("");
    // $('#hidden-input').addClass('invisible');
    // $('#woman-profile-death').val("");
    // $('#woman-profile-living').prop('selectedIndex', 0);
});

// const livingValue = $('#woman-profile-living').val();
//
// $('#woman-profile-living').change(function() {
//     console.log("changed");
//     $('#hidden-input').removeClass('invisible');
// });

