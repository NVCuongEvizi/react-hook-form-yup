- validation with Yup:
  @hookform/resolvers yup
- # install react-router-dom in TS, add with @types/react-router-dom
- Age is not required but can not summit => transform to undefined if the default value is empty string [fixed]
- Yup will overide validate of default input form [ok]
- Role cannot change from QA Lead (size >= 6) to Dev (size < 6>) [fixed] -> reset()
- Age, Project Size does not reset by undefined
- Edit Page: If do not select option Project Role -> it will get default value

===========================================

1. Create a React project and 2 routers:
   /Login (public)
   /user (Private)
   user/add (Private)
   user/edit/:id (Private)
2. On login form, we have 3 elements:
   username: string
   password: string (1 uppercase symbol)
   button: submit
3. When user logged in, it navigated to /user
4. User router has a add button and a table with 2 columns:
   id: string
   name: string
5. User clicks on add button and navigates to /user/add router
6. In add router, there is a form with fileds:

Name: string (require)
Age: number
Gender: boolean
Country: string (select field with 2 values: Viet Nam, Other)
OtherCountry: string (Only show if user selects Other value in country field)
Project: Object array
{
Name: string (require)
Size: number (require)
Roles: multi select (if size < 5, option: dev, qa, PM - If size > 5, option: dev, qa, dev lead, qa lead, pm)
Position: string (if size < 3, not require – if size > 3, require)
}
Button: submit;

7. Click on submit button. Show data in console.log or modal
