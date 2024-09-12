interface Prices {
    name: string;
    price: number;
}

interface Service {
    name: string;
    imgUrl: string;
    description: string;
    benefits: string[];
    aftercare: string[];
    prices: Prices[];
}

export const servicesList: Service[] = [
    {
        name: "MICROBLADING",
        imgUrl: "/images/servicios/microblading.jpg",
        description: "El microblading es una técnica de maquillaje semipermanente que utiliza una herramienta manual para implantar pigmento en la piel, creando la apariencia de cejas más definidas y naturales.",
        benefits: [
            "Cejas más llenas y definidas sin necesidad de maquillaje diario.",
            "Resultados naturales que pueden durar entre 1 y 3 años.",
            "Ideal para quienes tienen cejas escasas o desiguales"
        ],
        aftercare: [
            "Evitar mojar las cejas durante los primeros días.",
            "No aplicar productos con alcohol o exfoliantes en la zona.",
            "Usar bloqueador solar para proteger el área."
        ],
        prices: [
            { name: "Microblading", price: 350 },
            { name: "Retoque al mes", price: 150 },
            { name: "Retoque fuera de tiempo", price: 180 },
            { name: "Retoque al año", price: 200 },
            { name: "Retoque de otro trabajo", price: 230 },
            { name: "Neutralizar", price: 150 },
            { name: "Powder brows", price: 380 },
            { name: "Retoque al mes", price: 150 },
            { name: "Retoque al año ", price: 180 },
            { name: "Microshading", price:  350},
            { name: "Retoque al mes", price: 150 },
            { name: "Latin Brows", price: 400 },
            { name: "Retoque al mes", price: 200 },
            { name: "Retoque al año", price: 250 },
            { name: "Retoque sobre microblading", price: 250 }  
        ]
    }
]

/* ,
    {
        name: "",
        imgUrl: "",
        description: "",
        benefits: [
            "",
            ""
        ],
        aftercare: [
            "",
            ""
        ],
        prices: [
            { name: "", price: 0 },
            { name: "", price: 0 }
        ]
    },
    {
        name: "",
        imgUrl: "",
        description: "",
        benefits: [
            "",
            ""
        ],
        aftercare: [
            "",
            ""
        ],
        prices: [
            { name: "", price: 0 },
            { name: "", price: 0 }
        ]
    } */