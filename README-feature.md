<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# TypeSCript Project

The goal is to practice TypeScript by rewriting an old project, I picked the project of the Happy Thoughts messaging app. 

## How to Get Started

1. **Clone the old project:**
   - If you haven't already, clone your old Happy Thoughts repository.
   - Create a new branch for the TypeScript project:
     ```bash
     git checkout -b feature/rtypescript
     ```

2. **Install Dependencies & Start Development Server:**
   - Install required packages and start the development server:
     ```bash
     npm i && code . && npm run dev
     ```
   - Install TypeScript: 
     ```bash
     npm install -g typescript
     ```

     Check if TypeScript is installed correctly:
     ```bash
     tsc -v
     ```

3. **Workflow:**
   - Rewrite components and files using TypeScript, following best practices.
   - Run the app to ensure everything works as expected.
   - Use the Problems panel to fix any TypeScript-related issues.
   - Other ways to check if there are any TypeScript issues:
     ```bash
     tsc --noEmit
     ```

4. **Deployment:**
   - When you're done, choose one of the following deployment methods:
     - **Netlify Branch Deploy:** Create a branch deploy to preview changes.
     - **Merge to Main:** Merge your branch to `master/main` to trigger a redeploy.

---

### The Problem  

1. **Events**  
   I used the generic `Event` type from the code example for an `onSubmit` event, but TypeScript flagged this as incompatible. TypeScript complained that `FormEvent<HTMLFormElement>` was missing.  

   To address this problem, I referred to the article ["TypeScript: How to type a React form onSubmit handler"](https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler).  
   
   After updating the event type to `React.FormEvent<HTMLFormElement>`, I got another issue: TypeScript required the return type of an `async` function to be defined as the global `Promise<T>` type. To solve this, I used [this link](https://www.typescriptlang.org/play/?ts=4.4.0-beta#code/PTAEEFQZwSwWwA4BsCmoUA8CGjWgO4wAuAFgPYCuRoA5igHYoBOMAxlAFAcz1HMBmWVmnBJ8WAJ5QAyhPqtQAbw6hVofvQAUASgBcoAG5kYAEwDcHAL5dWSLFCgQxkmXNYBJXCjih4ybwxEjqLiUrLySipqIKDAAIQAOqAAKiQwjlDkFEgmoABGaFj06ExMZExxUaoIFHlIbKD2bupaeqAACmVw6SgAPEamAHxK1tZcXDGQsLgw-GxYRDBkxWT8oHASjaxEFFhIoKz2KAA0BMQk69mL-r5ecIELS-SORGSgXDx8TILCoACykgK4Cgbl6wOamD49BMjjyZDIqCKw2UanWgJQ4PkADEKPJFssdPpMQpIQwYaAiEwKGgAPwdLo9frGEzDfQDcxWGx2BwQEHyTz+Hx+VD3XiOAESIF81i9SnU5FVUA1OoNJoRODo4k4vFPQn0sjdKB9dnI0Zc+zBaUCkUAJlugsC4s10tlVJQCtRMVS6V8jiKJTKTFO9nQGAQKG2KBMiuV9QUGslGOl2u2ura7JGnI4tgtoHCHju9pFjv+ztBgiQRo9aljDQTUrcKfxrTZzMzYxzPPz1u8duFATFpcTxN6FarkU9YHiSW9GSyOUalbeBUaxWYgbiKTSjh9pDQhyNFJIC1A7lAJmWAHJqLiTMwoEQitHUbWFGr42XsbjUwS2p0DYyJrtuaXZuD2cAAMxFgOQRDg28ijns44otEYCzr6q4BuUwaOJg4aRuYvjUEwKB7EgmxIPCADWjj1FRaB7r6UDUhhhCkOo37No4d45iRuRsRcjHvqA9ESPg5TPjWtRxmiw7JpxaatqYwFAA).  

2. **SVG Images**  
   Problem message: "Cannot find module '../assets/GitHubLogo.svg' or its corresponding type declarations."   
   
   To resolve this issue, I needed to declare a type for the non-code asset used in the project: the SVG file in the footer. This declaration helps TypeScript understand how to handle the import without throwing errors.
   
   Googled this issue and found a helpful post: [How can I get rid of the error "cannot find module" when importing an image file?](https://www.reddit.com/r/typescript/comments/181awh2/how_can_i_get_rid_of_the_error_cannot_find_module/). Based on this, I created a new folder named declarations and added a new file named *-d.ts, where I declared that .svg files should be treated as strings. 

---

### A few useful sources in this project
- [Technigo's guide on how to get started with TypeScript](https://technigo.notion.site/How-to-get-your-React-Vite-project-ready-for-TypeScript-14aad8401a9480cb900dc20ed12cd04a)
- [Types vs Interfacesin TypeScript](https://blog.logrocket.com/types-vs-interfaces-typescript/)
- [TypeScript: How to type a React form onSubmit handler](https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler)
- [Promise void issue in HappyBoard component](https://www.typescriptlang.org/play/?ts=4.4.0-beta#code/PTAEEFQZwSwWwA4BsCmoUA8CGjWgO4wAuAFgPYCuRoA5igHYoBOMAxlAFAcz1HMBmWVmnBJ8WAJ5QAyhPqtQAbw6hVofvQAUASgBcoAG5kYAEwDcHAL5dWSLFCgQxkmXNYBJXCjih4ybwxEjqLiUrLySipqIKDAAIQAOqAAKiQwjlDkFEgmoABGaFj06ExMZExxUaoIFHlIbKD2bupaeqAACmVw6SgAPEamAHxK1tZcXDGQsLgw-GxYRDBkxWT8oHASjaxEFFhIoKz2KAA0BMQk69mL-r5ecIELS-SORGSgXDx8TILCoACykgK4Cgbl6wOamD49BMjjyZDIqCKw2UanWgJQ4PkADEKPJFssdPpMQpIQwYaAiEwKGgAPwdLo9frGEzDfQDcxWGx2BwQEHyTz+Hx+VD3XiOAESIF81i9SnU5FVUA1OoNJoRODo4k4vFPQn0sjdKB9dnI0Zc+zBaUCkUAJlugsC4s10tlVJQCtRMVS6V8jiKJTKTFO9nQGAQKG2KBMiuV9QUGslGOl2u2ura7JGnI4tgtoHCHju9pFjv+ztBgiQRo9aljDQTUrcKfxrTZzMzYxzPPz1u8duFATFpcTxN6FarkU9YHiSW9GSyOUalbeBUaxWYgbiKTSjh9pDQhyNFJIC1A7lAJmWAHJqLiTMwoEQitHUbWFGr42XsbjUwS2p0DYyJrtuaXZuD2cAAMxFgOQRDg28ijns44otEYCzr6q4BuUwaOJg4aRuYvjUEwKB7EgmxIPCADWjj1FRaB7r6UDUhhhCkOo37No4d45iRuRsRcjHvqA9ESPg5TPjWtRxmiw7JpxaatqYwFAA)
- [TypeScript Cheat Sheets](https://www.typescriptlang.org/cheatsheets/)
- [How can I get rid of the error "cannot find module" when importing an image file?](https://www.reddit.com/r/typescript/comments/181awh2/how_can_i_get_rid_of_the_error_cannot_find_module/)  

If Zustand is used, these two links are useful: 
  1. [Understanding Zustand: A Beginner's Guide with TypeScript](https://dev.to/avt/understanding-zustand-a-beginners-guide-with-typescript-4jjo) 
  2. [A Guide in GitHub](https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md)

### View it live
