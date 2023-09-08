import React from "react"

declare global {
  interface Array<T> {
    mapReactComponents(Component: (props: T) => JSX.Element): JSX.Element[];
  }
}
Array.prototype.mapReactComponents = function (Component) {
  return this.map((props, index) => {
    const reactComponent = Component(props);
    return React.cloneElement(reactComponent, { key: index });
  });
};


export { };