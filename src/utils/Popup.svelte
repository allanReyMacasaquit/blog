<script>
  import { afterUpdate, onMount } from "svelte";
  import Portal from "./Portal.svelte";
  import { clickOutside } from "$components/actions/clickOutside";

  let isOpen = false;
  let openerMenu;

  let popupBottomPosition;
  let popupLeftPosition;

  onMount(() => {
    addEventListener("click", closePopup);
    addEventListener("resize", adjustPopup);

    return () => {
      removeEventListener("click", closePopup);
      removeEventListener("resize", adjustPopup);
    };
  });

  afterUpdate(() => {
    adjustPopup();
  });

  function adjustPopup() {
    if (isOpen) {
      const position = openerMenu.getBoundingClientRect();

      popupBottomPosition = openerMenu.clientHeight - 40 + "px";
      popupLeftPosition = position.left + 85 + "px";
    }
  }

  function closePopup() {
    console.log("CALLED!");
    if (isOpen) isOpen = false;
  }
</script>

<div class="flex-it">
  <div bind:this={openerMenu} class="flex-it">
    <button
      on:click|stopPropagation={() => {
        isOpen = true;
      }}
    >
      <slot />
    </button>
  </div>
  {#if isOpen}
    <Portal>
      <div
        on:outclick={() => {
          isOpen = false;
        }}
        use:clickOutside
        style="bottom: {popupBottomPosition}; left: {popupLeftPosition}"
        class="flex-it hover:cursor-pointer sm:mb-16 sm:-ml-20 fixed bg-gray-800 text-white popup z-10 rounded-3xl border-gray-700 border transition duration-1000"
      >
        <div
          class="w-72 min-w-68 max-h-120 rounded-3xl hover:bg-gray-700 min-h-8flex-it overflow-auto"
        >
          <div class="flex-it flex-grow flex-shrink py-2">
            <div class="flex-it px-2 justify-center text-2xl items-center transition">Logout</div>
          </div>
        </div>
      </div>
    </Portal>
  {/if}
</div>
