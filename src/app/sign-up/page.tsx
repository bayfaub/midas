import Form from 'next/form';
import {createUser} from '@/app/sign-up/actions'
export default function SignUp(){
    return (
        <Form action={createUser}>
            <input name='email 'aria-label='Email'></input>
        </Form>
    )

}