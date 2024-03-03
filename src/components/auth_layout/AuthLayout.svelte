<script>
  export let title;
</script>

<div class="flex-it justify-center items-center p-1 h-full">
  <div class="text-white text-4xl font-bold">{title}</div>
  <div class="mt-10 flex-it h-100 xs:w-100 w-full bg-white p-10 rounded-2xl">
    <div class="flex-it">
      <slot />
    </div>
  </div>
</div>
