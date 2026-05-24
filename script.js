
const words=['Traveller','Explorer','YouTuber'];
let i=0,j=0,deleting=false;
function type(){
let current=words[i];
document.querySelector('.typing').textContent=current.substring(0,j);
if(!deleting){j++;}else{j--;}
if(j===current.length+1){deleting=true;setTimeout(type,1000);return;}
if(j===0){deleting=false;i=(i+1)%words.length;}
setTimeout(type,deleting?60:120);
}
type();
