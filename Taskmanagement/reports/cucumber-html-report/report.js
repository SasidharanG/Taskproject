$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Taskmanagement.Feature");
formatter.feature({
  "line": 2,
  "name": "Task_Management Website",
  "description": "",
  "id": "task-management-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "",
  "description": "    Add New Employee in Employee list",
  "id": "task-management-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Add_Employee"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user click on administartion and login is proceeded",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user click on employee field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user click on add employee field and enter the credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeStep.the_user_launch_chrome()"
});
formatter.result({
  "duration": 9412305100,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.the_user_click_on_Administartion_and_Login_is_proceeded()"
});
formatter.result({
  "duration": 6596610200,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.the_user_click_on_Employee_field()"
});
formatter.result({
  "duration": 797981300,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.the_user_click_on_Add_Employee_field_and_enter_the_credentials()"
});
formatter.result({
  "duration": 2132934200,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.click_on_Add_button()"
});
formatter.result({
  "duration": 5504718600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "  To check the added employee getting logged in",
  "id": "task-management-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@TC_02_Check_Login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user click on Administration tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the user enters login credentials and clicks login",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeLoginStep.the_user_launch_chrome_emplo()"
});
formatter.result({
  "duration": 6734437800,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeLoginStep.the_user_click_on_Administration_tab()"
});
formatter.result({
  "duration": 1619088200,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeLoginStep.the_user_enters_login_credentials_and_clicks_login()"
});
formatter.result({
  "duration": 9765453700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "   To add Hold Type",
  "id": "task-management-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TC_03_Add_Hold_Type"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user launch Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user click  Administration tab and do valid login",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the user click on Types field and clicks Add New Type",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the user enters Type Name and submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_launch_chrome_type()"
});
formatter.result({
  "duration": 6202918000,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_click_Administration_tab_and_do_valid_login()"
});
formatter.result({
  "duration": 2925838100,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_click_on_Types_field_and_clicks_Add_New_Type()"
});
formatter.result({
  "duration": 1880611400,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_enters_Type_Name()"
});
formatter.result({
  "duration": 5854728500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": " To search closed status",
  "id": "task-management-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TC_04_search_closed_status"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user launch Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user enter the home page and select the status",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the status field is inspected and search button is clicked",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchClosedStatusStep.the_user_launch_chrome_cls()"
});
formatter.result({
  "duration": 6615946200,
  "status": "passed"
});
formatter.match({
  "location": "SearchClosedStatusStep.the_user_enter_the_home_page_and_select_the_status()"
});
formatter.result({
  "duration": 5454435100,
  "status": "passed"
});
formatter.match({
  "location": "SearchClosedStatusStep.the_status_field_is_inspected_and_search_button_is_clicked()"
});
formatter.result({
  "duration": 167152500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "task-management-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC_05_Print_the_priority_field"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Priority field is inspected and search button should be clicked",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Print the priority high Task table in the console",
  "keyword": "Then "
});
formatter.match({
  "location": "PriorityHighTaskStep.the_user_launch_chrome_pri()"
});
formatter.result({
  "duration": 4522203300,
  "status": "passed"
});
formatter.match({
  "location": "PriorityHighTaskStep.priority_field_is_inspected_and_search_button_should_be_clicked()"
});
formatter.result({
  "duration": 1604603100,
  "status": "passed"
});
formatter.match({
  "location": "PriorityHighTaskStep.print_Task_table()"
});
formatter.result({
  "duration": 8602322400,
  "status": "passed"
});
});