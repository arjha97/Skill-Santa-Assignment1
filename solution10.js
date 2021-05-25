function vowel_count(str)
{
  var vlist = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vlist.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
document.write(vowel_count("Hey This is Skillsanta JS Training"));