const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('productos', {
        arrayProductos: [
            {id: '1',
            img: "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/336508_a_tripode_piso.jpg",
            prod: 'Trípode Metálico',
            desc: 'Trípode de aluminio con adaptador para cámara o celular',
            precio: 3400
            },
            
            {id: '2',
            img: "https://thumb.pccomponentes.com/w-220-220/articles/15/153323/file.jpg",
            prod: 'Soporte Auriculares Corsair',
            desc: 'Soporte de plástico para auriculares con leds RGB configurables',
            precio: 3500
            },

            {id: '3',
            img: "https://storage.googleapis.com/tecnowestune/2019/08/f681928a-61sdtk0t6bl._sl1000_.jpg",
            prod: 'Trípode Plástico',
            desc: 'Trípode de plástico de alta calidad con adaptador para cámara',
            precio: 2700
            },

            {id: '4',
            img: "https://thumb.pccomponentes.com/w-530-530/articles/32/324954/1935-asus-rog-throne-core-soporte-para-auriculares.jpg",
            prod: 'Soporte Auriculares ASUS',
            desc: 'Soporte de plastico para auriculares',
            precio: 2600
            },

            {id: '5',
            img: "https://thumb.pccomponentes.com/w-220-220/articles/19/191951/1.jpg",
            prod: 'Soporte Auriculares',
            desc: 'Soporte de plástico para auriculares genérico',
            precio: 1600
            },

            {id: '6',
            img: "https://studio.cults3d.com/puy98BcjT1MCSWYN2SnNw_nP9g0=/516x516/https://files.cults3d.com/uploaders/14161152/illustration-file/5f693f2c-21de-4db5-b8db-f312691d37cb/1yoshi.jpg",
            prod: 'Soporte Joystick Yoshi',
            desc: 'Soporte para joystick de plástico',
            precio: 900
            },

            {id: '7',
            img: "https://http2.mlstatic.com/D_NQ_NP_991131-MLA43274183691_082020-O.jpg",
            prod: 'Soporte Joystick Pickle Rick',
            desc: 'Soporte para joystick de plástico',
            precio: 1100
            },

            {id: '8',
            img: "https://i.ebayimg.com/images/g/wCgAAOSwpNxf5~CE/s-l400.jpg",
            prod: 'Soporte Joystick Sonic',
            desc: 'Soporte para joystick de plástico',
            precio: 1100
            }
        ]
    })
})

module.exports = router;