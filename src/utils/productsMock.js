const productos = [
    //mock de lo que responde el back-end
      {
          titulo: 'Whey Gold stadar',
          precio: 55000,
          imagen: 'wheygold.jpg',
          descripcion: 'aumento de masa muscular',
          stock: 20,
          id: 1
      },
      {
          titulo: 'Isolate Whey Protein',
          precio: 45000,
          imagen: 'wheyisolate.jpg',
          descripcion: `Aumento de masa muscular.
          Mejorar recuperación muscular.
          Complementar dietas de pérdida de peso.
          Complementar dietas bajas en proteínas y vegetarianos`,
          stock: 15,
          id: 2
      },
      {
          titulo: 'Women Whey Protein',
          precio: 40000,
          imagen: 'wheywomen.jpg',
          descripcion: `Aumento de masa muscular.
          Mejorar recuperación muscular.
          Complementar dietas de pérdida de peso.
          Complementar dietas bajas en proteínas y vegetarianos`,
          stock: 30,
          id: 3
      }
  ]
  const producto =  {
          titulo: 'Whey Gold stadar',
          precio: 55000,
          imagen: 'wheygold.jpg',
          descripcion: `Aumento de masa muscular.
          Mejorar recuperación muscular.
          Complementar dietas de pérdida de peso.
          Complementar dietas bajas en proteínas y vegetarianos`,
          stock: 20,
          id: 1
    }
    
  export default productos
  export { producto }