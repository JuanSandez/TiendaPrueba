export const productos = [
    {
        id:1,
        nombre: "Campera Narrow",
        descripcion: "Somos Tienda NARROW , Tenemos local a la calle en la zona de Belgrano, Capital Federal. Vendemos productos NARROW 100% Originales. ATENCION AL CLIENTE :LUNES A SABADOS DE 10 A 20HS",
        img: "https://i.ibb.co/JH9Pwnn/campera-Narrow.png",
        precio: 20000,
        categoria: "Camperas",
        stock: 5 
    },
    {
        id:2,
        nombre: "Jeans Narrow",
        descripcion: "Somos Tienda NARROW , Tenemos local a la calle en la zona de Belgrano, Capital Federal. Vendemos productos NARROW 100% Originales. ATENCION AL CLIENTE :LUNES A SABADOS DE 10 A 20HS",
        img: "https://i.ibb.co/rxHNpc7/Pantalon-Narrow.png",
        precio: 20000,
        categoria: "Jeans",
        stock: 5 
    },
    {
        id:3,
        nombre: "Remera Narrow",
        descripcion: "Somos Tienda NARROW , Tenemos local a la calle en la zona de Belgrano, Capital Federal. Vendemos productos NARROW 100% Originales. ATENCION AL CLIENTE :LUNES A SABADOS DE 10 A 20HS",
        img: "https://i.ibb.co/TgMzzqf/Remera-Narrow-2.png",
        precio: 20000,
        categoria: "Remera",
        stock: 5
    },
    {
        id:4,
        nombre: "Campera Narrow",
        descripcion: "Somos Tienda NARROW , Tenemos local a la calle en la zona de Belgrano, Capital Federal. Vendemos productos NARROW 100% Originales. ATENCION AL CLIENTE :LUNES A SABADOS DE 10 A 20HS",
        img: "https://i.ibb.co/fYdWxxC/Remera-Narrow-Mercado-Libre-Google-Chrome-24-5-2024-08-42uj-i-l-35-1-1.png",
        precio: 20000,
        categoria: "Camperas",
        stock: 5 
    },
    {
        id:5,
        nombre: "Remera Narrow",
        descripcion: "Somos Tienda NARROW , Tenemos local a la calle en la zona de Belgrano, Capital Federal. Vendemos productos NARROW 100% Originales. ATENCION AL CLIENTE :LUNES A SABADOS DE 10 A 20HS",
        img: "https://i.ibb.co/TgMzzqf/Remera-Narrow-2.png",
        precio: 20000,
        categoria: "Remera",
        stock: 5
    },
    {
        id:6,
        nombre: "Campera Narrow",
        descripcion: "Somos Tienda NARROW , Tenemos local a la calle en la zona de Belgrano, Capital Federal. Vendemos productos NARROW 100% Originales. ATENCION AL CLIENTE :LUNES A SABADOS DE 10 A 20HS",
        img: "https://i.ibb.co/fYdWxxC/Remera-Narrow-Mercado-Libre-Google-Chrome-24-5-2024-08-42uj-i-l-35-1-1.png",
        precio: 20000,
        categoria: "Camperas",
        stock: 5 
    }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};
export const getProductosById = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));//Find:primera coincidencia exacta, lo trae
        resolve(productoFiltrado);
    });
};

export const getProductosByCategory = (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoria === category
        );
        setTimeout(() => {
            resolve(productosFiltrados);
        }, 2000);
    });
}