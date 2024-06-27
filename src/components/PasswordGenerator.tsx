import React, { useState } from 'react';

const PasswordGenerator:React.FC = () => {
    const [passwordLength, setPasswordLength] = useState(12)
    const [password, setPassword] = useState('');

    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?'

    // function to get random character from a given string
    function getRandomCharacter(characters: string): string {
        const randomIndex = Math.floor(Math.random() * characters.length)
        return characters[randomIndex]
    }
    // function to shuffle the password
    function shufflePassword(password:string):string{
        // splitting the password
        const passwordArray = password.split('')
        // shuffling the array
        for(let i=passwordArray.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [passwordArray[i], passwordArray[j]]= [passwordArray[j], passwordArray[i]];
        }
        // joining the array
        return passwordArray.join('');
    }
    // function to generate the password
    function generatePassword(length:number):string{
       const allCharacters = upperCaseLetters+ lowerCaseLetters+numbers+specialCharacters;
    //    initialze
       let password = '';
    //    generating randomcharacters 
       for(let i = 0;i<length;i++){
        password +=getRandomCharacter(allCharacters);
       }
       return shufflePassword(password)
    }

    const handleGeneratePassword =()=>{
        const newPassword = generatePassword(passwordLength);
        setPassword(newPassword)
    }
    return (
        <div>
            <label htmlFor="password-length">Password length:</label>
            <input 
                type="number"
                id="password-length"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                min="1"
            />
            <button onClick={handleGeneratePassword}>Generate Password</button>
            <div>
                <h4>Generated Password: </h4>
                <p>{password}</p>
            </div>
        </div>
    )
}

export default PasswordGenerator
