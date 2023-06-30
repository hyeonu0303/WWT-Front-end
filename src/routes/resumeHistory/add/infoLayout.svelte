<script lang="ts">

  export let userName:string = ''; 
  export let userAge:string = '';
  export let userPhone:string = '';
  export let userCareer:string = '';
  export let userLink:string = '';
  export let userSchool:string = '';
  
  import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';
  import { Col, Container, Row } from 'sveltestrap';
</script>
<style>
  
</style>
<Container>
  <Card class="Info mb-3 ml-3 mr-3 mt-3">
    <CardHeader>
      <CardTitle>이력서 등록증</CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>
        <p>이름:{userName}</p>
        <p>나이:{userAge}</p>
        <p>전화번호: {userPhone}</p>
      </CardText>
      <CardText>
        <hr>
          <p>경력:{userCareer}</p>
          <p>링크:{userLink}</p>
          <p>학력: {userSchool}</p>
      </CardText>
    </CardBody>
    <CardFooter></CardFooter>
  </Card>
  
</Container>
  
  
  
  
  
  