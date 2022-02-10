function maximum(a,b,c){
    if(a < b)
    {
        if(b < c)
        {
            return c;
        }
        return b;
    }
    return a;
}