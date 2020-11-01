const { browser } = require("protractor");

//spec.js
describe('CaPPMS Homepage', function() {

  //REQ-1.1 As an unauthenticated user, I want to access the SWEN 670 home page via the internet. 
  it('Navigate to the Homepage', function() {
      browser.driver.manage().window().maximize();
      browser.get('http://localhost:4200/home/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');
      browser.sleep(4000)
      
    });

    //REQ-1.2 As an unauthenticated user, I want to learn about the SWEN 670 capstone project.
    it('Navigate to the About page', function() {
      browser.get('http://localhost:4200/about/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/about');
      browser.sleep(4000)
    });

    //REQ-1.6 As an unauthenticated user, I want to view frequently asked questions (FAQ) regarding the capstone project.
    it('Navigate to the FAQ page', function() {
      browser.get('http://localhost:4200/faq/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/faq');
      browser.sleep(4000)
    });

    //REQ-1.3 As an unauthenticated user, I want to submit a project proposal idea for consideration. 
    it('Show Form Submit Process', function(){
      browser.get('http://localhost:4200/home/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');

      browser.sleep(5000);
      browser.findElement(by.id("title")).sendKeys('Ms.');
      browser.findElement(by.id("first_name")).sendKeys('Kathryn');
      browser.findElement(by.id("Last_name")).sendKeys('Stewart');
      browser.findElement(by.id("phone_number")).sendKeys('123-456-1234');
      browser.findElement(by.id("email")).sendKeys('kathryn@gmail.com');
      //element(by.cssContainingText('usertypeselect', 'Sponsor')).click();
      //element(by.id("usertypeselect").sendKeys("Sponsor"));
      browser.findElement(by.id("project_title")).sendKeys('Kathryns Title');
      browser.findElement(by.id("project_description")).sendKeys('Kathryns Description');
      browser.findElement(by.id("project_website")).sendKeys('www.kathryn.com');
      browser.findElement(by.buttonText('Submit')).click();
      browser.sleep(4000);
    });

    //REQ-1.5 As an unauthenticated user, I want to receive notification that required data has not been entered.  
    it('Show Form Error Messages', function(){
      browser.get('http://localhost:4200/home/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');
      browser.findElement(by.id('first_name')).sendKeys('');
      browser.findElement(by.id("title")).sendKeys('');
      browser.findElement(by.id("first_name")).sendKeys('');
      browser.findElement(by.id("Last_name")).sendKeys('');
      browser.findElement(by.id("phone_number")).sendKeys('');
      browser.findElement(by.id("email")).sendKeys('');
      browser.findElement(by.id("project_title")).sendKeys('');
      browser.findElement(by.id("project_description")).sendKeys('');
      browser.findElement(by.id("project_website")).sendKeys('');
      //element(by.cssContainingText('option', 'Sponsor')).click();
      browser.findElement(by.buttonText('Submit')).click();
      browser.sleep(4000);
    });

    //REQ-1.4 As an unauthenticated user, I want to cancel a project proposal idea before submission.  
    it('Show Form Cancel Process', function(){
      browser.get('http://localhost:4200/home/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');
      browser.sleep(2000);
      browser.findElement(by.name("title")).sendKeys('Ms.');
      browser.findElement(by.id("first_name")).sendKeys('Kathryn');
      browser.findElement(by.id("Last_name")).sendKeys('Stewart');
      browser.findElement(by.id("phone_number")).sendKeys('123-456-1234');
      browser.findElement(by.id("email")).sendKeys('kathryn@gmail.com');
      browser.findElement(by.id("project_title")).sendKeys('Kathryns Title');
      browser.findElement(by.id("project_description")).sendKeys('Kathryns Description');
      browser.findElement(by.id("project_website")).sendKeys('www.kathryn.com');
      //element(by.cssContainingText('option', 'Sponsor')).click();
      browser.findElement(by.buttonText('Cancel')).click();
      browser.sleep(4000);
    });

    //REQ-1.8 As the professor, I want an option to login to the system.
    // REQ-1.12 As the professor, I want to login to view additional project details. 
    it('Login', function() {
      browser.get('http://localhost:4200/login/');
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/login');
      browser.findElement(by.id("username")).sendKeys('professoradmin');
      browser.findElement(by.id("password")).sendKeys('professorpassword');
      browser.sleep(1000);
      browser.findElement(by.buttonText('Login')).click();
      browser.sleep(1000);
    });

    //REQ-1.7 As an authenticated user, I want to view submitted project proposal ideas.
    //REQ-1.13 As the professor, I want to search based on project status, i.e. Approved. 
    //REQ-1.14 As the professor, I want to filter based on project status, i.e. Approved. 
    it('Search and Filter', function() {
      browser.findElement(by.id("mat-input-0")).sendKeys('Kat');
      browser.sleep(2000);
    });



    //REQ-1.17 As the professor, I want to receive notification that required data has not been entered.
    it('Show Professor Form Error Messages', function(){
      browser.findElement(by.buttonText('Update')).click();
      browser.findElement(by.id("project.user.title")).clear();
      browser.findElement(by.id("project.user.first_name")).clear();
      browser.findElement(by.id("project.user.last_name")).clear();
      browser.findElement(by.id("project.user.phone_number")).clear();
      browser.findElement(by.id("project.user.email")).clear();
      browser.findElement(by.id("project_title")).clear();
      browser.findElement(by.id("project_description")).clear();
      browser.findElement(by.id("project_website")).clear();
      browser.findElement(by.id("comment")).clear();
      browser.sleep(4000);
      browser.findElement(by.id("project.user.title")).sendKeys('');
      browser.findElement(by.id("project.user.first_name")).sendKeys('');
      browser.findElement(by.id("project.user.last_name")).sendKeys('');
      browser.findElement(by.id("project.user.phone_number")).sendKeys('');
      browser.findElement(by.id("project.user.email")).sendKeys('');
      browser.findElement(by.id("project_title")).sendKeys('');
      browser.findElement(by.id("project_description")).sendKeys('');
      browser.findElement(by.id("project_website")).sendKeys('');
      browser.findElement(by.id("comment")).sendKeys('');
      //element(by.cssContainingText('option', 'Sponsor')).click();
      browser.findElement(by.buttonText('Submit')).click();
      browser.sleep(4000);

    });


     //REQ-1.18 As the professor, I want to cancel edits made to a specific proposal. 
     it('Show Professor Cancel Button', function(){
      browser.findElement(by.buttonText('Update')).click();
      browser.sleep(2000);
      browser.findElement(by.name("project.user.title")).sendKeys('Ms.');
      browser.findElement(by.id("project.user.first_name")).sendKeys('Kathryn Updated');
      browser.findElement(by.id("project.user.last_name")).sendKeys('Stewart Updated');
      browser.findElement(by.id("project.user.phone_number")).sendKeys('123-456-1234');
      browser.findElement(by.id("project.user.email")).sendKeys('kathrynupdated@gmail.com');
      browser.findElement(by.id("project_title")).sendKeys('Kathryns Title Updated');
      browser.findElement(by.id("project_description")).sendKeys('Kathryns Description Updated');
      browser.findElement(by.id("project_website")).sendKeys('www.kathrynupdated.com');
      //element(by.id('usertypeselect', 'Sponsor')).click();
      //element(by.id('usertypeselect', 'Approved')).click();
      browser.findElement(by.buttonText('Cancel')).click();
      browser.sleep(4000);
    });

    //REQ-1.16 As the professor, I want to add private comments to a specific proposal.
    //REQ-1.19 As the professor, I want to edit the details of a specific proposal.
    //REQ-1.22 As the professor, I want to be able to add a reason for rejection to a specific proposal. 
    it('Edit Details', function() {
      browser.findElement(by.buttonText('Update')).click();
      browser.sleep(2000);
      browser.findElement(by.name("project.user.title")).clear();
      browser.findElement(by.id("project.user.first_name")).clear();
      browser.findElement(by.id("project.user.last_name")).clear();
      browser.findElement(by.id("project.user.phone_number")).clear();
      browser.findElement(by.id("project.user.email")).clear();
      browser.findElement(by.id("project_title")).clear();
      browser.findElement(by.id("project_description")).clear();
      browser.findElement(by.id("project_website")).clear();
      //browser.findElement(by.cssContainingText('usertypeselect', 'Sponsor')).click();
      browser.findElement(by.id("comment")).clear();
      //browser.findElement(by.id('statusselect').sendKeys('Approved')).click();
      browser.findElement(by.name("project.user.title")).sendKeys('Ms.');
      browser.findElement(by.id("project.user.first_name")).sendKeys('Kathryn Updated');
      browser.findElement(by.id("project.user.last_name")).sendKeys('Stewart Updated');
      browser.findElement(by.id("project.user.phone_number")).sendKeys('123-456-1234');
      browser.findElement(by.id("project.user.email")).sendKeys('kathrynupdated@gmail.com');
      browser.findElement(by.id("project_title")).sendKeys('Kathryns Title Updated');
      browser.findElement(by.id("project_description")).sendKeys('Kathryns Description Updated');
      browser.findElement(by.id("project_website")).sendKeys('www.kathrynupdated.com');
      element(by.id('usertypeselect', 'Sponsor')).click();
      //element(by.cssContainingText('usertypeselect', 'Sponsor')).click();
      browser.findElement(by.id("comment")).sendKeys('This is a private comment that only the professor can see and edit. ');
      element(by.id('statusselect', 'Approved')).click();
      browser.findElement(by.buttonText('Submit')).click();
      browser.sleep(2000);
    });

    //REQ-1.15 As the professor, I want to view the details of a specific proposal. 
    it('View Details', function() {
      browser.sleep(1000);
      browser.findElement(by.buttonText('Details')).click();
      browser.sleep(1000);
    });

    

    //REQ-1.21 As the professor, I do not want the private comments to be included in the export. 
    //REQ-1.23 As the professor, I want to export a specific proposal in Word format.
    it('export', function() {
      browser.findElement(by.buttonText('Export to word doc')).click();
      //long wait here to open word doc manualy
      browser.sleep(7000);
      browser.navigate().back();
      
    });

    //REQ-1.9 As the professor, I want to be able to create an additional authenticated account. 
    //REQ-1.10 As the professor, I want to be notified if a new authenticated account already exists when creating. 
        it('Create New Account', function() {
          browser.get('http://localhost:4200/newadmin');
          browser.findElement(by.id("user.first_name")).sendKeys('Kathryn');
          browser.findElement(by.id("user.last_name")).sendKeys('Stewart');
          browser.findElement(by.id("user.email")).sendKeys('kathryn@gmail.com');
          browser.findElement(by.id("account.password")).sendKeys('password');
          browser.findElement(by.id("password2")).sendKeys('password');
          browser.findElement(by.buttonText('Register')).click();
          browser.sleep(2000);

          browser.findElement(by.id("user.first_name")).sendKeys('Kathryn');
          browser.findElement(by.id("user.last_name")).sendKeys('Stewart');
          browser.findElement(by.id("user.email")).sendKeys('kathryn@gmail.com');
          browser.findElement(by.id("account.password")).sendKeys('password');
          browser.findElement(by.id("password2")).sendKeys('password');
          browser.findElement(by.buttonText('Register')).click();
          browser.sleep(2000);
          
          //This test is not working. Forcing the system to fail: 
          expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');
    });
    
    //REQ-1.11 As the professor, I want a way to reset my password. 
    it('Reset Password', function() {
      //Functionality not implemented 
      //This test is not working. Forcing the system to fail: 
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');
      
    });

//REQ-1.20 As the professor, I want to delete a specific proposal.
    it('Delete Proposal', function() {

      browser.get('http://localhost:4200/proposal');
      //Test breaks the database. Run manually. 
      //browser.findElement(by.buttonText('Delete')).click();

      //This test is not working. Forcing the system to fail: 
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home');
      
      });
});