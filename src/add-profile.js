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


// refactoring function with vanilla javascript

// function toJSONString(form){
// var pointeShoe = {};
// var elements = document.querySelectorAll('input, select, textarea');
// elements.forEach(function(element){
//     var pointeName = element.name;
//     console.log(pointeName);
//     var value = element.value;
//     var pointeBrand = element.brand;
//     var pointeType = element.feetType;
//     var pointeStrength = element.strength;
//     var pointeLength = element.toesLength;
//     var pointeArc = element.arcProfile;
//     var pointeWidth = element.width;
//     if(pointeName) {
//         pointeShoe[name] = value;
//     }
//
// });
//     return JSON.stringify(pointeShoe);
//
// }

const addPointe = document.getElementById('add-profile');


// addPointe.addEventListener('click', function( ){
// const pointeName = document.getElementById('pointe-name');
// console.log(pointeName);
// const pointeBrand = document.getElementById('pointe-brand');
// const pointeType = document.getElementById('pointe-feet-type');
// const pointeStrength = document.getElementById('strength-level');
// const pointeLength = document.getElementById('toes-length');
// const arc = document.getElementById('arc-profile');
// const pointeWidth = document.getElementById('width');
//     addProfile({
//         name: capitalizeEachWord((pointeName).valueOf().toString().trim()),
//         brand: capitalizeEachWord((pointeBrand).valueOf().toString().trim()),
//         feetType: capitalizeEachWord((pointeType).valueOf().toString().trim()),
//         strength: capitalizeEachWord((pointeStrength).valueOf().toString().trim()),
//         toesLength: capitalizeEachWord((pointeLength).valueOf().toString().trim()),
//         arcProfile: capitalizeEachWord((arc).valueOf().toString().trim()),
//         width: capitalizeEachWord((pointeWidth).valueOf().toString().trim()),
//
//     });
//     console.log(addProfile());
// })


addPointe.addEventListener('click', function( ){
    const pointeName = document.getElementById('pointe-name');
    console.log(pointeName);
    const pointeBrand = document.getElementById('pointe-brand');
    const pointeType = document.getElementById('pointe-feet-type');
    const pointeStrength = document.getElementById('strength-level');
    const pointeLength = document.getElementById('toes-length');
    const arc = document.getElementById('arc-profile');
    const pointeWidth = document.getElementById('width');
    addProfile({
        name: pointeName.options[selectedIndex].text,
        brand: pointeBrand,
        feetType: pointeType,
        strength: pointeStrength,
        toesLength: pointeLength,
        arcProfile: arc,
        width: pointeWidth,

    });
    console.log('im working');
})






// $('#add-profile').on('click', function () {
//     console.log("Submitting");
//     addProfile({
//         name: capitalizeEachWord($('#pointe-name').val().toString().trim()),
//         brand: capitalizeEachWord($('#pointe-brand').val().toString().trim()),
//         feetType: ($('#pointe-feet-type').val()),
//         level: ($('#pointe-level').val()),
//         strength: ($('#strength-level').val()),
//         toesLength: ($('#toes-length').val()),
//         arcProfile: ($('#arc-profile').val()),
//         width: ($('#width').val()),
        // living: ($('#woman-profile-living').val()),
        // bio: ($('#woman-profile-blurb').val()),
    // });
    // $('#pointe-profile-name').val("");
    // $('#pointe-brand-name').val("");
    // $('#woman-profile-blurb').val("");
    // $('#hidden-input').addClass('invisible');
    // $('#woman-profile-death').val("");
    // $('#woman-profile-living').prop('selectedIndex', 0);
// });

// const livingValue = $('#woman-profile-living').val();
//
// $('#woman-profile-living').change(function() {
//     console.log("changed");
//     $('#hidden-input').removeClass('invisible');
// });

