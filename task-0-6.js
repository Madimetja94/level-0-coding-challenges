function maximum(a,b,c){
    
    if(a < b)
    {
        if(b < c)
        {
            return c;
        }else{
            return b;
        }
    }
    
    if(a < c)
    {
        return c;
    }

    return a;
}