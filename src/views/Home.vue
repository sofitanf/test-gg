<template>
  <main class="container mx-auto px-[1rem] md:px-[5rem] mb-10">
    <div class="w-3/5">
      <PageTitle title="Product List" />
    </div>
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-[2rem] xl:gap-[7rem] 2xl:gap-[10rem] mt-10">
      <div v-for="product in products" :key="product?.id" class="bg-grey rounded-[2rem] p-4 relative font-inter">
        <div class="flex items-center gap-4 absolute -translate-y-5 translate-x-3">
          <div class="bg-orange h-[48px] rounded-b-full p-2 flex flex-col justify-end">
            <p class="text-white text-xl font-bold ">01</p>
          </div>
          <div class="flex items-center gap-3 pt-2">
            <img src="/icons/crown.svg" alt="crown">
            <p class="text-orange text-xs w-1/2">1.4k purchased in the last 30 days</p>
          </div>
        </div>
        <div class="flex flex-col mt-[2.5rem]">
          <div class="flex justify-center">
            <img class="size-[184px] brightness-50" :src="product?.image" alt="mac">
          </div>
          <p class="text-grey10">{{ product?.category }}</p>
          <p class="font-bold text-white text-xl">{{ product?.name }}</p>
          <div class="flex items-center gap-2 mt-3">
            <div class="bg-white p-1 flex items-center gap-1">
              <img v-for="i in 5" :key="i" src="/icons/star.svg" alt="star">
            </div>
            <p class="text-grey10">{{ toNumber(product?.reviews) }} reviews</p>
          </div>
          <div class="flex items-center gap-2 my-4">
            <p class="text-xl">${{ toNumber(product?.price) }}</p>
            <div class="text-red bg-red10 rounded-full text-nowrap px-2 py-1">20% OFF</div>
            <img src="/images/prime.png" alt="prime">
          </div>
          <button @click="addCart(product?.id, product)"
            class="w-full bg-green rounded-full flex item-center justify-center gap-2 py-2">
            <p class="font-bold text-white">Add to cart</p>
            <!-- <img src="/icons/chevron.svg" alt="detail"> -->
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

import products from '@/data/products'
import { toNumber } from '@/utils/number'
import { useCartStore } from '@/stores/cart'

import PageTitle from '@/components/PageTitle.vue'

import type { ICart } from '@/types/cart';
import type { IProduct } from '@/types/product';

const router = useRouter()
const cartStore = useCartStore()
const addCart = (id: number, product: IProduct) => {
  const payload: ICart = {
    id: generateId(),
    idProduct: id,
    qty: 1,
    product,
    subtotal: product?.price
  }
  cartStore.addToCart(payload)
  router.push('/cart')
}

const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};
</script>
