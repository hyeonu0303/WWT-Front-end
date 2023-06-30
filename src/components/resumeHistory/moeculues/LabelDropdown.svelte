<script lang="ts">
  import Input from '../atoms/Input.svelte';
  import Label from '../atoms/Label.svelte';
  export let labelText: string[] = ['대학', '학교명', '지역', '전공', '주/야간', '학점'];
  export let inputValues: string[] = Array(labelText.length).fill('');
</script>
<div class="container mt-5" style="max-width:768px;">
  <h3>대학</h3>
  {#each labelText as text, i}
  <div class="input_label">
    <Label {text}/>
  </div>
  <div class="input_value">
    <Input bind:value={inputValues[i]} placeholder="{labelText[i]} 입력" /><br>
  </div>
  {/each}
</div>

<style>
  .container{
    background: #eee;
    padding:30px;
  }
</style>
