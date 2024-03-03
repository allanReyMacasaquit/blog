<script>
  import { onMount, setContext } from "svelte";
  import { key } from ".";

  let color = "blue";
  onMount(() => {
    console.log("Context was mounted!");
  });

  setContext(key, {
    getMessage: () => {
      console.log("Hello");
      return "Hello World";
    },
    color
  });
</script>

<slot />
