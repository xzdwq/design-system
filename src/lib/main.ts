import Button from './Button/Button.vue';

export { Button };

export function register(app: any) {
  app.component('VButton', Button);
}
