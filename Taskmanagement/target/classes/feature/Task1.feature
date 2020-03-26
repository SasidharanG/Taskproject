@Task_Management
Feature: Task_Management Website

@TC_01_Add_Employee
Scenario: Add New Employee in Employee list
Given The user launch the Chrome application
When the user click on administartion and login is proceeded
Then the user click on employee field
Then the user click on add employee field and enter the credentials
And click on add button

@TC_02_Check_Login
Scenario: To check the added employee getting logged in
Given user launch the Chrome application
When the user click on Administration tab 
Then the user enters login credentials with vaild details and clicks login 


@TC_03_Add_Hold_Type
 Scenario: To add Hold Type
Given The user launch Chrome application
When the user click  Administration tab and do valid login
Then the user click on Types field and clicks Add New Type
And the user enters Type Name and submit

@TC_04_search_closed_status
Scenario: To search closed status 
Given user launch Chrome application
When the user enter the home page and select the status
Then the status field is inspected and search button is clicked

@TC_05_Print_the_priority_field
Scenario: To print the priority field
Given launch the Chrome application
When Priority field is inspected and search button should be clicked
Then Print the priority highest Task table in the console