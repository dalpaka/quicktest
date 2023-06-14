// Define your components and their HTML
const components = {};

// the single component renderer 
export default function component(name, html) {
  components[name] = html;
  document.write(html);
}
