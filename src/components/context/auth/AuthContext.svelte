<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { key } from ".";

  let isAuthenticated = writable(false);
  let loading = writable(false);

  setContext(key),
    {
      isAuthenticated,
      loading
    };
</script>

<slot />
