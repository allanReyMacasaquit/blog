<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { key } from ".";
  import Loader from "$utils/Loader.svelte";

  let isLoading = writable(true);
  let isAuthenticated = writable(false, (set) => {
    setTimeout(() => {
      set(false); // isAuthenticated setter
      isLoading.set(false);
    }, 2000);
  });

  setContext(key, {
    isAuthenticated,
    isLoading
  });
</script>

{#if $isLoading && !$isAuthenticated}
  <Loader size={30} />
{:else}
  <slot />
{/if}
