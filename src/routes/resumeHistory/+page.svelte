<script lang="ts">
  import ResumeCard from './add/infoLayout.svelte';
  import { Col, Container, Row } from 'sveltestrap';
  import { Input, Label ,Button} from 'sveltestrap';
  import Form from '../../components/resumeHistory/moeculues/LabelDropdown.svelte';
  
  let radioGroup;

  let name:string = '박현우';
  let age:string = '24';
  let phone:string = '010-9878-1111';
  let email:string = 'hyeonu030334@gmail.com';
  let career:string = ''
  let link:string = '';
  let school:string ='';
  interface Info {
    name: string;
    age: string;
    phone: string;
    license: string;
    link: string;
    school: string;
  }

  let info: Info[] = [];
  function addInfo(): void{
    info = [...info,{
      name : name,
      age : age,
      phone : phone,
      license : career,
      link : link,
      school : school,
    }];
  }

  let deleteInfo = () => {
    info.splice(-1);
    info=info;
  }
</script>

<style>
  
</style>
<!--
  Todo 1. +추가버튼을 깔끔하게 만드는건어떨까?
-->
<Container class="mt-5">
  <Row>
    <Col>
      <h4>이력서등록페이지</h4>
      <Label for="signupData">회원정보</Label>
      <Input plaintext value={name} />
      <Input plaintext value={age} />
      <Input plaintext value={phone}/>
      <Input plaintext value={email}/>
      <!--회원가입시 입력한 데이터를 받아와야하지않나?-->
      <Label for="name">경력</Label>
      <Input 
        type="text"
        name="Career"
        bind:value={career}
      />
      <Label for="exampleUrl">링크</Label>
      <Input
        type="url"
        name="url"
        id="exampleUrl"
        placeholder="주소를 입력해주세요" 
        bind:value={link}/>
      <Label for="name">학력</Label>
      <Input type="text" bind:value={school}/>
      <Button color="primary" class="mt-4" type="submit" on:click={addInfo}>추가</Button>
      <Button color="primary" class="mt-4"type="submit" on:click={deleteInfo}>삭제</Button>
      
      <Form />
    </Col>
  </Row>
</Container>

{#each info as infos}
<ResumeCard
  userName = {infos.name}
  userAge = {infos.age}
  userPhone = {infos.phone}
  userCareer = {infos.license}
  userLink = {infos.link}
  userSchool = {infos.school}
/>
{/each}




