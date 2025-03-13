import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  sizes: string[];
  colors: string[];
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  oldPrice,
  isNew = false,
  sizes,
  colors,
  imageUrl
}) => {
  return (
    <div>
      {/* Product Image Section */}
      <div>
        {isNew && <div>NEW</div>}
        <img src={imageUrl} alt={title} />
        <button type="button" aria-label="Add to favorites">
          {/* Favorite heart icon will be added here */}
        </button>
      </div>

      {/* Product Info Section */}
      <div>
        {/* Product Title */}
        <h3>{title}</h3>

        {/* Color Selection */}
        <div>
          {colors.map((color, index) => (
            <button
              key={`${id}-color-${index}`}
              type="button"
              style={{ backgroundColor: color }}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>

        {/* Size Selection */}
        <div>
          {sizes.map((size) => (
            <button key={`${id}-size-${size}`} type="button">
              {size}
            </button>
          ))}
        </div>

        {/* Price Section */}
        <div>
          <span>{price}грн</span>
          {oldPrice && <span>{oldPrice}грн</span>}
        </div>

        {/* Add to Cart Button */}
        <button type="button" aria-label="Add to cart">
          {/* Cart icon will be added here */}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
