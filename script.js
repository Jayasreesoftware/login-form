const sub=()=>{
   
// alert('asvxh')

 let a=document.getElementById('txt').value;
 let b=document.getElementById('tx').value;
 let c=document.getElementById('tx1').value;
 let d=document.getElementById('tx2').value;
 let e=document.getElementById('tx3').value;
 let f=document.getElementById('tx4').value;

console.log(a,b,c,d,e,f)
if(a==''&& b==''&& c==''&& d==''&& e==''&& f==''){
alert('fill the form')

}
else{
    alert('submitted succesfully')
}


}
const shw=()=>{
    
    document.getElementById('pop1').style.display="flex"
    document.getElementById('pop2').style.display="none"
    document.getElementById('pop3').style.display="none"
  
}
const shw1=()=>{
    
    document.getElementById('pop1').style.display="none"
    document.getElementById('pop2').style.display="flex"
    document.getElementById('pop3').style.display="none"
  
}
const shw2=()=>{
    
    document.getElementById('pop1').style.display="none"
    document.getElementById('pop2').style.display="none"
    document.getElementById('pop3').style.display="flex"
  
}

const  cancel=()=>{
    document.getElementById('pop1').style.display="none"
    document.getElementById('pop2').style.display="none"
    document.getElementById('pop3').style.display="none"
}