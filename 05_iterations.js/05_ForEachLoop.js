// FOR EACH

const coding = ["js", "rb", "java", "py"]

coding.forEach( function (item) {
    // console.log(item);
})

// Its a callback funtion so name will not be there.
// This item can be anything 

coding.forEach( (item) => {
    // console.log(item);
})

// Above is arrow function in which name is removed as again it is a callback function.

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)

// We can write callback function like this too.

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

// Output will be :
// js 0 [ 'js', 'rb', 'java', 'py' ]

const SheilaKiJawani = [
    {
        SongName: "Sheila",
        WhatIwantName: "Paisa"
    },
    {
        SongName: "Ki",
        WhatIwantName: "Gaadi"
    },
    {
        SongName: "Jawani",
        WhatIwantName: "Mehnga"
    },
    {
        SongName: "Tees Maar Khan",
        WhatIwantName: "Ghar"
    },
    
]

SheilaKiJawani.forEach( (item) => {

    console.log(item.WhatIwantName);
})






