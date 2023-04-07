var data ={

    countrie:[
        {
            name:"India",
            states:[
                {
                    name:"Gujarat",
                    cities:[
                        {
                            name:"Surat",
                            population:1000000
                        },
                        {
                            name:"ahmedabad",
                            population:1300000
                        }
                    ]
                },
                {
                    name:"Maharashtra",
                    cities:[
                        {
                            name:"Mumbai",
                            population:2000000
                        },
                        {
                            name:"Pune",
                            population:1500000
                        }
                    ]
                }
            ]
        },
        {
            name:"USA",
            states:[
                {
                    name:"Washington",
                    cities:[
                        {
                            name:"Seattle",
                            population:200000
                        },
                        {
                            name:"Spokane",
                            population:40000
                        }
                    ]
                },
                {
                    name:"California",
                    cities:[
                        {
                            name:"San Francisco",
                            population:78659
                        },
                        {
                            name:"Los Angeles",
                            population:76543
                        }
                    ]
                }
            ]
        }
    ]

}
// find a country which has highest population
// find a state which has highest population
// find a city which has highest population
// find a country which has lowest population
// find a state which has lowest population
// find a city which has lowest population

//find a country which has highest population using map
data.countrie.map((c)=>{
    c.states.map((s)=>{
        s.cities.map((ci)=>{
            console.log(ci.population);
        })
    })
})
