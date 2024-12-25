
    function ins(cal) 
    {
        console.log(cal)
        document.getElementById("num").value+=cal
    }
    function cr()
    {
        document.getElementById("num").value=""
        
    }
    function eq()
    {
        var text=document.getElementById("num").value
        var res=eval(text)
        document.getElementById("num").value=res

    }
