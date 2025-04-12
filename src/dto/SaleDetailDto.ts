interface ISaleDetailDto {
    productId: number;  // ID del producto vendido
    quantity: number;   // Cantidad de productos vendidos
    unitPrice: number;  // Precio unitario del producto
    subtotal: number;   // subtotal = unitPrice * quantity
    profit: number;     // Ganancia obtenida en este producto
}

export default ISaleDetailDto;
