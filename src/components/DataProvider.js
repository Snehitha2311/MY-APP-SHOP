import React,{createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Quick View",
            "images": [
                "https://staticimg.titan.co.in/Titan/Catalog/95130QM01_1.jpg?pView=listing",
                "https://staticimg.titan.co.in/Titan/Catalog/95129QM01_2.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95129QM01_3.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95129QM01_4.jpg?pView=pdp"
            ],
            "description": "ANIMALIA FROM TITAN",
            "content": "SEE THROUGH CASE CONTEMPORARY MESH STRAP",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 8995,
            "count": 1
        },
        {
            "_id": "2",
            "title": "Quick View",
            "images": [
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_1.jpg?pView=listing",
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_2.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_3.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_4.jpg?pView=pdp"

            ],
            "description": "ANIMALIA FROM TITAN",
            "content": "BEATEN METAL FINISHED DIAL OPEN HEART AUTOMATIC WATCH",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 13495,
            "count": 1
        },
        {
            "_id": "3",
            "title": "Quick View",
            "images": [
                "https://staticimg.titan.co.in/Titan/Catalog/2606WL02_1.jpg?pView=listing",
                "https://staticimg.titan.co.in/Titan/Catalog/2606WL02_2.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/2606WL02_3.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/2606WL02_4.jpg?pView=pdp"

            ],
            "description": "RAGA VIVA PINK DIAL LEATHER STRAP WATCH",
            "content": " SWAROVSKI CRYSTAL INDICES CREAMIC STRAP",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 3295,
            "count": 1
        },
        {
            "_id": "4",
            "title": "Quick View",
            "images": [
                "https://staticimg.titan.co.in/Titan/Catalog/1843SM01_1.jpg?pView=listing",
                "https://staticimg.titan.co.in/Titan/Catalog/1843SM01_2.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/1843SM01_4.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/1843SM01_3.jpg?pView=pdp"

            ],
            "description": "EDGE WATCH WITH GREY DIAL IN ANTHRACITE CASE",
            "content": "SEE THROUGH CASE CONTEMPORARY MESH STRAP ",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 10995,
            "count": 1
        },
        {
            "_id": "5",
            "title": "Quick View",
            "images": [
                "https://staticimg.titan.co.in/Titan/Catalog/95061WD04_1.jpg?pView=listing",
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_2.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_3.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95131WM01_4.jpg?pView=pdp"

            ],
            "description": "WHITE MOTHER-OF-PERAL DIAL CERAMIC & METAL STRAP WATCH",
            "content": "SWAROVSKI CRYSTAL INDICES CREAMIC STRAP",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 9495,
            "count": 1
        },
        {
            "_id": "6",
            "title": "Quick View",
            "images": [
                "https://staticimg.titan.co.in/Titan/Catalog/95132WM01_1.jpg?pView=listing",
                "https://staticimg.titan.co.in/Titan/Catalog/95132WM01_2.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95132WM01_3.jpg?pView=pdp",
                "https://staticimg.titan.co.in/Titan/Catalog/95132WM01_4.jpg?pView=pdp"

            ],
            "description": "ANIMALIA FROM TITAN",
            "content": "CRYSTAL STUDDED SLEEK CASE CONTEMPORARY STRAP ",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 9495,
            "count": 1
        }
    ])

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert(" The product has been added to cart.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    },[])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}