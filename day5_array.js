let countries = ['nigeria',['oyo','kwara','ogun','lagos'],'ghana',['accra','kumasi'],36];
let sentence=('i am from '+countries[2] + ' in '+countries[3][0]+' , from '+countries[3][1]+' and '+countries[0]+' has '+countries[4]+' states');
console.log(sentence);
console.log(sentence.length);
//function that print 5 colors if the supplied value is 5 or if multiple value are suplied
function print_colors(number,type){
    let color = ['yellow','black','green','white','red'];
    if(number==5 && type=='single'){
        console.log(color);
    }
    else if(number==5 && type=='multiple'){
        color.push('indigo');
        color.push('violet');
        color.push('lemon');
        console.log(color);
    }
}
//loop that identifies even and odd number
print_colors(5,'single');
print_colors(5,'multiple');
for(let i=0; i<=20; i++){
    if(i%2==0)
    {
        console.log(i +' is an even number')
    }
    else{
                console.log(i +' is an odd number')

    }
}
// loop for multiplication table 2
for(let i=1;i<=40;i++){
    let muliplication=muliplication*i
    console.log('20 x '+i +' = '+multiplication)
}
    
    


