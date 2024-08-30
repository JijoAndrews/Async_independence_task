
function createdsimpletext(tag,content)
{
    var basictag=document.createElement(tag);
    basictag.innerHTML=content;

    setTimeout(()=>
        {
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            setTimeout(()=>{
            console.log("happy independence"),basictag.innerHTML="Happy Independence Day";},1000)
            ,console.log("hello0"),content--,basictag.innerHTML=content;},1000)
            ,console.log("hello1"),content--,basictag.innerHTML=content;});},1000)
            ,console.log("hello2"),content--,basictag.innerHTML=content;},1000) 
            ,console.log("hello3"),content--,basictag.innerHTML=content;},1000) 
            ,console.log("hello4"),content--,basictag.innerHTML=content;},1000)
            ,console.log("hello5"),content--,basictag.innerHTML=content;},1000) 
            ,console.log("hello6"),content--,basictag.innerHTML=content;},1000) 
            ,console.log("hello7"),content--,basictag.innerHTML=content;},1000)
            ,console.log("hello8"),content--,basictag.innerHTML=content;},1000)
            ,console.log("hello9"),content--,basictag.innerHTML=content;},1000)
            ,console.log("hello10"),content,basictag.innerHTML=content;

   
    return basictag;
}

var elementptag=createdsimpletext("p",10);

document.body.append(elementptag);
