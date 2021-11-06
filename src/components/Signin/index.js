import React from 'react'
import { Container,FormWrap, FormButton, FormContent, Form,FormH1, FormInput, FormLabel,Icon ,Text } from './SigninElements'

const SignIn = () => {
    return (
       <>
       <Container>
           <FormWrap>

               <Icon to="/">
                DMU
               </Icon>
               <FormContent>
               <Form action="#">
                <FormH1>Sign in to my Website</FormH1>
               <FormLabel htmlFor='for'> Name </FormLabel>
               <FormInput type='text' required/>
               <FormLabel htmlFor='for'> Email </FormLabel>
               <FormInput type='email' required/>
               <FormLabel htmlFor='for'> Password </FormLabel>
               <FormInput type='password' required/>
               <FormButton type='submit'>Continue</FormButton>
               <Text>Forgot password</Text>
               </Form>
               </FormContent>
           </FormWrap>
       </Container>
       </>
    )
}

export default SignIn
