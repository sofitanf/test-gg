<template>
  <main class="container text-white mx-auto px-[1rem] xl:px-[5rem] mb-10 flex flex-col lg:flex-row gap-10">
    <div class="w-full xl:w-3/5">
      <PageTitle title="Shopping Continue" />
      <p class="font-medium text-lg mt-8">Shopping cart</p>
      <p class="text-sm font-nunito">You have {{ carts.length }} item in your cart</p>
      <div class="flex flex-col gap-4 mt-6">
        <div v-for="cart in carts" :key="cart?.id"
          class="border-white border rounded-[1rem] p-2 flex flex-col sm:flex-row sm:items-center gap-3">
          <div class="flex items-center gap-4 w-full sm:w-3/5">
            <img class="w-[80px] h-[83px]" :src="cart?.product?.image" alt="product">
            <div>
              <p class="font-medium text-lg">{{ cart?.product?.name }}</p>
              <p class="text-sm font-nunito">{{ cart?.product?.category }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between grow">
            <div class="flex items-center gap-2">
              <p class="font-semibold text-2xl font-raleway">{{ cart?.qty }}</p>
              <div class="flex flex-col gap-1">
                <button @click="editQty(cart?.id, cart?.qty + 1)">
                  <img src="/icons/up.svg" alt="increase">
                </button>
                <button :disabled="cart?.qty === 1" @click="editQty(cart?.id, cart?.qty - 1)">
                  <img src="/icons/down.svg" alt="decrease">
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between gap-[3rem] pr-2">
              <p class="text-sm">${{ toNumber(cart?.subtotal) }}</p>
              <button @click="removeProduct(cart?.id)">
                <img src="/icons/trash.svg" alt="remove">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="carts.length > 0" class="border-white border rounded-[1rem] grow p-4">
      <div class="flex items-center justify-between">
        <p class="font-semibold text-[22px]">Card Details</p>
        <img class="size-[50px]" src="/images/avatar.png" alt="avatar">
      </div>
      <p class="my-3">Card type</p>
      <div class="flex gap-3 flex-wrap">
        <img src="/images/mastercard.svg" alt="mastercard">
        <img src="/images/visa.svg" alt="visa">
        <img src="/images/rupay.svg" alt="rupay">
        <button class="border-white border-[1.3px] px-3 py-4 rounded-md flex items-center">
          <p class="font-open-sans font-semibold">See all</p>
        </button>
      </div>
      <div class="mt-5 flex flex-col gap-4 border-white border-b pb-5 mb-3">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium" for="name">Name on card</label>
          <input id="name" type="text" class="input">
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium" for="number">Card Number</label>
          <input id="number" type="text" class="input">
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="exp">Expiration date</label>
            <input id="exp" type="date" class="input">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="cvv">CVV</label>
            <input id="cvv" type="text" class="input">
          </div>
        </div>
      </div>
      <ItemPrice title="Subtotal" :price="toNumber(subtotal)" />
      <ItemPrice title="Shipping" :price="shipping" />
      <ItemPrice title="Total (Tax incl.)" :price="toNumber(total)" />
      <div class="border-white border rounded-[0.8rem] flex items-center justify-between px-6 py-4">
        <p class="font-medium">${{ toNumber(total) }}</p>
        <button class="flex items-center gap-2">
          <p class="font-medium">Checkout</p>
          <img src="/icons/right.svg" alt="checkout">
        </button>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { toNumber } from '@/utils/number';

import PageTitle from '@/components/PageTitle.vue'
import ItemPrice from '@/components/cart/ItemPrice.vue'

const cartStore = useCartStore()
const shipping = ref<number>(4)

const carts = computed(() => cartStore.carts)
const subtotal = computed(() => carts.value.reduce((acc, cart) => acc + cart.subtotal, 0))
const total = computed(() => subtotal.value + shipping.value)

const editQty = (id: number, qty: number) => {
  cartStore.editCart(id, qty)
}

const removeProduct = (id: number) => {
  cartStore.removeCart(id)
}
</script>
