function vowlPrinter(str){
    let vowels = '';
    let aC = 0, eC = 0, iC = 0, oC = 0, uC = 0;
    for(let i = 0; i < str.length; i++){
        if((str[i] == 'a' || str[i] == 'A') && aC == 0)
        {
            vowels += 'a';
            aC++;
            if(i != str.length - 1 && vowels.length != 0 )
                vowels += ', ';
        }
        if((str[i] == 'e' || str[i] == 'E') && eC == 0)
        {
            vowels += 'e';
            eC++;
            if(i != str.length - 1 && vowels.length != 0 )
                vowels += ', ';
        }
        if((str[i] == 'o' || str[i] == 'O') && oC == 0)
        {
            vowels += 'o';
            oC++;
            if(i != str.length - 1 && vowels.length != 0 )
                vowels += ', ';
        }
        if((str[i] == 'u' || str[i] == 'U') && uC == 0)
        {
            vowels += 'u';
            uC++;
            if(i != str.length - 1 && vowels.length != 0 )
                vowels += ', ';
        }
        if((str[i] == 'i' || str[i] == 'I') && iC == 0)
        {
            vowels += 'i';
            iC++;
            if(i != str.length - 1 && vowels.length != 0 )
                vowels += ', ';
        }
        
    }
    console.log('Vowels: ' + vowels);
}