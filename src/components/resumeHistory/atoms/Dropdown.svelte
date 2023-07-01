<script lang="ts">
  export let dropItems: string[] = [];

  
</script>
  <select>
    {#each dropItems as dropItem}
    <option value="">{dropItem}</option>
    {/each}
  </select>
<style>
</style>