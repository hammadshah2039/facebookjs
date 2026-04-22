function submit(){

    let email=document.getElementById("Email")
    let pass= document.getElementById("pass")

   if(
        email.value.trim() && pass.value.trim()
    )
    
    {
        window.location.href="LINKDIN.HTML"
        
     }
      
       
   
    else{
        alert("fill all requirmnet")
    }


    
}