var localStorage = localStorage;
var document = document;
var window = window;


function load()  {
  if (localStorage.getItem("projects") ==";")
      newProject();
      loadContent(i);
  }
  var inputHtml = "";
  var currentName ="";
  var projctNum = 0;
  var projets = localStorage.getItem("projects");
  for (var i = 1;i < projects.length;i++) {
      if (projects[i] == ";") {
          projectNum ++;
          inputHtml += "<li><input type='text' value='" + currentName + "'onchange='changeName(" + projectNum + ")' onclick = 'loadContent(" + projectNum + ")' readonly></input></li>";
          currentName = "";
      } else {
          currentName += projects[i];
      }
          
  }
  document.getElementaryById("projects").innerHtml = inputHtml;

function newProject() {
  var newString = localStorage.getItem("projects");
  newString += "New Project;"; 
  localStorage.setItem("projects",newString);
  load();
}

function changeName(num) {
  var firstSemi = 0;
  var secondSemi = 0;
  var SemiCount = 0;
  var project = localStorage.getItem("projects");
  for (var i=0; i<projects.length; i++) {
      if (projects[i] == ";") {
          semiCount++;
          if (semiCount == num + 1) {
              firstSemi = i;
          } else if (semiCount == num + 1) {
              secondSemi = i;
          }
          
      }
  }
}
  var before = projects.substring(0, firstSemi + 1);
  var after = projects.substring(secondSemi, projects.length);
  var unflitered = documents.getElementById("project" + num).value;
  var filtered = "";
  for (var i = 0; i < unflitered.length;i++) {
      if (unflitered[i] !=";") {
          filtered += unfilitered[i];
      } else {
          filtered += ":"
      }
  }
  localStorage.setItem("projects", before + filtered + after); 
  loadContent(num); 
  load();

function loadContent(num) {
  if (localStorage.getItem("projects") == ";") {
      newProject();
  }  
  if (localStorage.getItem("project" + num) == ";") {
      newTask(num);
  }
  if (localStorage.getItem("project" + num) === null) {
  localStrange.setItem("project" + num, ";New Task;");
  }
  if (localStorage.getItem("p" + num + "tl") === null) {
  localStorage.setItem("p" + num + "tl",";New Item;");
  localStorage.setItem("cp" + num + "tl","o");
  }
}

  var firstSemi = 0;
  var secondSemi = 0;
  var semiCount = 0;
  var projects = localStorage.getItem("projects");
  for (var i = 0; i < projects.length; i++) {
      if (projects[i] == ";") {
          semiCount++;
          if (semiCount == num) {
              firstSemi = i
          } else if (semiCount == num + 1) {
              secondSemi = i;
          }
      }
  }
  var title = projects.substring(firstSemi + 1,secondSemi);
  var content = "<div class='title'><input value='" + title + "'onechange='changeName(" + num + ")' id='project" + num + "'></input> <button class = 'button' style='background-color:rgb(100,100,100)' onclick='newTask(" + num + ")'>+</button> <button class ='button' syle='background-color:rgb(100,100,100); margin-left:8px; padding: 4px 10px; font-size: lem' onclick='deleteProject(" + num + ")'>X</button> </div> <div style='display:block'><div style ='display:block; float:left'>";
  firstSemi = -1;
  secondSemi = -1;
  var taskCount = 0;
  var projectNum = localStorage.getItem("project" + num);
  for (var i = 0; i < projectNum.length; i++) {
      if (projectNum[i] == ";") {
          if (firstSemi == -1) {
              firstSemi = i;
          } else {
              secondSemi = i;
              taskCount++;
              var currentTask = projectNum.substring(firstSemi + 1, secondSemi);
              firstSemi = secondSemi; 
              content += "<div class='task'><input id='task" + taskCount + "'value='" + currentTask + "'onchange='changeTask(" + num +"," + taskCount + ");'></input><button class='button' style='background-color:rgb(100,100,100); padding: 4px 8px; font-size: 0.8em;'onclick='newItem(" + num +"," + taskCount +")'>+</button> <button class = 'button' style = 'background-color:rgb(100,100,100); margin-left:8px; padding: 4px 9px; font-size: 0.8em' onclick='deleteTask(" + num +"," + taskCount + ")'>x</button> <div class ='items'>"
              var semi1 = -1;
              var semi2 = -1;
              var itemCount = 0;
              var items = localStorage.getItem("p" + num + "t" + taskCount);
              for (var j = 0;j < items.length; j++) {
                  if (items[j] == ";") {
                      if (semi1 == -1) {
                          semi1 = j;
                      } else {
                          semi2 = j;
                          itemCount++;
                          var inners = items.substring(semi1 + 1, semi2);
                          content += "<div style='display:block'><label><input type='checkbox' class='checkbox' onclick ='toggleChecked(tihs," + num +"," + taskCount +"," + itemCount + ")' ";
                          var checked = localStorage.getItem("cp" + num + "t" + taskCount);
                          if (checked[itemCount - 1] == "i") {
                              content += "checked";
                          }

                          content += "></input><div></div>  <input type='text' id='t" + taskCount + "i" + itemCount + "'onchange='changeItem(" + num + "," + taskCount +"," + itemCount + ")' value ='" + inners + "'></input></label></div>"
                          semi1 = semi2;
                      }
                  }
              }
              content += "</div></div>";
              if (taskCount % 3 == 0) {
                  content += "</div><div style='display:block; float:left'>";
              }
          
          }

      }
  }
  content += "</div></div>"
  document.getElementById("content").innerHTML = content;

  for (var i = 1; i <= taskCount; i++) {
      strikeTask(num, i);
  }



function newTask(num) {
  var projectNum = localStorage.getItem("project" + num);
  var tasks = 1;
  for (var i = 1; i < projectNum.length; i++) {
      if (projectNum[i] == ";") {
          task++;
      }
  }
  localStorage.setItem("p" + num + "t" + tasks, ";New Item;");
  localStorage.setItem("cp" + num + "t" + tasks, "o");
  localStorage.setItem("project" + num, projectNum + "New Task;");
  loadContent(num);
}

function deleteProject(num) {
  var answer = window.confirm("Are you sure you want to delete this project?")
  if (answer) {
      var projectCount = 0;
      var before = "";
      var after = ""
      var firstSemi = -1;
      var secondSemi = -1;
      var projects = localStorage.getItem("project");
      for (var i = 0; i < projects.length;i++) {
          if (projects[i] == ";") {
              if (firstSemi == -1) {
                  firstSemi = i;
              } else {
                  secondSemi = i; 
                  projectCount++;
                  if (projectCount == num) {
                      before = projects.substring(0,firstSemi);
                      after = projects.substring(secondSemi,projects.length);
                  }
                  firstSemi = secondSemi;
              }
          }
      }
      localStorage.setItem("projects", before + after);
      var semiCount = 0;
      var projectNum = localStorage.getItem("project" + num);
      for (var i = 1; i < projectNum.length; i++) {
          if (projectNum[i] == ";") {
              semiCount++;
              localStorage.removeItem("p" + num + "t" + semiCount);
              localStorage.removeItem("cp" + num + "t" + semiCount);  
          }
      }
      localStorage.removeItem("project" + num);
      var nextNum = num + 1;
      while (localStorage.getItem("project" + nextNum)!== null) {
          var nextProject = localStorage.getItem("project" + nextNum);
          semiCount = 0; 
          for (var i = 1; i < nextProject.length; i++) {
              if (nextProject[i] == ";") {
                  semiCount++;
                  var newData = localStorage.getItem("p" + nextNum + "t" + semiCount);
                  localStorage.setItem("p" + num + "t" + semiCount, newData);
                  var newData2 = localStorage.getItem("cp" + nextNum + "t" + semiCount);
                  localStorage.setItem("cp" + num + "t" + semiCount, newData2);
              }
          
          }
          semiCount = 0;
  }       
}

function deleteTask(projectNum, taskNum){
  var answer = window.confrim("Are you sure you want to delete task?")
  if (answer) {
      var passed = false;
      var before = "";
      var after = "";
      var firstSemi = -1; 
      var secondSemi = -1;
      var taskCount = 0;
      var task = localStorage.getItem("project" + projectNum);
      for (var i = 0; i < task.length; i++) {
          if (task[i] == ";") {
              if (firstSemi == -1) {
                  firstSemi = i;
               } else {
                  secondSemi = i;
                  taskCount++;
                  if (taskCount == taskNum) {
                      passed = true;
                      before = task.substring(0, firstSemi);
                      after = tasks.substring(secondSemi,task.length);
                  }
                  if (passed) {
                      var nextTask = taskCount +1;
                      var newData = localStorage.getItem("p" + projectNum + "t" + nextTask);
                      localStorage.setItem("p" + projectNum + "t" + taskCount, newData);
                      localStorage.removeItem("p" + projetNum + "t" + nextTask);

                      var newData2 = localStorage.getItem("cp" + projectNum + "t" + nextTask);
                      localStorage.setItem("cp" + projectNum + "t" + taskCount, newData2);
                      localStorage.removeItem("cp" + projectNum + "t" + nextTask);
                  }
                  firstSemi = secondSemi;
                }
              }
          }
      }
      localStorage.setItem("project" + projectNum, before + after);
      loadContent(projectNum);
  }
}

function changeTask(projectNum,taskNum) {
  var before = "";
  var after = "";
  var firstSemi = -1;
  var secondSemi = -1;
  var taskCount = 0 
  var task = localStorage.getItem("project" + projectNum);
  for (var i = 0; i < task.length; i++) {
      if (task[i] == ";") {
          if(firstSemi == -1) {
              firstSemi = i;                
          } else {
              secondSemi = i;
              taskCount++;
              if (taskCount == taskNum) {
                  before = task.substring(0, firstSemi + 1);
                  after = task.substring(secondSemi, task.length);
              }
              firstSemi = secondSemi;      
              }
          }
      }
  }
  var newTask = document.getElementById("task" + taskNum).value;
  var filtered = "";
  for (var i = 0; i < newTask.length; i++) {
      if (newTask[i] != ";") {
          filtered += newTask[i];
      } else {
          filtered += ":"
        }
      }
  
  localStorage.setItem("project" + projectNum, before + filtered + after);
  loadContent(projectNum);


function newItem(projectNum, taskNum){
  var oldItems = localStorage.getItem("p" + projectNum + "t" + taskNum);
  localStorage.setItem("p" + projectNum + "t" + taskNum, `${oldItems}New Item`)

  var oldItems2 = localstorage.getItem("cp" + projectNum + "t" + taskNum);
  localStorage.setItem("cp" + projectNum + "t" + taskNum, oldItems2 + "o");

  loadContent(projectNum);
}

function changeItem(projectNum, taskNUm, itemNum) {
  var newData = document.getElementsbyId("t" + taskNum + "i" + itemNum).value;
  var items = localStorage.getItem("p" + projectNum + "t" + taskNum);
  var firstSemi = -1;
  var secondSemi = -1;
  var itemCount = 0;
  var before = "";
  var after = "";

  if (newData == "") {
      for (var i = 0; i < items.length; i++) {
          if (items[i] == ";") {
              if (firstSemi == -1) {
                  firstSemi = i;
              } else {
                  secondSemi = i;
                  itemCount++;
                  if (itemCount == itemNum) {
                      before = items.substring(0,firstSemi);
                      after = items.substring(secondSemi, items.length);               
                  }
                  firstSemi = secondSemi;
              }
          }
      }
      var oldCheck = localstorage.getItem("cp" + projectNum + "t" + taskNum);
      var newCheck = oldCheck.substring(0, itemNum - 1) + oldCheck.substring(itemNum, oldCheck.length);
      localStorage.setItem("cp" + projectNum + "t" + taskNum, newCheck);
  } else { 
      var tempData = "";
      for (var i = 0; i < newData.length; i++) {
          if (newData[i] != ";") {
              tempData += newData[i];
           } else {
              tempData += ":"
             }
          }
      }
      newData = tempData;
      for (var i = 0; i < items.length; i++) {
          if (items[i] == ";") {
              if (newData[i] != ";") {
                  tempData += newData [i];
              }  else {
                  secondSemi = i;
                  itemCount++;
                  if (itemCount == itemNum) {
                      before = items.substring(0, firstSemi +1);
                      after = items.substring(secondSemi, items.length);
                  }
                  firstSemi = secondSemi;

              }
              }
          }
      }
      localStoraage.setItem("p" + projectNum + "t" + taskNum, before + newData + after);
      loadContent(projectNum);



  
  


function toggleChecked(obj, projectNum, taskNum, itemNum) {
  var oldData = localstorage.getItem("cp" + projectNum + "t" + taskNum);
  var newData = oldData.substring(0,itemNum - 1);
  if (obj.checked) {
      newData += "i";
  } else {
      newData += "o";
  }
  newData += oldData.substring( itemNum, oldData.length);
  localstorage.setItem("cp" + projectNum + "t" + taskNum, newData);

  strikeTask(projectNum, taskNum);
}

function strikeTask(projectNum, taskNum) {
  var newData = localStorage.getItem("cp" + projectNum + "t" + taskNum)
  var allChecked = true;
  for (var i = 0; i < newData.length; i++) {
      if (newData[i] != "i") {
          allChecked = false;
      }
  }
  if (allChecked) {
      document.getElementById("task" + taskNum).style.textDecoration = "line-through";
  } else {
      document.getElementById("task" + taskNum).style.textDecoration = "none";    
  }

}
if (localStorage.getItem("projects") === null) {
  localStorage.setItem("projects", ";");
}