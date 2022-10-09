//gpa
function gpa()
{
  var gpa;
  var c1,c2,c3,c4,c5,c6,c7,c8,sum,sum1;
  var v1,v2,v3,v4,v5,v6,v7,v8;
  c1=(parseInt(document.getElementById("1").value));
  c2=(parseInt(document.getElementById("2").value));
  c3=(parseInt(document.getElementById("3").value));
  c4=(parseInt(document.getElementById("4").value));
  c5=(parseInt(document.getElementById("5").value));
  c6=(parseInt(document.getElementById("6").value));
  c7=(parseInt(document.getElementById("7").value));
  c8=(parseInt(document.getElementById("8").value));
  var s1=(document.getElementById("g1").value);
  if(s1=="O") 
  {
   v1=10;
  }
  else if(s1=="A+")
  {
    v1=9;
  }
  else if(s1=="A")
  {
    v1=8;
  }
  else if(s1=="B+")
  {
    v1=7;
  }
  else if(s1=="B")
  {
    v1=6;
  } 
  else
  {
    v1=0;
  }
  var s2=(document.getElementById("g2").value);
  if(s2=="O") 
  {
   v2=10;
  }
  else if(s2=="A+")
  {
    v2=9;
  }
  else if(s2=="A")
  {
    v2=8;
  }
  else if(s2=="B+")
  {
    v2=7;
  }
  else if(s2=="B")
  {
    v2=6;
  } 
  else
  {
    v2=0;
  }
  var s3=(document.getElementById("g3").value);
  if(s3=="O") 
  {
   v3=10;
  }
  else if(s3=="A+")
  {
    v3=9;
  }
  else if(s3=="A")
  {
    v3=8;
  }
  else if(s3=="B+")
  {
    v3=7;
  }
  else if(s3=="B")
  {
    v3=6;
  } 
  else
  {
    v3=0;
  }
  var s4=(document.getElementById("g4").value);
  if(s4=="O") 
  {
   v4=10;
  }
  else if(s4=="A+")
  {
    v4=9;
  }
  else if(s4=="A")
  {
    v4=8;
  }
  else if(s4=="B+")
  {
    v4=7;
  }
  else if(s4=="B")
  {
    v4=6;
  } 
  else
  {
    v4=0;
  }
  var s5=(document.getElementById("g5").value);
  if(s5=="O") 
  {
   v5=10;
  }
  else if(s5=="A+")
  {
    v5=9;
  }
  else if(s5=="A")
  {
    v5=8;
  }
  else if(s5=="B+")
  {
    v5=7;
  }
  else if(s5=="B")
  {
    v5=6;
  } 
  else
  {
    v5=0;
  }
  var s6=(document.getElementById("g6").value);
  if(s6=="O") 
  {
   v6=10;
  }
  else if(s6=="A+")
  {
    v6=9;
  }
  else if(s6=="A")
  {
    v6=8;
  }
  else if(s6=="B+")
  {
    v6=7;
  }
  else if(s6=="B")
  {
    v6=6;
  } 
  else
  {
    v6=0;
  }
  var s7=(document.getElementById("g7").value);
  if(s7=="O") 
  {
   v7=10;
  }
  else if(s7=="A+")
  {
    v7=9;
  }
  else if(s7=="A")
  {
    v7=8;
  }
  else if(s7=="B+")
  {
    v7=7;
  }
  else if(s7=="B")
  {
    v7=6;
  } 
  else
  {
    v7=0;
  }
  var s8=document.getElementById("g8").value;
  if(s8=="O") 
  {
   v8=10;
  }
  else if(s8=="A+")
  {
    v8=9;
  }
  else if(s8=="A")
  {
    v8=8;
  }
  else if(s8=="B+")
  {
    v8=7;
  }
  else if(s8=="B")
  {
    v8=6;
  } 
  else
  {
    v8=0;
  }
  sum=(c1*v1)+(c2*v2)+(c3*v3)+(c4*v4)+(c5*v5)+(c6*v6)+(c7*v7)+(c8*v8);
  sum1=c1+c2+c3+c4+c5+c6+c7+c8;
  gpa=(sum/sum1);
var GPA=gpa.toFixed(2);
//document.getElementById("res").innerHTML="Your gpa is "+GPA;
document.getElementById("res").innerHTML="Your GPA is "+GPA;
}
//gpa end
//cgpa start
function cgpa(){
  var cgpa;
  var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,tc;
  var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10; 
  c1=(parseFloat(document.getElementById("1").value));
  c2=(parseFloat(document.getElementById("2").value));
  c3=(parseFloat(document.getElementById("3").value));
  c4=(parseFloat(document.getElementById("4").value));
  c5=(parseFloat(document.getElementById("5").value));
  c6=(parseFloat(document.getElementById("6").value));
  c7=(parseFloat(document.getElementById("7").value));
  c8=(parseFloat(document.getElementById("8").value));
  c9=(parseFloat(document.getElementById("9").value));
  c10=(parseFloat(document.getElementById("10").value));

  g1=(parseFloat(document.getElementById("gp1").value));
  g2=(parseFloat(document.getElementById("gp2").value));
  g3=(parseFloat(document.getElementById("gp3").value));
  g4=(parseFloat(document.getElementById("gp4").value));
  g5=(parseFloat(document.getElementById("gp5").value));
  g6=(parseFloat(document.getElementById("gp6").value));
  g7=(parseFloat(document.getElementById("gp7").value));
  g8=(parseFloat(document.getElementById("gp8").value));
  g9=(parseFloat(document.getElementById("gp9").value));
  g10=(parseFloat(document.getElementById("gp10").value));
  tc=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10;
  sum=(c1*g1)+(c2*g2)+(c3*g3)+(c4*g4)+(c5*g5)+(c6*g6)+(c7*g7)+(c8*g8)+(c9*g9)+(c10*g10);
  cgpa=(sum/tc);
  var CGPA=cgpa.toFixed(2);
  document.getElementById("res").innerHTML="Your CGPA is "+CGPA;
 
 //window.confirm("Your CGPA is "+CGPA) 
}