export default defineNuxtPlugin(() => {
  return {
    provide: {
      regions: ['Japan', 'United States', 'Canada', 'Mexico']
    }
  };
});
