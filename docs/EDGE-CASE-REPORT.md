# Edge Case Test Report – Login Page and Team Page

Testing Method: Manually Testing User Interface
Date Tested: 14 August 2026
Tester: Nicole Anne Tabije 


## Edge Cases Being Covered

- Invalid login
- Direct team-page access without login tested (must redirect)
- Missing-photo and long-blurb edge cases

## Results 

**Login Page**
| ID   | Edge Case             | Expected behaviour | Result (Pass/Fail)|
| -----|-----------------------|--------------------|-------------------|
| EC-1 | Invalid email address (including '@') | Invalid email/password toast shown | Pass | 
| EC-2 | Invalid email address (excluding '@') | Enter valid email text pops up | Pass | 
| EC-3 | Invalid password | Invalid email/password toast shown | Pass | 
| EC-4 | Valid email address and password for nonexisting account | Invalid email/password toast shown | Pass | 
| EC-5 | Accessing team page directly without being logged in | Redirects to login page | Pass | 
| EC-6 | Attempt submitting empty form | Pop up requiring valid email address and password to post form | Pass | 

**Teams Page**
| ID   | Edge Case             | Expected behaviour | Result (Pass/Fail)|
| -----|-----------------------|--------------------|-------------------|
| EC-7 | Missing-photo on creating member profile | Default avatar used | Pass | 
| EC-8 | Unusually long-blurb on creating member profile | Pop up shows blurb will only accept string up to 10000 characters | Pass | 
