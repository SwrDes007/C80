var student=[];

var display=[];

function submit (){

    for(var j=1; j<=4; j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        student.push(name);
    }

    console.log(student);

    var length_student= student.length-1;

    for(var k=0; k<=length_student; k++){
       display.push("<h4>"+student[k]+"</h4>"); 
    }

    document.getElementById("display_name_with_commas").innerHTML=display;

    var remove_commas=display.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    student.sort();

    var display_sorting=[];

    var length_student= student.length-1;

    for(var k=0; k<=length_student; k++){
       display_sorting.push("<h4>"+student[k]+"</h4>"); 
    }

    document.getElementById("display_name_with_commas").innerHTML=display_sorting;

    var remove_commas=display.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}