interface Prices {
    name: string;
    price: number;
}

interface Service {
    direction: boolean,
    name: string;
    caption: string;
    imgUrl: string;
    description: string;
    benefits: string[];
    aftercare: string[];
    prices: Prices[];
}

export const servicesList: Service[] = [
    {
        direction: true,
        name: "MICROBLADING",
        caption: "",
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
            { name: "Microshading", price: 350 },
            { name: "Retoque al mes", price: 150 },
            { name: "Latin Brows", price: 400 },
            { name: "Retoque al mes", price: 200 },
            { name: "Retoque al año", price: 250 },
            { name: "Retoque sobre microblading", price: 250 }
        ]
    },
    {
        direction: false,
        name: "PMU LIPS",
        caption: "(Maquillaje Permanente de Labios)",
        imgUrl: "/images/servicios/pmu-lips.jpg",
        description: "El PMU lips es un tratamiento de maquillaje semipermanente que define y da color a los labios, mejorando su forma y volumen.",
        benefits: [
            "Labios con color constante y definido, sin necesidad de retoques diarios.",
            "Mejora la forma de los labios y puede corregir asimetrías.",
            "Ideal para quienes buscan un aspecto más juvenil."
        ],
        aftercare: [
            "Evitar la exposición al sol y usar protector labial.",
            "No tocar ni exfoliar los labios durante la fase de curación.",
            "Mantener los labios hidratados con bálsamos recomendados por el especialista."
        ],
        prices: [
            { name: "PMU labios", price: 250 },
            { name: "Retoque al mes ", price: 200 },
            { name: "Neutralización de labios ", price: 100 }
        ]
    },
    {
        direction: true,
        name: "TRATAMIENTOS ESTÉTICOS",
        caption: "",
        imgUrl: "/images/servicios/tratamientos-esteticos.jpg",
        description: "Los tratamientos estéticos ofrecen una amplia gama de beneficios que pueden mejorar tanto la apariencia física como la salud de la piel y el bienestar emocional.",
        benefits: [
            "Muchos tratamientos, como limpiezas faciales y peelings, eliminan impurezas y células muertas, dejando la piel con un aspecto fresco y luminoso.",
            "Reducción de Arrugas y Líneas de Expresión",
            "Al sentirse mejor con su apariencia, muchas personas experimentan un aumento en su autoestima y confianza en sí mismas.",
            "Estimulan la producción natural de colágeno, mejorando la elasticidad y firmeza de la piel.",
            "Procedimientos como limpiezas faciales ayudan a eliminar toxinas y exceso de grasa, promoviendo una piel más saludables.",
            "Muchos tratamientos incluyen masajes o técnicas que promueven la relajación, ayudando a reducir el estrés y mejorar el bienestar general.",
            "Pueden abordar problemas específicos como cicatrices, manchas, vello no deseado o asimetrías faciales, mejorando así la uniformidad del rostro y cuerpo.",
            "Ayudan a prevenir el envejecimiento prematuro y otros problemas cutáneos, manteniendo la piel en condiciones óptimas."
        ],
        aftercare: [
            "No son necesarios cuidados posteriores"
        ],
        prices: [
            { name: "Limpieza básica", price: 100 },
            { name: "Limpieza profunda Hydrofacial", price: 120 },
            { name: "Microdermoabrasión", price: 100 },
            { name: "Dermaplaning", price: 90 },
            { name: "Peeling químico", price: 90 },
            { name: "BB Glow", price: 120 },
            { name: "BB Lips", price: 80 },
            { name: "Micronnedling drPen", price: 140 },
            { name: "Radiofrecuencia", price: 70 },
            { name: "Hialuron Pen", price: 180 },
            { name: "IPL telangiectasia", price: 130 },
            { name: "IPL Melasma", price: 130 },
            { name: "IPL Rosacea", price: 130 },
            { name: "Personalizado acné", price: 130 },
            { name: "Hydra lifting", price: 180 },
            { name: "Rejuvenecimiento contorno de ojos", price: 130 },
            { name: "Mesobotox", price: 180 },
            { name: "Meso platisma (papada)", price: 130 },
            { name: "Bap technique", price: 220 },
            { name: "Hilos de colágeno", price: 130 },
            { name: "PRP", price: 250 },
            { name: "Meso terapia capilar", price: 180 },
            { name: "Tratamiento para varices", price: 130 },
            { name: "Lifting manos", price: 120 },
            { name: "Hiperhidrosis", price: 120 },
            { name: "Oxilift", price: 160 },
            { name: "Laser borrado de cejas", price: 130 },
            { name: "Morpheus 8", price: 210 }
        ]
    },
    {
        direction: false,
        name: "FIBROBLAST",
        caption: "",
        imgUrl: "/images/servicios/fibroblast.jpg",
        description: "El fibroblast es un tratamiento estético no invasivo que utiliza plasma para tensar la piel, mejorar arrugas y flacidez.",
        benefits: [
            "Resultados visibles en poco tiempo, con efectos que pueden durar hasta 3 años.",
            "Estimula la producción de colágeno y elastina en la piel.",
            "Procedimiento no quirúrgico con poco tiempo de recuperación."
        ],
        aftercare: [
            "Mantener la zona limpia y evitar tocarla.",
            "Usar protector solar para evitar hiperpigmentación.",
            "Seguir las indicaciones del especialista sobre cremas o tratamientos adicionales."
        ],
        prices: [
            { name: "Fibroblast levantamiento de párpados superiores", price: 250 },
            { name: "Fibroblast párpados inferiores", price: 250 },
            { name: "Líneas de entrecejo", price: 150 },
            { name: "Patas de gallo", price: 200 },
            { name: "Naso labiales ", price: 200 },
            { name: "Levantamiento facial", price: 350 },
            { name: "Abdomen y corporal", price: 350 },
            { name: "Fibroblast labios", price: 250 },
            { name: "Fibroblast manchas de mano", price: 200 },
            { name: "Fibroblast verrugas", price: 100 },
            { name: "Fibroblast manchas solares", price: 120 },
            { name: "Fibroblast pecas", price: 180 },
            { name: "Fibroblast puntos rubí", price: 150 }
        ]
    },
    {
        direction: true,
        name: "CEJAS",
        caption: "",
        imgUrl: "/images/servicios/cejas.jpg",
        description: "El arreglo de cejas incluye técnicas como depilación, diseño y perfilado para dar forma y definición a las cejas.",
        benefits: [
            "Mejora la simetría del rostro y resalta la mirada.",
            "Puede hacer que el rostro luzca más fresco y juvenil.",
            "Se adapta a diferentes estilos y formas de cara."
        ],
        aftercare: [
            "Evitar el uso de productos irritantes en la zona tratada.",
            "No exponer las cejas a altas temperaturas (saunas, sol intenso) inmediatamente después del tratamiento.",
            "Mantener el área limpia y seca."
        ],
        prices: [
            { name: "Henna de cejas", price: 30 },
            { name: "Tinte de cejas", price: 40 },
            { name: "Laminado de cejas", price: 40 },
            { name: "Perfilado de cejas", price: 10 },
            { name: "Depilación con pinzas", price: 15 }
        ]
    },
    {
        direction: false,
        name: "PESTAÑAS",
        caption: "",
        imgUrl: "/images/servicios/pestañas.jpg",
        description: "El arreglo de pestañas puede incluir tratamientos como extensiones, lifting o tintura para realzar la mirada.",
        benefits: [
            "Pestañas más largas y voluminosas sin necesidad de rímel diario.",
            "Resultados que pueden durar varias semanas, dependiendo del tratamiento.",
            "Mejora la apariencia general del maquillaje."
        ],
        aftercare: [
            "Evitar el uso de productos a base de aceite en las pestañas.",
            "No mojar las pestañas durante las primeras 24 horas tras el tratamiento.",
            "Evitar frotar los ojos para prolongar la duración del tratamiento."
        ],
        prices: [
            { name: "Extensiones clásicas", price: 95 },
            { name: "Rellenos de clásicas", price: 55 },
            { name: "extensiones volumen 3D", price: 115 },
            { name: "relleno volumen 3D", price: 80 },
            { name: "Extensiones 5d", price: 125 },
            { name: "Relleno 5d", price: 85 },
            { name: "Extensiones 8d", price: 135 },
            { name: "Relleno 8d", price: 90 },
            { name: "Volumen ruso", price: 145 },
            { name: "Relleno volumen ruso", price: 95 },
            { name: "Híbridas", price: 120 },
            { name: "Relleno híbridas", price: 80 },
            { name: "Desmaquillar", price: 20 },
            { name: "Retirar pestañas", price: 30 },
            { name: "Lifting de pestañas + tinte", price: 70 }
        ]
    },
    {
        direction: true,
        name: "DEPILACIÓN LÁSER",
        caption: "Diodo Soprano Ice",
        imgUrl: "/images/servicios/depilacion-laser.jpg",
        description: "La depilación láser es un método que utiliza luz láser para eliminar el vello no deseado de manera permanente luego de varias sesiones.",
        benefits: [
            "Resultados duraderos con una reducción significativa del vello después de varias sesiones.",
            "Procedimiento rápido y preciso, adecuado para diversas áreas del cuerpo.",
            "Menos irritación en comparación con métodos tradicionales como la cera o la cuchilla."
        ],
        aftercare: [
            "Evitar la exposición al sol en el área tratada y usar protector solar.",
            "No depilarse con cera o arrancar el vello entre sesiones.",
            "Mantener la piel hidratada y evitar productos irritantes."
        ],
        prices: [
            { name: "Bikini - axila (1 sesion)", price: 85 },
            { name: "Bikini - axila (8 sesiones)", price: 650 },
            { name: "Axilas -  bozo (1 sesion)", price: 65 },
            { name: "Axilas -  bozo (8 sesiones)", price: 500 },
            { name: "Axilas (1 sesion)", price: 45 },
            { name: "Axilas (8 sesiones)", price: 350 },
            { name: "Bikini completo (1 sesion)", price: 60 },
            { name: "Bikini completo (8 sesiones)", price: 450 },
            { name: "Piernas completas (1 sesion)", price: 100 },
            { name: "Piernas completas (8 sesiones)", price: 700 },
            { name: "Media pierna (1 sesion)", price: 60 },
            { name: "Media pierna (8 sesiones)", price: 450 },
            { name: "Espalda (1 sesion)", price: 80 },
            { name: "Espalda (8 sesiones)", price: 600 },
            { name: "Cara (1 sesion)", price: 65 },
            { name: "Cara (8 sesiones)", price: 500 },
            { name: "Abdomen (1 sesion)", price: 85 },
            { name: "Abdomen (8 sesiones)", price: 650 },
            { name: "Full body (1 sesion)", price: 295 },
            { name: "Full body (8 sesiones)", price: 1685 }
        ]
    },
    {
        direction: false,
        name: "DEPILACIÓN CON CERA",
        caption: "",
        imgUrl: "/images/servicios/depilacion-con-cera.jpg",
        description: "La depilación con cera es un método físico que elimina el vello desde la raíz utilizando cera caliente o fría.",
        benefits: [
            "Resultados duraderos (de 3 a 6 semanas) ya que se elimina el vello desde la raíz.",
            "Piel suave y libre de vello en áreas grandes en poco tiempo.",
            "Puede ayudar a debilitar el vello con el tiempo."
        ],
        aftercare: [
            "Evitar actividades que causen sudoración excesiva (gimnasio, sauna) por 24 horas.",
            "No usar productos irritantes ni exfoliantes en la zona tratada durante unos días.",
            "Mantener la piel hidratada para prevenir irritaciones."
        ],
        prices: [
            { name: "Bozo", price: 10 },
            { name: "Barbilla", price: 10 },
            { name: "Cara", price: 10 },
            { name: "Axilas", price: 30 },
            { name: "Bikini", price: 35 },
            { name: "Piernas", price: 45 }
        ]
    }
]
