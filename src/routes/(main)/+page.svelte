<script>
  import { getUIContext } from "$components/context/UI";
  import { getAuthContext } from "$components/context/auth";

  import GlidePost from "$components/glides/GlidePost.svelte";
  import TiBrush from "svelte-icons/ti/TiBrush.svelte";

  import TiImageOutline from "svelte-icons/ti/TiImageOutline.svelte";

  let glides = [];
  let glideContent = "";

  const { isXl } = getUIContext();
  const { isAuthenticated, isLoading } = getAuthContext();

  function createGlide() {
    let date = new Date();
    const glide = {
      content: glideContent,
      id: date.toISOString(),
      content: glideContent,
      user: {
        nickName: "Filip99",
        avatar: "https://thrangra.sirv.com/Avatar1.png"
      },
      likesCount: 0,
      subglidesCount: 0,
      date
    };
    glides = [glide, ...glides];
    glideContent = "";
  }
</script>

<!-- Children -->
<!-- HOME PAGE START -->

<div class="flex-it py-1 px-4 flex-row">
  <div class="flex-it mr-4">
    <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
      <img
        alt=""
        class="rounded-full"
        src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
      />
    </div>
  </div>
  <!-- MESSENGER START -->
  <div class="flex-it flex-grow">
    <div class="flex-it">
      <textarea
        bind:value={glideContent}
        name="content"
        rows="2"
        id="glide"
        class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
        placeholder={"What's new?"}
      />
    </div>
    <div class="flex-it mb-1 flex-row justify-end items-center">
      <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
        <div class="upload-btn-wrapper">
          <div class="icon">
            <TiImageOutline />
          </div>
          <input type="file" name="myfile" />
        </div>
      </div>
      <div class="flex-it w-12 sm:w-24 mt-3 cursor-pointer">
        <button
          on:click={createGlide}
          type="button"
          class="disabled:cursor-not-allowed disabled:bg-gray-400 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
        >
          <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
            {#if $isXl}
              <span>Glide It</span>
            {:else}
              <div class="icon"><TiBrush /></div>
            {/if}
          </div>
        </button>
      </div>
    </div>
  </div>
  <!-- MESSENGER END -->
</div>
<div class="h-px bg-gray-700 my-1" />
<!-- GLIDE POST START -->
{#each glides as glide (glide.id)}
  <GlidePost {glide} />
{/each}
<!-- GLIDE POST END -->
<!-- HOME PAGE END -->
