function charMatch(str1, str2){

    let length1 = str1.length;
    let length2 = str2.length;
    let str = "";
    const arr = [];
    
    if(length1 >= length2)
    {
        
        for(let i = 0;i < length2; i++)
        {
            
            for(let j = 0;length1 > j; j++)
            {
                if(str1[j] == str2[i])
                {
                    if(!arr.includes(str2[i]))
                    {
                        arr.push(str2[i]);
                    }
                }  
            }
        }
    }else{

        for(let i = 0;i < length1; i++)
        {
            for(let j = 0;length2 > j; j++)
            {
                if(str2[j] == str1[i])
                {
                    if(!arr.includes(str1[i]))
                    {
                        arr.push(str1[i]);
                    }
                }
                
            }

        }
    }
    for(let i= 0; i < arr.length;i++)
    {
        str += arr[i];
        if(i != arr.length - 1 && str.length != 0 )
            str += ', ';
    }
    console.log("Common letters: "+str);
}