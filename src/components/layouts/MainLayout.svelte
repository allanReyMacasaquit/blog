<script>
  import NavSidebar from "$components/sidebars/NavSidebar.svelte";
  import TrendSidebar from "$components/sidebars/TrendSidebar.svelte";
</script>

<div class="w-full h-full bg-gray-900 text-gray-100">
  <div class="flex h-full min-h-252">
    <!-- SIDEBAR START -->
    <NavSidebar />
    <!-- SIDEBARS END -->
    <main class="flex-it flex-grow flex-shrink items-start">
      <div class="flex md:w-248 w-full h-full">
        <div class="flex-it flex-grow flex-shrink">
          <div class="flex-it flex-row justify-between min-h-full">
            <div class="flex-it md:max-w-152 w-full border-x-1 border-solid border-gray-700">
              <div class="sticky z-10 flex-it top-0">
                <div
                  class="flex-it h-14 p-4 xl:text-xl text-sm font-bold z-10 backdrop-blur-md bg-opacity-70"
                >
                  Home
                </div>
              </div>
              <slot />
            </div>
            <!-- TRENDS SIDEBAR START -->
            <TrendSidebar />
            <!-- TRENDS SIDEBAR END -->
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
