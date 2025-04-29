import React, { useState } from "react";
import { IconElement } from "../components.tsx";
import { type Icon } from "../icons/type/types.ts";
import styles from "./product-card.module.scss";

type ProductCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  onAddToCart: (productId: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  imageUrl,
  price,
  originalPrice,
  onAddToCart,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const iconBasket: Icon = {
    name: "basket",
    style: styles.svgBasket,
    color: "#ffffff",
    height: 24,
    width: 24,
  };

  const iconHeart: Icon = {
    name: "heart",
    style: liked ? styles.heartFilled : styles.heartOutlined,
    color: liked ? "#383838" : "none",
    height: 24,
    width: 24,
  };

  return (
    <li className={styles.card}>
      <div className={styles.toplinecard}>
        <span className={styles.new}>New</span>
        <button className={styles.heard} onClick={toggleLike}>
          <IconElement {...iconHeart} />
        </button>
      </div>

      <img src={imageUrl} alt={title} className={styles.image} />

      <p className={styles.title}>{title}</p>

      <div className={styles.pricebascet}>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            <strong>{price} ₴</strong>
            {originalPrice && originalPrice > price && (
              <span className={styles.originalPrice}>{originalPrice} ₴</span>
            )}
          </p>
        </div>

        <button className={styles.basket} onClick={() => onAddToCart(id)}>
          <IconElement {...iconBasket} />
        </button>
      </div>
    </li>
  );
};

export { ProductCard };
