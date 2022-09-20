


var i=0;
var j=0;
var word='';
var final;
finalDict={};
var wordlist



function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
}




const working=()=>{
    
    for(var h=0;h<final.length;h++){
        if(finalDict.hasOwnProperty(final[h])==false){
            finalDict[final[h]]=1;
        }
        else{
            finalDict[final[h]]++;
        }  
    }
    console.log(finalDict);
    document.addEventListener("keydown",function(e){
        if(i<30&&j==0){
            if(e.keyCode>=65&&e.keyCode<=122)
            {
                i++;
                document.getElementById(i).textContent=e.key.toUpperCase();
                word+=e.key.toUpperCase();
                if(i%5==0)
                {
                    console.log(word);
                    j=1;
                }
    
            }
                
        }
        if(e.keyCode=="8"&&word!=''){
            document.getElementById(i).textContent=' ';
            if(i%5==0){
                j=0;
            }
            word=word.slice(0,word.length-1);
            i--;
           
        }
        if(j==1){
            if(e.keyCode=="13")  //checking
            {
                
                console.log(wordlist.includes(word.toLowerCase()))
                if (wordlist.includes(word.toLowerCase())){
                    temp={};
                    for(var key in finalDict)
                    {
                        temp[key]=finalDict[key];
                    }
                    console.log(temp);
                    j=0;
                    for(var k=0;k<word.length;k++)
                    {
                        if(word[k]==final[k]){
                            document.getElementById(i-4+k).classList.add("animate"+ (i-4+k)%5);
                            document.getElementById(i-4+k).classList.add("green");
                            if(temp[word[k]]<=0){
                                
                                for(var o=0;o<k;o++){
                                    if((document.getElementById(i-4+o).classList.contains("yellow"))&&(document.getElementById(i-4+o).innerHTML==word[k])){
                                        document.getElementById(i-4+o).classList.remove("yellow");
                                        document.getElementById(i-4+o).classList.add("blue");
                                        break;
                                    }
                                }
                            }
                            temp[word[k]]--;
                        }
                        else if(temp.hasOwnProperty(word[k])){
                            if(temp[word[k]]!=0){
                                document.getElementById(i-4+k).classList.add("animate"+ (i-4+k)%5);
                                document.getElementById(i-4+k).classList.add("yellow");
                                temp[word[k]]--;
                            }
                            else{
                                document.getElementById(i-4+k).classList.add("animate"+ (i-4+k)%5);
                                document.getElementById(i-4+k).classList.add("blue");
                            }
                        }
                        else{
                            document.getElementById(i-4+k).classList.add("animate"+ (i-4+k)%5);
                            document.getElementById(i-4+k).classList.add("blue");
                        }
        
                    }
                    if(word==final){
                        j=4;
                    }
                    word='';
                    console.log("algorithm")
                
                }
                else{
                    word=''
                    document.getElementById(i).textContent=' ';
                    i--;
                    while(i%5!=0){ 
                        document.getElementById(i).textContent=' ';
                        i--;
                    }
                    j=0;
                    
                }
                if(j==0 && i==30){
                    document.querySelector("#ans").textContent=final.toLowerCase();
                    document.querySelector("#ans").classList.remove('visibility');
                }
                
            }
            
        }
        if(e.keyCode=="32")
        {
            document.location.reload(true);
        }
    });
    
}


const generateNewWords=()=>{
    //generate random word
    const prom=fetch("https://raw.githubusercontent.com/SanjithRaghav/Wordle-/main/dataset/words.json")
    prom.then(res=>res.json()).then((data)=>{var dataset=data;
    wordlist=dataset['word']})
    // setTimeout(() => { console.log(wordlist)
    //     var n=Math.floor(Math.random()*300)
    //     final=wordlist[n]
    //     final=final.toUpperCase();
    //     console.log(final)
    //     working();}, 2000);

    // const response = await fetch('https://raw.githubusercontent.com/SanjithRaghav/Wordle-/main/dataset/words.json');
    // const json = await response.json();
    final=document.getElementById('ans').textContent;
    working();
}

generateNewWords();