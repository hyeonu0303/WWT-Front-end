<script lang="ts">
  import Label from '../atoms/Label.svelte';
  import Dropdown from '../atoms/Dropdown.svelte';
  export let labelText: string = 'test';
  export let dropItems: string[]=[];
</script>
<div class="labelDrop container mt-2">
  <div class="input_label">
    <Label text={labelText}/>
  </div>
  <div class="dropdown">
    <Dropdown 
      dropItems={dropItems}
    />
  </div>
</div>

<style>
  .labelDrop{
    display:flex;
  }
  .input_label{
    width:100px;
  }
  
</style>
