package com.taskmanagement.runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/resources/feature/Task.feature",
plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport"},
tags= {"@TC_01_Add_Employee,@TC_02_Check_Login,@TC_03_Add_Hold_Type,@TC_04_search_closed_status,@TC_05_Print_the_priority_field"},
glue = {"com.taskmanagement.stepdefinition"},
monochrome = true
)
public class TaskMangementRunner  {
}
	