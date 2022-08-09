import { layoutFactory } from "@/layouts/helpers/layoutFactory.js";
import ProductLayoutComponent from "@/layouts/ProductLayout.vue";
import GridLayout from "@/views/product/layout/GridLayout.vue";
import ListLayout from "@/views/product/layout/ListLayout.vue";

// List of layouts available
const LAYOUTS = {
  grid: Symbol("grid"),
  list: Symbol("list"),
};

// Mapping of available layouts to components
const layoutComponents = {
  [LAYOUTS.grid]: GridLayout,
  [LAYOUTS.list]: ListLayout,
};

// Initialise the layout factory that returns a Layout component
// with injected useLayout via props
const {
  // Rename constants to match the feature we are working on
  LayoutComponent: ProductLayout,
  useLayout: useProductLayout,
} = layoutFactory({
  LayoutComponent: ProductLayoutComponent,
  layoutComponents,
  LAYOUTS,
  defaultLayout: LAYOUTS.grid,
});

export { ProductLayout, useProductLayout, LAYOUTS };
