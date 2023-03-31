

function saturdayFun(activity)
   {
   if(activity === 'bathe my dog')
   return ('This Saturday, I want to bathe my dog!');
   else
   return ('This Saturday, I want to roller-skate!');
}
function mondayWork(activity)
{
    if(activity === 'work from home')
    return ('This Monday, I will work from home.');
    else
    return('This Monday, I will go to the office.');
}
const st=wrapAdjective('*')();
console.log(st);
function wrapAdjective(activity)
{
let special;

    if(activity==='*')
    {
        special='a hard worker';
    return function(special){
        return (`You are *${special}*!`);
    };


    }
    else if(activity==='||')
    {
        special='a dedicated programmer';
     return function(special)
     {
        return (`You are ||${special}||!`);
     };
    }

}
