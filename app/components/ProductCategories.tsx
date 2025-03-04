import Image from "next/image"

const ProductCategories = () => {
  const productCategories = [
    { name: "Roofing Materials", image: "/roofing-materials.jpeg" },
    { name: "Wood & Timber", image: "/wood-timber.jpeg" },
    { name: "Cement Products", image: "/cement.jpeg" },
    { name: "Paints & Coatings", image: "/paints.jpeg" },
  ]

  return (
    <section className="pt-[241px] px-20 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-[40px] font-[400] leading-[48px] mb-10 font-display text-center">
          TOP-QUALITY MATERIALS FOR EVERY CONSTRUCTION NEED
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {productCategories.map((category, index) => (
            <div key={index} className="relative overflow-hidden group cursor-pointer">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={280}
                height={392}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-30"></div>
              <p className="absolute inset-0 flex items-center justify-center text-white z-10 font-[400] text-[40px] leading-[48px] font-display text-center px-4">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories

