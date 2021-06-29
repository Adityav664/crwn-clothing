import React from 'react';
import './signin-and-signup.styles.scss';
import SignUp from '../../component/sign-up/sign-up.component';
import SignIn from '../../component/sign-in/signin.component';

const SignInAndSignUpPage=()=>(
    <div className='sigh-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
        </div>
);

export default SignInAndSignUpPage;