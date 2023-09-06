import { hash , compare } from "bcryptjs";

async function hashPassword(password){
    const hashedpassword = await hash(password,10)
    return hashedpassword;
}

async function verifypassword(password,hashedpassword){
    const comparepassword = await compare(password,hashedpassword)
    return comparepassword
}


export {verifypassword,hashPassword}