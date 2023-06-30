<script lang="ts">
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'sveltestrap';
  export let dropHeader:string;
  export let dropCaret: string;
  export let dropItems: string[] = [];

  
</script>

<Dropdown>
  <DropdownToggle caret>{dropCaret}</DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>{dropHeader}</DropdownItem>
    {#each dropItems as dropItem}
    <DropdownItem>{dropItem}</DropdownItem>
    {/each}
    <DropdownItem divider />
  </DropdownMenu>
</Dropdown>