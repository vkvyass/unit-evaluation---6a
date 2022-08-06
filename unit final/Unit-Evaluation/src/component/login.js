import {HStack,Input,Box,Button} from "@chakra-ui/react"
import { useState } from "react"


export default function Login(){
const [use,set]=useState('')
const [pas,spa]=useState('')


    return (<>
    <Box mt='100px'>


<Input
onChange={(e)=>set(e.target.value)}
placeholder={'email'}
>


</Input>

<Input
    onChange={(e)=>spa(e.target.value)}
placeholder={'Pasword'}
>


</Input>

<Button onClick={()=>console.log(pas,use)}>
    Login
</Button>

    </Box>
    
    
    </>)
    
    
    }