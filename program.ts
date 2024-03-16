import promptSync from 'prompt-sync';

// Create an instance of prompt-sync
const prompt = promptSync();

console.log("\t\nhello driver get ready for your license: \t\n".toLocaleUpperCase());

// Getting user name 
const user_name:string = prompt("please enter your name: ".toLocaleUpperCase());

console.log("");//space between

// Getting user age 
const user_age_str = prompt("please enter your age: ");
const user_age = parseInt(user_age_str);

console.log(" ");//space between

const user_address:string = prompt("please enter your address: ".toLocaleUpperCase());

console.log(" ");//space between

//user national id card number
const user_id_card = prompt("please enter your card number: ".toLocaleUpperCase())
console.log(" ");//space between

//user DATA 
console.log("\t\nUSER DATA\t\n");
console.log(`name: ${user_name}\nage: ${user_age}\naddress: ${user_address}\n identity: ${user_id_card}`);

console.log(" ");//space between
{
    if(user_age > 17){
        console.log(`${user_name} you are eligible for licens`);
    }else{
        console.log(`${user_name} you are not eligible for licens`);
    }
}