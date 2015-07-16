'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
var bmi = weight/parseFloat(height*height);
if (bmi < 18.5)
  alert(bmi+"过轻");
else if(bmi>=18.5 && bmi <25)
  alert(bmi+"正常");
else if(bmi>=25 && bmi <28)
  alert(bmi+"过重");
else if(bmi>=28 && bmi <32)
  alert(bmi+"肥胖");
else
  alert(bmi+"严重肥胖");
