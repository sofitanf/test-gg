import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ICart } from '@/types/cart';

const cartData: ICart[] = localStorage.getItem('carts')
  ? JSON.parse(localStorage.getItem('carts') as string)
  : [];

export const useCartStore = defineStore('cart', () => {
  const carts = ref<ICart[]>(cartData);
  const addToCart = (cart: ICart) => {
    const data = carts.value.find((item) => item.idProduct === cart.idProduct);
    data ? editCart(data.id, data.qty + 1) : carts.value.unshift(cart);
    saveData();
  };
  const editCart = (id: number, qty: number) => {
    const idx = carts.value.findIndex((item) => item.id === id);
    carts.value[idx].qty = qty;
    carts.value[idx].subtotal = qty * carts.value[idx]?.product?.price;
    saveData();
  };
  const removeCart = (id: number) => {
    carts.value = carts.value.filter((item) => item.id !== id);
    saveData();
  };

  const saveData = () => {
    localStorage.setItem('carts', JSON.stringify(carts.value));
  };

  return { carts, addToCart, editCart, removeCart };
});
