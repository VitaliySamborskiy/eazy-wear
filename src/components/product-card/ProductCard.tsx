import React from 'react';

type ProductCardProps = {
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
    <div className="product-card">
      <div className="product-card__image-container">
        {isNew && <div className="product-card__new-badge">NEW</div>}
        <picture>
          <img src={imageUrl} alt={title} className="product-card__image" />
        </picture>
        <button type="button" aria-label="Add to favorites" className="product-card__favorite-btn">
        </button>
      </div>

      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__colors">
          {colors.map((color, index) => (
            <button
              key={`${id}-color-${index}`}
              type="button"
              style={{ backgroundColor: color }}
              aria-label={`Color ${color}`}
              className="product-card__color-btn"
            />
          ))}
        </div>

        <div className="product-card__sizes">
          {sizes.map((size) => (
            <button key={`${id}-size-${size}`} type="button" className="product-card__size-btn">
              {size}
            </button>
          ))}
        </div>

        <div className="product-card__price-container">
          <span className="product-card__price">{price}грн</span>
          {oldPrice && <span className="product-card__old-price">{oldPrice}грн</span>}
        </div>

        <button type="button" aria-label="Add to cart" className="product-card__cart-btn">
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
