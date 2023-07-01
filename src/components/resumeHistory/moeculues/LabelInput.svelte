<script lang="ts">
  import Input from '../atoms/Input.svelte';
  import Label from '../atoms/Label.svelte';
  export let labelText: string;
  export let inputValues: string;
</script>
<div class="labelInput container mt-2">
  <div class="input_label">
    <Label text={labelText}/>
  </div>
  <div class="input_value">
    <Input bind:value={inputValues} placeholder="{labelText} 입력" />
  </div>
</div>

<style>
  .labelInput{
    display:flex;
  }
  .input_label{
    width:100px;
  }
</style>
