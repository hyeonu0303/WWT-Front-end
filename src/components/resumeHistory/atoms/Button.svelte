<script lang="ts">
  export let buttonText: string;
  import {Button} from 'sveltestrap';
  const color: any = 'secondary'
</script>

<Button outline={color}>{buttonText}</Button>
<style>
  /* Button 스타일을 여기에 작성하세요 */
</style>