export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  isOwnBrand?: boolean;
}

export const productCategories = [
  { name: 'Cooking Oils', slug: 'oils' },
  { name: 'Pickles & Condiments', slug: 'pickles' },
  { name: 'Appalam & Papad', slug: 'appalam' },
  { name: 'Rice & Flours', slug: 'flours' },
  { name: 'Snacks & Sweets', slug: 'snacks' },
  { name: 'Salt & Spices', slug: 'spices' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'SPM GOLD Sunflower Oil',
    category: 'oils',
    description: 'Premium quality sunflower oil for healthy cooking',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop',
    isOwnBrand: true,
  },
  {
    id: 2,
    name: 'SPM Appalam',
    category: 'appalam',
    description: 'Traditional South Indian appalam made with authentic recipes',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b44bf4f6c4?w=600&h=600&fit=crop',
    isOwnBrand: true,
  },
  {
    id: 3,
    name: 'Idhayam Sesame Oil',
    category: 'oils',
    description: 'Pure cold-pressed sesame oil',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Priya Pickles',
    category: 'pickles',
    description: 'Authentic Indian pickles in various flavors',
    image: 'https://images.unsplash.com/photo-1599909533780-b40e3585d0d6?w=600&h=600&fit=crop',
  },
  {
    id: 5,
    name: 'Bambino Vermicelli',
    category: 'flours',
    description: 'Premium roasted vermicelli for traditional recipes',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop',
  },
  {
    id: 6,
    name: "Haldiram's Snacks",
    category: 'snacks',
    description: 'Popular Indian namkeen and snacks',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=600&fit=crop',
  },
  {
    id: 7,
    name: 'Tata Salt',
    category: 'spices',
    description: 'India\'s most trusted iodized salt',
    image: 'https://images.unsplash.com/photo-1608569962595-3eedd4aa0bc7?w=600&h=600&fit=crop',
  },
  {
    id: 8,
    name: 'RKG Ghee',
    category: 'oils',
    description: 'Pure cow ghee for authentic taste',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=600&fit=crop',
  },
];
