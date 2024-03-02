<script>
  import { trends } from "./trendLink";
</script>

<div class="flex-it md:w-92 w-0 mt-4">
  <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
    <div class="flex-it p-4">
      <span class="text-xl font-bold">Trends</span>
    </div>
    {#each trends as trend (trend.category)}
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm"> {trend.content} </span>
          <span class="text-lg font-bold">{trend.category}</span>
          <span class="text-gray-400 text-sm">{trend.glideCount}</span>
        </div>
      </div>
    {/each}
  </div>
</div>
