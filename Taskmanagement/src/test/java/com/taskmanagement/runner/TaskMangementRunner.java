package com.taskmanagement.runner;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/resources/feature/Task1.feature",
plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
tags= {"@TC_01_Add_Employee,@TC_02_Check_Login,@TC_03_Add_Hold_Type,@TC_04_search_closed_status,@TC_05_Print_the_priority_field"},
glue = {"com.taskmanagement.stepdefinition"},
monochrome = true
)
public class TaskMangementRunner  {
	// method for report generation 
	@AfterClass
	  public static void extendReport() { 
		Reporter.loadXMLConfig("src/test/resources/TestData/extent-config.xml");
		 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	      Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	      Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
	      Reporter.setSystemInfo("Selenium", "3.141.59");
	      Reporter.setSystemInfo("Maven", "4.0.0");
	      Reporter.setSystemInfo("Java Version", "1.8.0_131");
		}

}
	