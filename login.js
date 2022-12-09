const show=()=>{
    let a=document.getElementById('mail').value;
    let b=document.getElementById('psd').value;
    console.log(a,b)
    // console.log('hello')
if(a=="jayasree@gmail.com" && b=="jayasree"){
    // alert('success')
    window.location.assign('/index.html');
}
else{
    alert('failed')
}

}