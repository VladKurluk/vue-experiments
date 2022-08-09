<template>
  <div>
    <div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
      <button @click.prevent="setLayout(LAYOUTS.grid)">Layout grid</button>
      <button @click.prevent="setLayout(LAYOUTS.list)">Layout list</button>
    </div>
    <ProductLayout class="mx-auto max-w-7-xl">
      <component
        :is="productCardComponent"
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </ProductLayout>
  </div>
</template>

<script>
import { computed } from "vue";
import ProductLayout from "@/layouts/ProductLayout";
import { useProductLayout } from "@/layouts/composables/useProductLayout";
import ProductGridCard from "./components/ProductGridCard";
import ProductListCard from "./components/ProductListCard";
import products from "./products.json";

export default {
  components: {
    ProductLayout,
  },
  setup() {
    const { layout, setLayout, LAYOUTS } = useProductLayout();
    const productLayoutComponents = {
      [LAYOUTS.grid]: ProductGridCard,
      [LAYOUTS.list]: ProductListCard,
    };
    const productCardComponent = computed(
      () => productLayoutComponents[layout.value]
    );
    return {
      products,
      productCardComponent,
      LAYOUTS,
      setLayout,
    };
  },
};
</script>
