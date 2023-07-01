<script lang="ts">
  import LabelDropdown from "../moeculues/LabelDropdown.svelte";
  import LabelInput from "../moeculues/LabelInput.svelte";
  import Button from "../atoms/Button.svelte";
  let inputValues: string;
</script>
<div class="container mt-5" style="max-width:768px;">
  <h3>대학 대학원 정보 입력</h3>
  <LabelDropdown 
    labelText={'대학'}
    dropItems={['대학(2,3년제)','대학(4년)','대학(석사)','대학(박사)']}
  />
  <LabelInput
    labelText={'학교명'}
    inputValues={inputValues}
  />
  <LabelDropdown
    labelText={'지역'}
    dropItems={['서울','경기','광주','대구','대전','부산','울산','인천','강원','경남','경북','전남','충북','충남','제주','전국','세종','아시아중동','남미']}
  />
  <LabelDropdown
    labelText={'졸업여부'}
    dropItems={['졸업','재학중','휴학중','수료','중퇴','자퇴','졸업예정']}
  />
  <div class="stroage_button">
    <Button buttonText={'저장'}/>
  </div>
</div>

<style>
  .container{
    background: #eee;
    padding:30px;
    position: relative;
  }
  .stroage_button{
    position:absolute;
    bottom:10px;
    right:10px;
  }
</style>
