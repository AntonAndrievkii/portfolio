function showFirst()
{
    var myDiv = document.getElementById('first'); // уровень иерархии
    if(myDiv.style.display == 'none')
    {
    myDiv.style.display = 'block';
    } else {
    myDiv.style.display = 'none';
    } return false;
}
 
function showSecond()
{   
   var myDiv2 = document.getElementById('second');
   if(myDiv2.style.display == 'none') // 
    {
        myDiv2.style.display = 'block';
    } else {
    myDiv2.style.display = 'none';
    }
    return false;
    } 