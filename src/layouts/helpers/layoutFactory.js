import { h } from "vue";
import { useLayoutFactory } from "./useLayoutFactory";

export const layoutFactory = ({
  LayoutComponent,
  layoutComponents,
  LAYOUTS,
  defaultLayout,
}) => {
  /**
   * Initialise state for the LayoutComponent
   */
  const { useLayout } = useLayoutFactory({
    layoutComponents,
    LAYOUTS,
    defaultLayout,
  });

  // Functional wrapper component
  const Component = (props, { attrs, slots }) => {
    // Add useLayout function as a prop to be passed to the LayoutComponent
    const options = { useLayout, ...props, ...attrs };
    return h(LayoutComponent, options, slots);
  };

  return {
    LayoutComponent: Component,
    useLayout,
  };
};
