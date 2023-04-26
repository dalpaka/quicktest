// Define your components and their HTML
const components = {};

// the single component renderer 
export function component(name, html) {
  components[name] = html;
}
